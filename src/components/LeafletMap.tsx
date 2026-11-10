'use client';

import React, { useEffect, useRef } from 'react';

interface LeafletMapProps {
  originCoords?: { lat: number; lng: number } | null;
  destCoords?: { lat: number; lng: number } | null;
}

export default function LeafletMap({ originCoords, destCoords }: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      // Import Leaflet dynamically to avoid SSR issues
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!isMounted) return;

      // Default Mar del Plata center
      const defaultCenter: [number, number] = [-38.0055, -57.5426];

      if (!mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapContainerRef.current).setView(defaultCenter, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(mapInstanceRef.current);
      }

      const map = mapInstanceRef.current;

      // Clear existing markers/lines
      map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
          map.removeLayer(layer);
        }
      });

      const points: [number, number][] = [];

      if (originCoords) {
        const originMarker = L.marker([originCoords.lat, originCoords.lng]).addTo(map);
        originMarker.bindPopup('<b>Origen</b>').openPopup();
        points.push([originCoords.lat, originCoords.lng]);
      }

      if (destCoords) {
        const destMarker = L.marker([destCoords.lat, destCoords.lng]).addTo(map);
        destMarker.bindPopup('<b>Destino</b>');
        points.push([destCoords.lat, destCoords.lng]);
      }

      if (points.length === 2) {
        const polyline = L.polyline(points, {
          color: '#0950F6',
          weight: 4,
          opacity: 0.8,
          dashArray: '8, 8',
        }).addTo(map);
        map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
      } else if (points.length === 1) {
        map.setView(points[0], 14);
      }
    }

    initMap();

    return () => {
      isMounted = false;
    };
  }, [originCoords, destCoords]);

  return (
    <div className="w-full h-[360px] rounded-2xl overflow-hidden border border-[#BACEFD] shadow-[0_10px_25px_-5px_rgba(9,80,246,0.15)] relative">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}

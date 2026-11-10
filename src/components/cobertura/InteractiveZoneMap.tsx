'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';
import { ShieldCheck, Clock, RefreshCw, Compass } from 'lucide-react';
import { trackAnalytics } from '@/lib/analytics';

const MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  process.env.VITE_GOOGLE_MAPS_API_KEY ||
  'AIzaSyC4ToSBluIAOMfiVt11MKYAjNCg643_LfQ';

// Base Operations
const BASE_LOCATION = { lat: -38.0055, lng: -57.5426 }; // Friuli 1972, Mar del Plata
const DEFAULT_CENTER = { lat: -38.010, lng: -57.550 };
const DEFAULT_ZOOM = 12;

export interface ZoneData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  barrios: string;
  status: string;
  tiempo: string;
  colorHex: string;
  badgeBg: string;
  borderColor: string;
  center: { lat: number; lng: number };
  zoomLevel: number;
  paths: { lat: number; lng: number }[];
}

export const ZONAS_DATA: ZoneData[] = [
  {
    id: 'z1',
    name: 'Zona 1: Centro y Macrocentro',
    shortName: 'Zona 1 - Centro',
    description: 'Corazón comercial y financiero de Mar del Plata con la más alta densidad de entregas.',
    barrios: 'Plaza San Martín, Güemes, Plaza Mitre, La Perla, Terminal Vieja (Paseo Aldrey), Estación Ferroautomotora y Microcentro.',
    status: 'Frecuencia Continua',
    tiempo: 'Entrega ágil en el día',
    colorHex: '#0950F6',
    badgeBg: 'bg-brand-blue-500 text-white',
    borderColor: 'border-brand-blue-500',
    center: { lat: -38.001, lng: -57.545 },
    zoomLevel: 14,
    paths: [
      { lat: -37.988, lng: -57.558 },
      { lat: -37.988, lng: -57.532 },
      { lat: -38.018, lng: -57.530 },
      { lat: -38.022, lng: -57.555 },
    ],
  },
  {
    id: 'z2',
    name: 'Zona 2: Puerto y Sur Urbano',
    shortName: 'Zona 2 - Sur / Puerto',
    description: 'Eje gastronómico, industrial y residencial del sur marítimo de Mar del Plata.',
    barrios: 'Puerto Comercial, Alem, Playa Grande, Bosque Peralta Ramos, Punta Mogotes, Alfar hasta el Faro de la Memoria.',
    status: 'Frecuencia Diaria',
    tiempo: 'Rondas fijas mañana y tarde',
    colorHex: '#3570F8',
    badgeBg: 'bg-brand-blue-400 text-white',
    borderColor: 'border-brand-blue-400',
    center: { lat: -38.055, lng: -57.545 },
    zoomLevel: 13,
    paths: [
      { lat: -38.022, lng: -57.555 },
      { lat: -38.018, lng: -57.530 },
      { lat: -38.090, lng: -57.535 },
      { lat: -38.090, lng: -57.585 },
      { lat: -38.040, lng: -57.575 },
    ],
  },
  {
    id: 'z3',
    name: 'Zona 3: Norte y Constitución',
    shortName: 'Zona 3 - Norte',
    description: 'Avenida comercial Constitución, accesos norte y área logística de la estación Camet y Aeropuerto.',
    barrios: 'Parque Luro, Av. Constitución comercial, Barrio Estrada, Zacagnini, Aeropuerto Astor Piazzolla y Estación Camet.',
    status: 'Frecuencia Diaria',
    tiempo: 'Rondas fijas mañana y tarde',
    colorHex: '#628FF9',
    badgeBg: 'bg-brand-blue-300 text-white',
    borderColor: 'border-brand-blue-300',
    center: { lat: -37.962, lng: -57.550 },
    zoomLevel: 13,
    paths: [
      { lat: -37.935, lng: -57.575 },
      { lat: -37.935, lng: -57.510 },
      { lat: -37.988, lng: -57.532 },
      { lat: -37.988, lng: -57.558 },
    ],
  },
  {
    id: 'z4',
    name: 'Zona 4: Oeste Urbano',
    shortName: 'Zona 4 - Oeste',
    description: 'Barrios residenciales e industriales del oeste urbano y acceso por Avenida Colón.',
    barrios: 'Los Galpones, Regional, Libertad, San Cayetano, Av. Colón al fondo, Autódromo y Barrio Belgrano.',
    status: 'Frecuencia Diaria',
    tiempo: 'Rondas diarias programadas',
    colorHex: '#8EAFFB',
    badgeBg: 'bg-brand-blue-200 text-brand-blue-900',
    borderColor: 'border-brand-blue-200',
    center: { lat: -38.000, lng: -57.595 },
    zoomLevel: 13,
    paths: [
      { lat: -37.970, lng: -57.625 },
      { lat: -37.970, lng: -57.558 },
      { lat: -38.040, lng: -57.555 },
      { lat: -38.040, lng: -57.625 },
    ],
  },
  {
    id: 'z5',
    name: 'Zona 5: Periferia y Destinos Especiales',
    shortName: 'Zona 5 - Periferia',
    description: 'Rutas interurbanas y localidades periféricas del partido de General Pueyrredón y alrededores.',
    barrios: 'Batán, Sierra de los Padres, Camet Norte, Santa Clara del Mar, Chapadmalal y Acantilados.',
    status: 'Tarifa por Km ($1.000/km)',
    tiempo: 'Coordinación con anticipación',
    colorHex: '#FFEC01',
    badgeBg: 'bg-brand-yellow-500 text-brand-blue-900 font-bold',
    borderColor: 'border-brand-yellow-500',
    center: { lat: -37.950, lng: -57.660 },
    zoomLevel: 11,
    paths: [
      { lat: -37.820, lng: -57.780 },
      { lat: -37.800, lng: -57.450 },
      { lat: -38.160, lng: -57.430 },
      { lat: -38.160, lng: -57.820 },
    ],
  },
];

/**
 * Custom MapPolygon component drawing Google Maps Polygon using native Maps JS API
 */
function ZonePolygon({
  paths,
  strokeColor,
  fillColor,
  isSelected,
  onClick,
}: {
  paths: { lat: number; lng: number }[];
  strokeColor: string;
  fillColor: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const polygon = new google.maps.Polygon({
      paths,
      strokeColor: isSelected ? '#FFEC01' : strokeColor,
      strokeOpacity: isSelected ? 1 : 0.8,
      strokeWeight: isSelected ? 4 : 2,
      fillColor: isSelected ? '#FFEC01' : fillColor,
      fillOpacity: isSelected ? 0.45 : 0.22,
      clickable: true,
      zIndex: isSelected ? 10 : 1,
    });

    polygon.setMap(map);

    const listener = polygon.addListener('click', onClick);

    return () => {
      google.maps.event.removeListener(listener);
      polygon.setMap(null);
    };
  }, [map, paths, strokeColor, fillColor, isSelected, onClick]);

  return null;
}

/**
 * Camera controller component to programmatically pan/zoom when selected zone changes
 */
function MapCameraController({
  selectedZone,
}: {
  selectedZone: ZoneData | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    if (selectedZone) {
      map.panTo(selectedZone.center);
      map.setZoom(selectedZone.zoomLevel);
    } else {
      map.panTo(DEFAULT_CENTER);
      map.setZoom(DEFAULT_ZOOM);
    }
  }, [map, selectedZone]);

  return null;
}

export default function InteractiveZoneMap() {
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);

  const selectedZone = ZONAS_DATA.find((z) => z.id === selectedZoneId) || null;

  const handleSelectZone = useCallback((zoneId: string) => {
    setSelectedZoneId((prev) => {
      const nextId = prev === zoneId ? null : zoneId;
      trackAnalytics.ctaClick(`cobertura_map_zone_${zoneId}`, `Zona ${zoneId}`);
      return nextId;
    });
  }, []);

  const handleResetMap = useCallback(() => {
    setSelectedZoneId(null);
  }, []);

  return (
    <div className="space-y-8">
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-brand-blue-100">
            <Compass className="w-3.5 h-3.5 text-brand-blue-500" />
            <span>Mapa Interactivo de Radios Zonal</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-brand-blue-500">
            Explorá las 5 Zonas de Cobertura
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 mt-1 max-w-2xl">
            Hacé clic en cualquier tarjeta o en el mapa interactivo para enfocar los cuadrantes de reparto en Mar del Plata.
          </p>
        </div>

        {selectedZoneId && (
          <button
            type="button"
            onClick={handleResetMap}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-500 text-xs font-mono font-bold uppercase transition-colors shrink-0 border border-brand-blue-200 shadow-xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-brand-blue-500" />
            <span>Ver mapa completo</span>
          </button>
        )}
      </div>

      {/* Main Grid: Interactive Map + Zone Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 7 Columns: Google Map Canvas Container */}
        <div className="lg:col-span-7 rounded-2xl bg-brand-blue-50/80 p-2 border border-brand-blue-100/80 shadow-float overflow-hidden">
          <div className="relative w-full h-[450px] sm:h-[520px] rounded-xl overflow-hidden border border-brand-blue-100/60 shadow-inner">
            <APIProvider apiKey={MAPS_API_KEY}>
              <Map
                mapId="DEMO_MAP_ID"
                defaultCenter={DEFAULT_CENTER}
                defaultZoom={DEFAULT_ZOOM}
                gestureHandling="cooperative"
                disableDefaultUI={false}
                zoomControl={true}
                streetViewControl={false}
                mapTypeControl={false}
                fullscreenControl={true}
                className="w-full h-full"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              >
                <MapCameraController selectedZone={selectedZone} />

                {/* Base Central Marker */}
                <AdvancedMarker
                  position={BASE_LOCATION}
                  title="Base Central Friuli 1972"
                >
                  <Pin
                    background="#FFEC01"
                    borderColor="#0950F6"
                    glyphColor="#0950F6"
                    scale={1.2}
                  />
                </AdvancedMarker>

                {/* InfoWindow on Base */}
                <InfoWindow position={BASE_LOCATION} disableAutoPan={true}>
                  <div className="p-1 font-sans text-xs text-brand-blue-500 max-w-[180px]">
                    <b className="block font-subheading text-sm text-brand-blue-500 uppercase">
                      Base Central Friuli 1972
                    </b>
                    <p className="text-[11px] text-brand-blue-500/80 mt-0.5">
                      Centro neurálgico de salida de motos en Mar del Plata.
                    </p>
                  </div>
                </InfoWindow>

                {/* Polygons & Center Markers for each Zone */}
                {ZONAS_DATA.map((zone) => {
                  const isSelected = selectedZoneId === zone.id;

                  return (
                    <React.Fragment key={zone.id}>
                      <ZonePolygon
                        paths={zone.paths}
                        strokeColor={zone.colorHex}
                        fillColor={zone.colorHex}
                        isSelected={isSelected}
                        onClick={() => handleSelectZone(zone.id)}
                      />

                      <AdvancedMarker
                        position={zone.center}
                        title={zone.name}
                        onClick={() => handleSelectZone(zone.id)}
                      >
                        <Pin
                          background={isSelected ? '#FFEC01' : zone.colorHex}
                          borderColor={isSelected ? '#0950F6' : '#FFFFFF'}
                          glyphColor={isSelected ? '#0950F6' : '#FFFFFF'}
                          scale={isSelected ? 1.35 : 1.0}
                        />
                      </AdvancedMarker>
                    </React.Fragment>
                  );
                })}
              </Map>
            </APIProvider>

            {/* Floating Zone Active Overlay Badge */}
            {selectedZone && (
              <div className="absolute top-4 left-4 right-4 z-10 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-brand-blue-100 shadow-xl flex items-center justify-between gap-3 text-brand-blue-500 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: selectedZone.colorHex }}
                  />
                  <div className="min-w-0">
                    <span className="block font-subheading text-sm font-bold uppercase truncate text-brand-blue-500">
                      {selectedZone.name}
                    </span>
                    <span className="block font-mono text-[11px] text-brand-blue-400 truncate">
                      {selectedZone.status} · {selectedZone.tiempo}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleResetMap}
                  className="px-2.5 py-1 rounded-lg bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-500 text-xs font-mono font-bold uppercase transition-colors shrink-0"
                >
                  Ver todas
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Interactive Zone Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          {ZONAS_DATA.map((z) => {
            const isSelected = selectedZoneId === z.id;

            return (
              <div
                key={z.id}
                onClick={() => handleSelectZone(z.id)}
                className={`p-1.5 rounded-2xl transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-brand-yellow-500 shadow-lg scale-[1.01] border-2 border-brand-yellow-500'
                    : 'bg-brand-blue-50/80 hover:bg-brand-blue-100/60 border border-brand-blue-100/60 shadow-xs hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`rounded-xl p-4 sm:p-5 transition-colors ${
                    isSelected ? 'bg-white text-brand-blue-500 border border-brand-yellow-300' : 'bg-white text-brand-blue-500 border border-brand-blue-100/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                        style={{ backgroundColor: z.colorHex }}
                      />
                      <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight text-brand-blue-500 truncate">
                        {z.name}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                        isSelected
                          ? 'bg-brand-yellow-500 text-brand-blue-900'
                          : 'bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-100'
                      }`}
                    >
                      {isSelected ? 'Seleccionada' : 'Hacé clic'}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-brand-blue-500/85 leading-relaxed mb-3">
                    {z.barrios}
                  </p>

                  <div className="pt-2.5 border-t border-brand-blue-50 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-brand-blue-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-400" />
                      {z.status}
                    </span>
                    <span className="text-brand-blue-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {z.tiempo}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { calculateExpressPrice, calculateLowCostPrice } from '@/lib/pricing';
import {
  EXPRESS_WINDOW,
  EXPRESS_CUTOFF_TIME,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  STANDARD_WEIGHT_KG,
  SUPPORT_WHATSAPP_LINK,
} from '@/lib/promises';
import { DoubleBezelCard } from './DoubleBezelCard';
import { CTANestedPill } from './CTANestedPill';
import { Zap, Clock, MapPin, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

const MDQ_LOCATIONS: Record<string, { lat: number; lng: number }> = {
  'Centro (Plaza Mitre)': { lat: -38.0016, lng: -57.5517 },
  'Playa Grande / Alem': { lat: -38.0286, lng: -57.5338 },
  'Puerto de Mar del Plata': { lat: -38.0435, lng: -57.5451 },
  'Constitución / La Florida': { lat: -37.9654, lng: -57.5522 },
  'Los Troncos / Chauvín': { lat: -38.0135, lng: -57.5457 },
  'Depósito Friuli (Friuli 1972)': { lat: -38.0255, lng: -57.5752 },
  'San Juan Comercial': { lat: -37.9945, lng: -57.5612 },
  'Punta Mogotes': { lat: -38.0754, lng: -57.5478 },
};

function calculateDistanceKm(
  coord1: { lat: number; lng: number },
  coord2: { lat: number; lng: number }
): number {
  const R = 6371; // Earth radius km
  const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const dLon = ((coord2.lng - coord1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coord1.lat * Math.PI) / 180) *
      Math.cos((coord2.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // Street distance factor ~ 1.35
  return Math.round(R * c * 1.35 * 10) / 10;
}

export function QuoteCalculator() {
  const [origin, setOrigin] = useState('Centro (Plaza Mitre)');
  const [destination, setDestination] = useState('Playa Grande / Alem');
  const [customDistance, setCustomDistance] = useState<number | null>(null);

  const originCoords = MDQ_LOCATIONS[origin] || null;
  const destCoords = MDQ_LOCATIONS[destination] || null;

  const calculatedDistance =
    originCoords && destCoords ? calculateDistanceKm(originCoords, destCoords) : 4.5;
  const distanceKm = customDistance !== null ? customDistance : calculatedDistance;

  const expressPrice = calculateExpressPrice(distanceKm);
  const lowCostPrice = calculateLowCostPrice(distanceKm);

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Quiero coordinar un envío desde la web de DosRuedas.\n` +
      `- Origen: ${origin}\n` +
      `- Destino: ${destination}\n` +
      `- Distancia aprox: ${distanceKm} km\n` +
      `- Express: ${typeof expressPrice === 'number' ? `$${expressPrice}` : expressPrice}\n` +
      `- LowCost: ${typeof lowCostPrice === 'number' ? `$${lowCostPrice}` : lowCostPrice}`
  );

  return (
    <div className="w-full space-y-8">
      <DoubleBezelCard className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0950F6] text-[#FFEC01] flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-['Anton'] text-2xl tracking-wide text-[#0950F6]">
                  COTIZÁ EN EL ACTO
                </h3>
                <p className="text-xs text-[#3570F8] font-semibold">
                  Elegí tus puntos en Mar del Plata o ajustá la distancia
                </p>
              </div>
            </div>

            {/* Origin Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0950F6] flex items-center gap-1.5 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#3570F8]" />
                Punto de Retiro (Origen)
              </label>
              <select
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value);
                  setCustomDistance(null);
                }}
                className="w-full px-4 py-3 bg-[#E6EEFE]/50 border-2 border-[#BACEFD] rounded-xl text-sm font-semibold text-[#0950F6] focus:border-[#0950F6] focus:outline-none"
              >
                {Object.keys(MDQ_LOCATIONS).map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0950F6] flex items-center gap-1.5 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#FFEC01] fill-[#0950F6]" />
                Punto de Entrega (Destino)
              </label>
              <select
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setCustomDistance(null);
                }}
                className="w-full px-4 py-3 bg-[#E6EEFE]/50 border-2 border-[#BACEFD] rounded-xl text-sm font-semibold text-[#0950F6] focus:border-[#0950F6] focus:outline-none"
              >
                {Object.keys(MDQ_LOCATIONS).map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Distance Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#0950F6]">
                <span>Distancia vial estimada:</span>
                <span className="font-['Geist_Mono'] text-base px-2.5 py-0.5 rounded-full bg-[#E6EEFE] text-[#0950F6] border border-[#BACEFD]">
                  {distanceKm.toFixed(1)} km
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={distanceKm}
                onChange={(e) => setCustomDistance(parseFloat(e.target.value))}
                className="w-full accent-[#0950F6] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#3570F8]">
                <span>1 km (Cercano)</span>
                <span>10 km (Medio)</span>
                <span>20+ km (Periferia/Consultar)</span>
              </div>
            </div>

            {/* Guarantees note */}
            <div className="p-3 rounded-xl bg-[#E6EEFE]/60 border border-[#BACEFD] flex items-center gap-3 text-xs text-[#0950F6]">
              <ShieldCheck className="w-5 h-5 text-[#0950F6] shrink-0" />
              <span>
                Tarifa válida hasta <strong>{STANDARD_WEIGHT_KG} kg</strong>. Sin costos sorpresa.
                Emitimos Factura C.
              </span>
            </div>
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <LeafletMap originCoords={originCoords} destCoords={destCoords} />
          </div>
        </div>

        {/* Pricing Results Grid */}
        <div className="mt-8 pt-8 border-t border-[#BACEFD] grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1: Express */}
          <div className="p-6 rounded-2xl bg-[#E6EEFE]/40 border-2 border-[#0950F6] shadow-[0_8px_20px_-4px_rgba(9,80,246,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEC01] text-[#0950F6] font-bold text-xs border border-[#0950F6]">
                  <Zap className="w-3.5 h-3.5" /> RECOMENDADO URGENTE
                </span>
                <span className="text-xs text-[#3570F8] font-semibold">Corte: {EXPRESS_CUTOFF_TIME}</span>
              </div>
              <h4 className="font-['Anton'] text-2xl text-[#0950F6] tracking-wide">
                SERVICIO EXPRESS
              </h4>
              <p className="text-xs text-[#3570F8] mb-4">
                Entrega exclusiva en <strong>{EXPRESS_WINDOW}</strong> para pedidos confirmados antes de las {EXPRESS_CUTOFF_TIME}.
              </p>
              <div className="font-['Geist_Mono'] text-4xl font-extrabold text-[#0950F6] my-2">
                {typeof expressPrice === 'number' ? `$${expressPrice.toLocaleString('es-AR')}` : 'A consultar'}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#BACEFD]">
              <CTANestedPill
                href={`${SUPPORT_WHATSAPP_LINK}?text=${whatsappMessage}%20(Servicio%20Express)`}
                variant="yellow"
                className="w-full text-center"
              >
                Pedir Express por WhatsApp
              </CTANestedPill>
            </div>
          </div>

          {/* Option 2: LowCost */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#BACEFD] shadow-[0_8px_20px_-4px_rgba(9,80,246,0.1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6EEFE] text-[#0950F6] font-bold text-xs border border-[#BACEFD]">
                  <Clock className="w-3.5 h-3.5" /> MÁS ECONÓMICO
                </span>
                <span className="text-xs text-[#3570F8] font-semibold">Corte: {LOWCOST_CUTOFF_TIME}</span>
              </div>
              <h4 className="font-['Anton'] text-2xl text-[#0950F6] tracking-wide">
                SERVICIO LOW-COST
              </h4>
              <p className="text-xs text-[#3570F8] mb-4">
                Reparto en el día entregando antes de las <strong>{LOWCOST_DELIVERY_DEADLINE}</strong> para despachos antes de las {LOWCOST_CUTOFF_TIME}.
              </p>
              <div className="font-['Geist_Mono'] text-4xl font-extrabold text-[#0950F6] my-2">
                {typeof lowCostPrice === 'number' ? `$${lowCostPrice.toLocaleString('es-AR')}` : 'A consultar'}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#BACEFD]">
              <CTANestedPill
                href={`${SUPPORT_WHATSAPP_LINK}?text=${whatsappMessage}%20(Servicio%20LowCost)`}
                variant="outline"
                className="w-full text-center"
              >
                Pedir LowCost por WhatsApp
              </CTANestedPill>
            </div>
          </div>
        </div>
      </DoubleBezelCard>
    </div>
  );
}

/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: src/app/servicios/envios-lowcost-acid/page.tsx
 * Data schemas: Marquee highlights for Acid LowCost service.
 * User instruction: "genera una copia de la página lowcost y aplicar el diseño (no lo folores ) Summary A bold, high-contrast Neo-Brutalist design system featuring heavy strokes, hard shadows, and an 'Acid' color palette with rhythmic animations and glitch effects."
 */

'use client';

import React from 'react';

export default function AcidMarquee() {
  const items = [
    '⚡️ TARIFA LOWCOST EXCLUSIVA',
    '📍 MAR DEL PLATA',
    '⏱️ CORTE 13:00 HS',
    '📦 ENTREGAS EN EL DÍA',
    '🏍️ FLOTA EN MOTO PROPIA',
    '🔥 MÁXIMO AHORRO',
  ];

  return (
    <div className="bg-[#09090B] text-[#D2E823] py-4 border-y-2 border-[#09090B] overflow-hidden whitespace-nowrap select-none">
      <div className="inline-block animate-marquee-left flex gap-8 items-center">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <span
            key={i}
            className="font-display text-xl sm:text-2xl tracking-wider uppercase inline-flex items-center gap-4"
            style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            <span>{text}</span>
            <span className="w-3 h-3 bg-[#D2E823] rounded-full inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

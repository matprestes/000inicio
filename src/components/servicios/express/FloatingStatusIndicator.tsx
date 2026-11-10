/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: src/app/servicios/envios-express-luxury/page.tsx
 * Data schemas: Floating status indicator component.
 */
'use client';

import React from 'react';

export default function FloatingStatusIndicator() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/10 shadow-lg backdrop-blur-md">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <span className="font-mono text-2xs uppercase tracking-widest text-emerald-400 font-bold">
        Flota Express Activa · MDQ
      </span>
    </div>
  );
}

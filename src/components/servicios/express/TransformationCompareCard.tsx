/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: src/app/servicios/envios-express-luxury/page.tsx
 * Data schemas: Dark Luxury before/after comparison component.
 */
'use client';

import React, { useState } from 'react';

export default function TransformationCompareCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#1a1a1a] p-8 transition-all duration-500 hover:border-[#e11d48]/50 shadow-2xl group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e11d48]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#e11d48] font-bold px-3 py-1 bg-[#e11d48]/10 rounded-full border border-[#e11d48]/20">
          TRANSFORMATION COMPARE
        </span>
        <span className="font-mono text-2xs text-white/50">
          {hovered ? '✨ MODO LUXURY ACTIVO' : '👉 DESLIZÁ / COLOCÁ EL MOUSE'}
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
        {hovered ? 'Experiencia Dark Luxury VIP' : 'Cadetería Tradicional Estándar'}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 my-6">
        <div className={`p-5 rounded-2xl transition-all duration-300 ${!hovered ? 'bg-[#242424] border border-white/15' : 'bg-[#161616] opacity-60 border border-white/5'}`}>
          <div className="font-mono text-xs text-white/60 mb-2">ANTES / ESTÁNDAR</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>❌ Demoras sin aviso previo</li>
            <li>❌ Sin trazabilidad en tiempo real</li>
            <li>❌ Atención impersonal por central</li>
            <li>❌ Papelería y comprobantes en papel</li>
          </ul>
        </div>

        <div className={`p-5 rounded-2xl transition-all duration-300 ${hovered ? 'bg-gradient-to-br from-[#2a1218] to-[#1a1a1a] border-2 border-[#e11d48] shadow-[0_0_25px_rgba(225,29,72,0.25)]' : 'bg-[#202020] border border-white/10'}`}>
          <div className="font-mono text-xs text-[#e11d48] mb-2 font-bold">AHORA / DARK LUXURY EXPRESS</div>
          <ul className="space-y-2 text-sm text-white font-medium">
            <li>✅ Franja acotada estricta de 3 hs</li>
            <li>✅ Notificaciones instantáneas WhatsApp</li>
            <li>✅ Asignación de cadete exclusivo</li>
            <li>✅ Facturación digital C y reportes ROI</li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-white/60 font-sans italic text-center">
        Pasa el cursor sobre la tarjeta para experimentar el salto cualitativo del servicio prioritario.
      </p>
    </div>
  );
}

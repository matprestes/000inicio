/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: src/app/servicios/envios-lowcost-acid/page.tsx
 * Data schemas: Bento grid features for Neo-Brutalist LowCost.
 * User instruction: "genera una copia de la página lowcost y aplicar el diseño (no lo folores ) Summary A bold, high-contrast Neo-Brutalist design system featuring heavy strokes, hard shadows, and an 'Acid' color palette with rhythmic animations and glitch effects."
 */

'use client';

import React from 'react';
import { Zap, Clock, ShieldCheck, TrendingDown, Package, MapPin } from 'lucide-react';

export default function AcidBentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#09090B] bg-[#D2E823] px-3 py-1 rounded-full border-2 border-[#09090B] inline-block mb-4 shadow-[3px_3px_0px_0px_#09090B]">
          // VENTAJAS OPERATIVAS
        </span>
        <h2
          className="font-display text-3xl sm:text-5xl uppercase tracking-tighter text-[#09090B]"
          style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
        >
          DISEÑADO PARA <span className="bg-[#D2E823] px-2 border-2 border-[#09090B] shadow-[3px_3px_0px_0px_#09090B]">E-COMMERCE</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1: Large (2 cols on md) */}
        <div className="md:col-span-2 bg-[#09090B] text-[#F8F4E8] p-8 sm:p-12 rounded-[32px] border-4 border-[#09090B] shadow-[8px_8px_0px_0px_#D2E823] relative overflow-hidden flex flex-col justify-between group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#D2E823] transition-all">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D2E823_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#D2E823] text-[#09090B] flex items-center justify-center border-2 border-[#09090B] mb-6 font-bold shadow-[3px_3px_0px_0px_#F8F4E8]">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 text-[#D2E823]" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
              AHORRO MASIVO EN COSTOS LOGÍSTICOS
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#F8F4E8]/90 max-w-xl leading-relaxed">
              Optimizamos las rutas agrupando retiros y entregas en zonas estratégicas de Mar del Plata para trasladar el ahorro directo a tu balance mensual.
            </p>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t border-white/20 flex items-center justify-between font-mono text-xs text-[#D2E823]">
            <span>⚡️ EFICIENCIA OPERATIVA</span>
            <span>0% COMPROMISO DE CALIDAD</span>
          </div>
        </div>

        {/* Card 2: 1 col */}
        <div className="bg-[#D2E823] text-[#09090B] p-8 rounded-[32px] border-4 border-[#09090B] shadow-[8px_8px_0px_0px_#09090B] flex flex-col justify-between group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#09090B] transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#09090B] text-[#D2E823] flex items-center justify-center border-2 border-[#09090B] mb-6 font-bold shadow-[3px_3px_0px_0px_#F8F4E8]">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl uppercase mb-4" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
              CORTE 13:00 HS
            </h3>
            <p className="font-sans text-sm text-[#09090B]/90 leading-relaxed font-medium">
              Preparás tus pedidos por la mañana, los retiramos y tus clientes los reciben antes de las 19:00 hs del mismo día.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t-2 border-[#09090B]/20 font-mono text-xs font-bold uppercase">
            ⏱️ VELOCIDAD GARANTIZADA
          </div>
        </div>

        {/* Card 3: 1 col */}
        <div className="bg-white text-[#09090B] p-8 rounded-[32px] border-4 border-[#09090B] shadow-[8px_8px_0px_0px_#09090B] flex flex-col justify-between group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#09090B] transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#09090B] text-[#D2E823] flex items-center justify-center border-2 border-[#09090B] mb-6 font-bold shadow-[3px_3px_0px_0px_#D2E823]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl uppercase mb-4" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
              CONSTANCIA DIGITAL
            </h3>
            <p className="font-sans text-sm text-[#09090B]/90 leading-relaxed font-medium">
              Cada entrega queda registrada con firma y horario digital para total tranquilidad de tu tienda online.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t-2 border-[#09090B]/20 font-mono text-xs font-bold uppercase">
            🔒 SEGURIDAD TOTAL
          </div>
        </div>

        {/* Card 4: Large (2 cols on md) */}
        <div className="md:col-span-2 bg-[#D2E823] text-[#09090B] p-8 sm:p-12 rounded-[32px] border-4 border-[#09090B] shadow-[8px_8px_0px_0px_#09090B] relative overflow-hidden flex flex-col justify-between group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#09090B] transition-all">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#09090B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#09090B] text-[#D2E823] flex items-center justify-center border-2 border-[#09090B] mb-6 font-bold shadow-[3px_3px_0px_0px_#F8F4E8]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
              COBERTURA URBANA COMPLETA EN MDQ
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#09090B]/90 max-w-xl leading-relaxed font-medium">
              Llegamos a todos los barrios de Mar del Plata con cadetes propios capacitados y experimentados en ruteo urbano eficiente.
            </p>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t-2 border-[#09090B]/20 flex items-center justify-between font-mono text-xs font-bold">
            <span>🗺️ MAR DEL PLATA Y ZONA</span>
            <span>⚡️ SIN DEMORAS</span>
          </div>
        </div>

      </div>
    </section>
  );
}

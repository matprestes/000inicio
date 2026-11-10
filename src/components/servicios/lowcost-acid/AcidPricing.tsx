/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: D:\repositorios\000inicio\src\app\servicios\envios-lowcost-acid\page.tsx renders AcidPricing.tsx for the Neo-Brutalist Acid pricing calculator and plans.
 * Data schemas: Pricing tiers and plans for LowCost Acid service.
 * User instruction: "genera una copia de la página kowcost y aplicar el diaeño (no lo folores) [Detalle del sistema de diseño Neo-Brutalista]"
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Calculator, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function AcidPricing() {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'express' | 'bulk'>('standard');
  const [packagesCount, setPackagesCount] = useState(15);

  const getPrice = () => {
    switch (selectedPlan) {
      case 'express':
        return packagesCount * 2800;
      case 'bulk':
        return packagesCount * 2100;
      default:
        return packagesCount * 2400;
    }
  };

  const whatsappHref = buildWhatsAppUrl({
    message: `Hola Envíos DosRuedas! Quiero contratar el plan LowCost Acid (${selectedPlan}) para ${packagesCount} envíos.`,
    source: 'acid_pricing',
  });

  return (
    <section className="py-24 px-4 bg-[#F8F4E8] relative border-t-4 border-[#09090B]">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#09090B 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#D2E823] text-[#09090B] px-4 py-1.5 border-2 border-[#09090B] font-mono font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#09090B] mb-4 transform -rotate-1">
            TARIFAS ÁCIDAS 2026
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-[#09090B] tracking-tight uppercase mb-6">
            Cotizador & Planes <span className="text-[#0950F6] underline decoration-4 underline-offset-8">LowCost</span>
          </h2>
          <p className="font-sans text-lg text-[#09090B]/80 font-medium">
            Sin costos ocultos, sin letra chica. Precios blindados para comercios y emprendedores en Mar del Plata.
          </p>
        </div>

        {/* Interactive Pricing Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* Plan Selector & Slider */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border-4 border-[#09090B] shadow-[8px_8px_0px_0px_#09090B] relative">
            <div className="absolute -top-4 right-6 bg-[#0950F6] text-[#D2E823] px-3 py-1 font-mono text-xs font-bold border-2 border-[#09090B] shadow-[2px_2px_0px_0px_#09090B]">
              PASO 1 Y 2
            </div>

            <h3 className="font-display text-2xl text-[#09090B] uppercase mb-6">
              1. Seleccioná tu modalidad
            </h3>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { id: 'standard', label: 'LowCost', desc: 'En el día' },
                { id: 'express', label: 'Express', desc: 'Prioritario' },
                { id: 'bulk', label: 'Volumen', desc: '+50 diarios' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlan(p.id as any)}
                  className={`p-4 border-2 border-[#09090B] text-left cursor-pointer transition-all ${
                    selectedPlan === p.id
                      ? 'bg-[#D2E823] shadow-[4px_4px_0px_0px_#09090B] translate-x-[-2px] translate-y-[-2px]'
                      : 'bg-white hover:bg-[#F8F4E8] shadow-[2px_2px_0px_0px_#09090B]'
                  }`}
                >
                  <span className="font-display text-base text-[#09090B] block">{p.label}</span>
                  <span className="font-mono text-xs text-[#09090B]/70 block mt-1">{p.desc}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="packages-slider" className="font-subheading text-lg text-[#09090B] uppercase tracking-wide">
                  2. Cantidad estimada de envíos mensuales:
                </label>
                <span className="font-mono font-bold text-xl bg-[#09090B] text-[#D2E823] px-3 py-1 border-2 border-[#09090B]">
                  {packagesCount} envíos
                </span>
              </div>
              <input
                id="packages-slider"
                type="range"
                min="5"
                max="200"
                step="5"
                value={packagesCount}
                onChange={(e) => setPackagesCount(Number(e.target.value))}
                className="w-full h-4 bg-[#F8F4E8] border-2 border-[#09090B] accent-[#0950F6] cursor-pointer"
              />
              <div className="flex justify-between text-xs font-mono text-[#09090B]/60">
                <span>5 (Mínimo)</span>
                <span>100</span>
                <span>200+</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-[#09090B]/20 grid grid-cols-2 gap-4 text-sm font-mono text-[#09090B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0950F6]" />
                <span>Retiro sin cargo en comercio</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0950F6]" />
                <span>Corte: 13:00 hs</span>
              </div>
            </div>
          </div>

          {/* Pricing Summary Card */}
          <div className="lg:col-span-5 bg-[#09090B] text-[#F8F4E8] p-8 md:p-10 border-4 border-[#09090B] shadow-[12px_12px_0px_0px_#D2E823] relative flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#D2E823] text-[#09090B] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                ESTIMADO MENSUAL
              </div>

              <div className="mb-6">
                <span className="font-mono text-xs text-[#F8F4E8]/60 uppercase tracking-widest block mb-1">
                  Inversión Total Aprox.
                </span>
                <div className="font-display text-5xl md:text-6xl text-[#D2E823] tracking-tighter">
                  ${getPrice().toLocaleString('es-AR')}
                </div>
                <span className="font-mono text-xs text-[#F8F4E8]/60 mt-1 block">
                  *(IVA incluido · Factura A o B automática)*
                </span>
              </div>

              <ul className="space-y-3 mb-8 font-mono text-sm text-[#F8F4E8]/90">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D2E823] shrink-0" />
                  <span>Entrega garantizada mismo día en MDQ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D2E823] shrink-0" />
                  <span>Rastreo en vivo por WhatsApp y Web</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D2E823] shrink-0" />
                  <span>2 intentos de entrega incluidos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D2E823] shrink-0" />
                  <span>Soporte preferencial por canal directo</span>
                </li>
              </ul>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#D2E823] text-[#09090B] font-subheading text-xl uppercase tracking-wider font-bold border-2 border-[#09090B] shadow-[4px_4px_0px_0px_#F8F4E8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#F8F4E8] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 text-center cursor-pointer"
            >
              <span>Contratar Plan Acid</span>
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

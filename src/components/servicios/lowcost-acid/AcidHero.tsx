/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: src/app/servicios/envios-lowcost-acid/page.tsx
 * Data schemas: Acid-themed marketing copy for Neo-Brutalist LowCost service copy.
 * User instruction: "genera una copia de la página lowcost y aplicar el diseño (no lo folores ) Summary A bold, high-contrast Neo-Brutalist design system featuring heavy strokes, hard shadows, and an 'Acid' color palette with rhythmic animations and glitch effects."
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, MapPin, Bike, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { SUPPORT_PHONE } from '@/lib/promises';

const WHATSAPP_URL = buildWhatsAppUrl({
  message: 'Hola Envíos DosRuedas! Quiero consultar por el servicio LowCost Acid Edition en Mar del Plata.',
  source: 'lowcost_acid_hero',
});

export default function AcidHero() {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Sticker Badge */}
          <div className="self-start">
            <motion.div
              initial={{ rotate: -2, scale: 0.95 }}
              animate={{ rotate: [-2, 2, -2], scale: 1 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="bg-[#D2E823] border-2 border-[#09090B] px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest text-[#09090B] shadow-[3px_3px_0px_0px_#09090B] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>MAR DEL PLATA · LOWCOST ACID EDITION</span>
            </motion.div>
          </div>

          {/* Massive Display Heading with Glitch effect on hover */}
          <h1
            className="font-display text-[3.5rem] sm:text-[5rem] lg:text-[6rem] leading-[0.85] tracking-tighter uppercase text-[#09090B] select-none group cursor-pointer"
            style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            ENVÍOS <span className="bg-[#D2E823] px-2 border-2 border-[#09090B] inline-block shadow-[4px_4px_0px_0px_#09090B] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#09090B] transition-all">LOWCOST</span> SIN FRENO.
          </h1>

          <p className="font-sans text-lg sm:text-xl font-medium text-[#09090B]/90 max-w-xl leading-relaxed">
            La tarifa más competitiva de la costa atlántica para tus entregas programadas. Corte estricto a las 13:00 hs y distribución masiva antes de las 19:00 hs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/cotizar"
              className="bg-[#09090B] text-[#D2E823] font-subheading text-lg px-8 py-4 rounded-xl border-2 border-[#09090B] shadow-[4px_4px_0px_0px_#09090B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#09090B] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-3 uppercase font-bold"
            >
              <span>Cotizar Envío</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F8F4E8] text-[#09090B] font-subheading text-lg px-8 py-4 rounded-xl border-2 border-[#09090B] shadow-[4px_4px_0px_0px_#09090B] hover:bg-[#D2E823] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#09090B] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-3 uppercase font-bold"
            >
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-[#09090B]/20">
            <div>
              <span className="block font-display text-2xl text-[#09090B]" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>13:00</span>
              <span className="font-mono text-xs text-[#09090B]/70 uppercase">Corte diario</span>
            </div>
            <div>
              <span className="block font-display text-2xl text-[#09090B]" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>19:00</span>
              <span className="font-mono text-xs text-[#09090B]/70 uppercase">Entrega tope</span>
            </div>
            <div>
              <span className="block font-display text-2xl text-[#09090B]" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>100%</span>
              <span className="font-mono text-xs text-[#09090B]/70 uppercase">Efectividad MDQ</span>
            </div>
          </div>

        </div>

        {/* Right Side (5 columns) - Floating Card & Asset */}
        <div className="lg:col-span-5 relative">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="relative bg-[#09090B] text-[#F8F4E8] p-8 rounded-[32px] border-4 border-[#09090B] shadow-[12px_12px_0px_0px_#D2E823]"
          >
            <div className="absolute -top-4 -right-4 bg-[#D2E823] text-[#09090B] px-4 py-1.5 rounded-full font-mono text-xs font-bold border-2 border-[#09090B] uppercase">
              ⚡️ TARIFA PLANA
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D2E823] text-[#09090B] flex items-center justify-center border-2 border-[#09090B] shadow-[3px_3px_0px_0px_#F8F4E8]">
                <Bike className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl uppercase" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>FLOTA ACID</h3>
                <span className="font-mono text-xs text-[#D2E823]">Logística Urbana Optimizada</span>
              </div>
            </div>

            <ul className="space-y-4 font-sans text-sm text-[#F8F4E8]/90">
              <li className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                <Clock className="w-5 h-5 text-[#D2E823] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-subheading tracking-wider">Retiros matutinos</strong>
                  <span className="text-xs text-[#F8F4E8]/80 font-mono">Pasamos por tu local o depósito en horario coordinado.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                <MapPin className="w-5 h-5 text-[#D2E823] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-subheading tracking-wider">Cobertura total MDQ</strong>
                  <span className="text-xs text-[#F8F4E8]/80 font-mono">Desde Alfar hasta Constitución y zona oeste.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                <ShieldCheck className="w-5 h-5 text-[#D2E823] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-subheading tracking-wider">Seguridad y control</strong>
                  <span className="text-xs text-[#F8F4E8]/80 font-mono">Rastreo activo y constancia digital instantánea.</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
              <span className="font-mono text-xs text-[#D2E823]">📞 {SUPPORT_PHONE}</span>
              <span className="font-mono text-xs text-white/70">Friuli 1972, MDQ</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

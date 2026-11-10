'use client';

import React from 'react';
import { MessageCircle, Calculator, MessageSquare } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function ConversionBanner() {
  return (
    <section aria-label="Llamado a la acción cotizador" className="my-8 sm:my-12">
      <DoubleBezelCard variant="dark">
        <div className="space-y-6 text-center relative overflow-hidden py-4 sm:py-6">
          <MessageCircle
            className="absolute -bottom-10 -right-10 w-72 h-72 text-white/5 pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-5 px-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/40 -rotate-1 shadow-glow-yellow">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-500 tabular-nums">
                Operaciones Activas Mar del Plata 2026
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-tight text-balance">
              ¿Tenés envíos para hoy? Los entregamos a tiempo.
            </h2>

            <p className="text-white/85 font-sans text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light text-balance">
              Cotizá online en segundos con trazado vial exacto en Mar del Plata o coordiná directo con nuestro equipo logístico por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <CTANestedPill
                href="/cotizar"
                variant="primary"
                size="large"
                icon={<Calculator className="w-4 h-4 text-brand-blue-500" aria-hidden="true" />}
              >
                Cotizá tu Envío Online
              </CTANestedPill>

              <CTANestedPill
                href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20coordinar%20mis%20env%C3%ADos%20de%20hoy."
                variant="elevated"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 text-brand-blue-500" aria-hidden="true" />}
              >
                Chateá por WhatsApp
              </CTANestedPill>
            </div>
          </div>
        </div>
      </DoubleBezelCard>
    </section>
  );
}
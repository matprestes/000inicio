'use client';

import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { MessageSquare, ShieldCheck, Clock, MapPin, Calculator } from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { WHATSAPP_PHONE } from '@/lib/whatsapp';

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-home-heading"
      className="bg-brand-blue-500 text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient lighting and depth halos */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-yellow-500 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        {/* Unboxed Kicker with Avatar Graphic */}
        <div className="inline-flex items-center gap-3">
          <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
            <OptimizedImage
              src="/elementos/escribinos_transparent.webp"
              alt="Escribinos por WhatsApp Envíos DosRuedas"
              width={48}
              height={48}
              aboveTheFold={false}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.24em] text-brand-yellow-500">
            <span>05</span>
            <span className="text-white/40" aria-hidden="true">/</span>
            <span>Respuesta Inmediata</span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span className="text-white/90">Coordinación al Toque</span>
          </div>
        </div>

        {/* Display Headline with standardized type styles */}
        <h2
          id="cta-home-heading"
          className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-hero text-balance"
        >
          ¿Tenés un paquete listo para despachar en <span className="text-brand-yellow-500">Mar del Plata</span>?
        </h2>

        {/* Paragraph with controlled legibility */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light text-balance">
          Cotizá online de forma instantánea según la distancia vial real o escribinos directo a nuestro WhatsApp comercial para coordinar con un operador en base.
        </p>

        {/* Standardized Canonical CTA Controls */}
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
            href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=Hola!%20Quiero%20coordinar%20un%20env%C3%ADo%20en%20Mar%20del%20Plata`}
            variant="elevated"
            size="large"
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageSquare className="w-4 h-4 text-brand-blue-500" aria-hidden="true" />}
          >
            WhatsApp: 223 660-2699
          </CTANestedPill>
        </div>

        {/* Trust Badges Strip with pure tokens */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow-500" aria-hidden="true" />
            Base Central: Friuli 1972
          </span>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-yellow-500" aria-hidden="true" />
            Lun a Vie 09:00 a 18:00 / Sáb 10:00 a 15:00
          </span>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-500" aria-hidden="true" />
            Flota Propia · Cero Tercerización
          </span>
        </div>
      </div>
    </section>
  );
}

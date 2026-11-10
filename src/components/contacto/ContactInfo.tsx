'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Navigation,
  Percent,
} from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';

export default function ContactInfo() {
  const isProductionKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY &&
    !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.includes('TuClave') &&
    !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.includes('Aqui');

  const mapEmbedUrl = isProductionKey
    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Friuli+1972,+Mar+del+Plata,+Buenos+Aires&zoom=15&language=es&region=ar`
    : `https://maps.google.com/maps?q=Friuli+1972,+Mar+del+Plata,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div id="contact-info" className="h-full flex flex-col justify-between">
      <DoubleBezelCard variant="dark" className="h-full">
        <div className="space-y-6 text-white relative overflow-hidden h-full flex flex-col justify-between">
          <MapPin
            className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {/* Header */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-white/15">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse shadow-[0_0_8px_#FFEC01]" aria-hidden="true" />
                  <span className="text-xs font-subheading uppercase tracking-widest text-brand-yellow-500 font-bold">
                    CENTRO DE DISTRIBUCIÓN Y BASE CENTRAL
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                  BASE DE OPERACIONES MDQ
                </h3>
              </div>
              <span className="font-mono text-xs text-brand-yellow-500 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 tabular-nums">
                Friuli 1972 · MDQ
              </span>
            </div>

            {/* Direct details & Operating Hours */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {/* Contact Data */}
              <div className="space-y-3">
                {/* Physical address */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 text-brand-yellow-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-2xs font-subheading uppercase tracking-wider text-white/80 font-bold">
                      Dirección Física
                    </span>
                    <span className="block font-mono text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                      Friuli 1972, Mar del Plata
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 text-brand-yellow-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-2xs font-subheading uppercase tracking-wider text-white/80 font-bold">
                      Línea Directa y WhatsApp
                    </span>
                    <a
                      href="tel:+542236602699"
                      className="block font-mono text-xs sm:text-sm font-bold text-white hover:text-brand-yellow-500 transition-colors mt-0.5 tabular-nums"
                    >
                      +54 223 660-2699
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 text-brand-yellow-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-2xs font-subheading uppercase tracking-wider text-white/80 font-bold">
                      Atención Comercial
                    </span>
                    <a
                      href="mailto:matiascejas@enviosdosruedas.com"
                      className="block font-sans text-xs font-semibold text-white hover:text-brand-yellow-500 transition-colors mt-0.5 truncate"
                    >
                      matiascejas@enviosdosruedas.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Schedules & DropOFF Bonus */}
              <div className="space-y-3 flex flex-col justify-between">
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/15">
                    <Clock className="w-4.5 h-4.5 text-brand-yellow-500" aria-hidden="true" />
                    <h4 className="font-display text-sm uppercase tracking-tight text-white">
                      Horarios de Despacho
                    </h4>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Lun a Vie: 09:00 - 18:00</span>
                      <span className="px-2 py-0.5 text-2xs uppercase font-bold text-brand-blue-500 bg-brand-yellow-500 rounded">
                        Activo
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Sábados: 10:00 - 15:00</span>
                      <span className="px-2 py-0.5 text-2xs uppercase font-bold text-brand-blue-500 bg-brand-yellow-500 rounded">
                        Activo
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-2xs text-white/70 pt-1 border-t border-white/10">
                    Cortes: LowCost 13:00 hs · Express 15:00 hs
                  </p>
                </div>

                {/* DropOFF Bonus Card */}
                <div className="p-3.5 rounded-xl bg-brand-yellow-500/15 border border-brand-yellow-500/40 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow-500 text-brand-blue-500 flex items-center justify-center shrink-0 font-bold">
                    <Percent className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block font-subheading text-xs uppercase tracking-wider text-brand-yellow-400 font-bold">
                      Beneficio DropOFF Base
                    </span>
                    <span className="block font-sans text-2xs text-white/90 leading-tight">
                      <b>20% de descuento</b> si traés tus paquetes listos a Friuli 1972.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="relative z-10 pt-4 border-t border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-mono text-white/90">
                    GPS: <b className="text-white">38°00&apos;19.8&quot;S 57°32&apos;33.4&quot;W</b>
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Friuli+1972,+Mar+del+Plata,+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-brand-yellow-500 text-xs font-subheading font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Abrir en Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-white/20 shadow-inner relative bg-slate-800">
                <iframe
                  title="Mapa de ubicación Friuli 1972, Mar del Plata - Envíos DosRuedas"
                  src={mapEmbedUrl}
                  className="w-full h-full border-0 relative z-10"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa interactivo con la ubicación de la base en Friuli 1972, Mar del Plata"
                />
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-3 border-t border-white/15 flex items-center justify-between text-2xs font-mono text-white/80 relative z-10">
            <span>Recepción y retiro de cargas</span>
            <span className="font-bold text-brand-yellow-500 tabular-nums">MDQ · Carga en Puerta</span>
          </div>
        </div>
      </DoubleBezelCard>
    </div>
  );
}
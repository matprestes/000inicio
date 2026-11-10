import React from 'react';
import { Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import {
  EXPRESS_WINDOW,
  EXPRESS_CUTOFF_TIME,
  EXPRESS_LEAD_TIME,
  SUPPORT_PHONE,
} from '@/lib/promises';
import { EXPRESS_TIERS } from '@/lib/pricing';
import ExpressHeroCollage from './ExpressHeroCollage';

const whatsappClean = (SUPPORT_PHONE || '+54 223 660-2699').replace(/\D/g, '');
const basePrice = EXPRESS_TIERS[0]?.price ?? 3700;

export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      aria-label="Envíos Express en moto con entrega en franja horaria de 3 horas a elección en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full items-center overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-1/4 w-120 h-120 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-brand-blue-400/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 md:px-8 lg:py-20 relative z-10">
        <div className="grid items-center gap-8 lg:gap-12 lg:min-h-160 lg:grid-cols-12">
          {/* Tarjeta de Contenido Principal con acabado de cristal y bordes nítidos */}
          <div className="relative z-10 rounded-3xl bg-brand-blue-600/45 backdrop-blur-md border border-white/20 p-6 sm:p-8 lg:p-10 shadow-2xl lg:col-span-7 xl:col-span-6 overflow-hidden">
            {/* Subtle inner ambient glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 bg-brand-yellow-500/15 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <Badge
              variant="accent"
              size="lg"
              className="mb-6 -rotate-1 shadow-sm inline-flex items-center gap-2"
              icon={<Zap className="h-4 w-4" aria-hidden="true" />}
            >
              Mensajería en moto · Flota propia en MDQ
            </Badge>

            <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.93] tracking-tight text-white">
              Envíos Express,{' '}
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-500 px-3 sm:px-4 py-0.5 rounded-xl sm:rounded-2xl -rotate-1 shadow-glow-yellow mt-1">
                puerta a puerta
              </span>
            </h1>

            <p className="mt-5 font-sans text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-brand-blue-50/90 max-w-xl">
              Retiramos tu paquete y lo entregamos en{' '}
              <strong className="text-brand-yellow-500 font-bold">{EXPRESS_WINDOW}</strong> a elección en
              toda la ciudad. Tarifa oficial desde{' '}
              <strong className="text-brand-yellow-500 font-bold">${basePrice.toLocaleString('es-AR')}</strong> con
              coordinación directa por WhatsApp.
            </p>

            {/* Micro-Panel de 3 métricas operativas clave */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-white/15">
              <div className="space-y-0.5">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-brand-yellow-500 block leading-tight">
                  3 hs
                </span>
                <span className="text-2xs sm:text-xs font-sans text-brand-blue-100 uppercase tracking-wider block">
                  Franja a elección
                </span>
              </div>

              <div className="space-y-0.5 border-x border-white/15 px-2 sm:px-4">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-brand-yellow-500 block leading-tight">
                  {EXPRESS_CUTOFF_TIME}
                </span>
                <span className="text-2xs sm:text-xs font-sans text-brand-blue-100 uppercase tracking-wider block">
                  Corte diario
                </span>
              </div>

              <div className="space-y-0.5 pl-2 sm:pl-4">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-brand-yellow-500 block leading-tight">
                  ${basePrice.toLocaleString('es-AR')}
                </span>
                <span className="text-2xs sm:text-xs font-sans text-brand-blue-100 uppercase tracking-wider block">
                  Desde tramo Z1
                </span>
              </div>
            </div>

            {/* CTAs con alta conversión */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <CTANestedPill
                href="/cotizar"
                id="express-hero-cta-cotizar"
                variant="primary"
                size="large"
                className="w-full sm:w-auto text-center justify-center shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
              >
                <span>Cotizá tu envío Express</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </CTANestedPill>

              <a
                href={`https://api.whatsapp.com/send/?phone=${whatsappClean}&text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20un%20envío%20Express`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-subheading text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 backdrop-blur-xs"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Pedir por WhatsApp</span>
                <span className="sr-only"> (abre en otra pestaña)</span>
              </a>
            </div>

            {/* Micro-garantías de pie */}
            <div className="mt-6 pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-2xs sm:text-xs font-mono text-brand-blue-100/90">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-500" />
                Base Friuli 1972 · Mar del Plata
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-yellow-500" />
                Coordinación con {EXPRESS_LEAD_TIME}
              </span>
            </div>
          </div>

          {/* Collage dinámico de la derecha */}
          <div className="lg:col-span-5 xl:col-span-6 relative z-1 flex items-center justify-center">
            <ExpressHeroCollage className="w-full h-100 sm:h-125 lg:h-155" />
          </div>
        </div>
      </div>
    </section>
  );
}

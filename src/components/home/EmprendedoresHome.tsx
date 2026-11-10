'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Building2, ShoppingBag, Landmark, ShieldCheck, Pause, Play } from 'lucide-react';
import Link from 'next/link';
import { trackAnalytics } from '@/lib/analytics';

export default function EmprendedoresHome() {
  const reduceMotion = useReducedMotion();
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);

  const descriptionText = "Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata.";

  const partners = [
    'TOY PIOLA JUGUETERÍA', 'AMA & POLA', 'DROPIX 3D', 'EL CÓNDOR',
    'STARCEL', 'URBANCOW', 'WANCA', 'CATALINA INDUMENTARIA', 'ENVASES 3G', 'LA PERI'
  ];

  // Spring transition configs
  const springTransition = { type: 'spring' as const, stiffness: 360, damping: 28 };
  const snappySpring = { type: 'spring' as const, stiffness: 360, damping: 28 };

  // Orchestrated section entrance variants with zero-latency availability
  const sectionVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : springTransition,
    },
  };

  return (
    <motion.section
      id="emprendedores-home"
      aria-labelledby="emprendedores-home-title"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="py-16 sm:py-24 lg:py-32 bg-brand-blue-500 relative overflow-hidden text-white border-y border-white/10"
    >
      {/* Background Decorative Asymmetric Glows */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-brand-blue-500/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <motion.div
        className="absolute bottom-0 right-0 w-150 h-150 bg-brand-yellow-500/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
        animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Split with Quiet Unboxed Kicker */}
        <motion.div className="max-w-6xl mb-20 space-y-5 text-left" variants={itemVariants}>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.24em] text-brand-yellow-400">
            <span>03</span>
            <span className="text-white/40" aria-hidden="true">/</span>
            <span>Socio Estratégico para Negocios & Tiendas Online</span>
          </div>

          <h2 id="emprendedores-home-title" className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[0.92] uppercase tracking-tight text-white text-left max-w-5xl text-balance">
            Potenciamos tu marca en <span className="text-brand-yellow-400">Mar del Plata</span>
          </h2>

          <motion.div className="pt-2" variants={itemVariants}>
            <p className="text-brand-blue-50/90 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-normal">
              {descriptionText}
            </p>
          </motion.div>
        </motion.div>

        {/* Solutions Cards Grid: Single-Elevation Architectural Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto">
          
          {/* Card 1: PyMEs (E-Commerce) - lg:col-span-7 (Navy & Cobalt Card) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 rounded-2xl bg-white/7 border border-white/15 hover:border-brand-yellow-400/50 p-7 sm:p-9 transition-all duration-300 group overflow-hidden flex flex-col justify-between relative text-left shadow-lg"
            whileHover={reduceMotion ? undefined : { y: -4, transition: snappySpring }}
          >
            {/* Subtle Radial Glow */}
            <motion.div
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-yellow-500/10 blur-3xl pointer-events-none"
              aria-hidden="true"
              animate={reduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.08, 0.16, 0.08] }}
              transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
            />

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-yellow-500 text-brand-blue-500 rounded-xl shadow-xs" aria-hidden="true">
                  <Landmark className="h-6 w-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-brand-yellow-400 uppercase">
                  Emprendedores · PyMEs
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow-400 transition-colors">
                  Cuenta Corriente Flexible
                </h3>
                <p className="text-brand-blue-50/85 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                  Tu equipo de entregas de confianza, aunque la cantidad de pedidos cambie cada
                  día. Pagás los envíos juntos de forma unificada: semanal, quincenal o mensual.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {[
                  'Sin volumen mínimo de envíos: integrás tu negocio con la cantidad que tengas.',
                  'Accedés a tarifas LowCost con franjas horarias de 3 hs para mayor comodidad de tus clientes.',
                  'Cadetes propios uniformados y con seguro: cero tercerización.',
                  'Cobro contra reembolso con rendición formal y depósito bancario en 24 hs.',
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 font-sans"
                  >
                    <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 relative z-10 flex justify-end">
              <Link
                href="/servicios/empresas-cuenta-corriente"
                onClick={() => trackAnalytics.ctaClick('emprendedores_cuenta_corriente_cta', 'Conocé más')}
                className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 bg-brand-yellow-400 hover:bg-brand-yellow-300 text-brand-blue-500 font-subheading text-base font-bold uppercase tracking-wider shadow-[0_10px_20px_rgba(255,236,1,0.25)] transition-all duration-300 hover:scale-[1.02] cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                <span>Conocé el Plan Emprendedor</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Column right: Cards 2 & 3 */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* Card 2: MercadoLibre Flex (Yellow Accent Card) */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-gradient-to-br from-brand-yellow-400 to-brand-yellow-500 text-brand-blue-500 p-7 sm:p-8 border border-brand-yellow-300 shadow-md transition-all duration-300 group overflow-hidden flex flex-col justify-between text-left relative"
              whileHover={reduceMotion ? undefined : { y: -4, transition: snappySpring }}
            >
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-blue-500 text-white rounded-xl shadow-xs" aria-hidden="true">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-blue-600 uppercase">
                    Mercado Envíos Flex
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-500">
                    Envíos Flex Meli
                  </h3>
                  <p className="text-brand-blue-500/90 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    Servicio adaptado a las métricas de MercadoLibre para entregas rápidas en el día. Recolección puntual en tu local y soporte directo.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-brand-blue-500/20 relative z-10 flex justify-end">
                <Link
                  href="/servicios/enviosflex"
                  onClick={() => trackAnalytics.ctaClick('emprendedores_flex_cta', 'Configurar Flex')}
                  className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full inline-flex items-center gap-2 shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500"
                >
                  <span>Configurar Flex</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Corporativos (White Card) */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white text-brand-blue-500 p-7 sm:p-8 border border-slate-200 shadow-md transition-all duration-300 group overflow-hidden flex flex-col justify-between text-left relative"
              whileHover={reduceMotion ? undefined : { y: -4, transition: snappySpring }}
            >
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-yellow-500 text-brand-blue-500 rounded-xl shadow-xs" aria-hidden="true">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-blue-400 uppercase">
                    Grandes Cuentas
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-500 group-hover:text-brand-blue-600 transition-colors">
                    Soluciones Corporativas
                  </h3>
                  <p className="text-brand-blue-500/80 text-xs sm:text-sm leading-relaxed font-sans">
                    Logística B2B a gran escala con facturación periódica unificada, ruteos fijos programados y remitos conformados con firma digital.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 relative z-10 flex justify-end">
                <Link
                  href="/contacto"
                  onClick={() => trackAnalytics.ctaClick('emprendedores_corporativo_cta', 'Abrir Cuenta Corriente')}
                  className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full inline-flex items-center gap-2 shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500"
                >
                  <span>Abrir Cuenta Corriente</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Marquee of Local Partners - GPU Hardware Accelerated Infinite Scroll */}
        <motion.div
          variants={itemVariants}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <p className="text-center font-subheading text-xs tracking-widest text-brand-blue-50 uppercase">
              Marcas locales que confían en nosotros
            </p>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setIsMarqueePaused((prev) => !prev)}
                aria-pressed={isMarqueePaused}
                aria-label={isMarqueePaused ? 'Reanudar carrusel de marcas locales' : 'Pausar carrusel de marcas locales'}
                className="min-h-11 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-brand-yellow-500 text-xs font-subheading tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
              >
                {isMarqueePaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>Reanudar</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>Pausar</span>
                  </>
                )}
              </button>
            )}
          </div>
          <div
            className="relative w-full overflow-hidden py-4 select-none mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <div
              className={`flex gap-16 ${
                reduceMotion
                  ? 'flex-wrap justify-center w-full'
                  : 'w-max motion-safe:animate-logos-scroll motion-reduce:animate-none! hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]'
              }`}
              style={isMarqueePaused && !reduceMotion ? { animationPlayState: 'paused' } : undefined}
            >
              {/* Set 1 */}
              <div className={`flex gap-16 items-center ${reduceMotion ? 'flex-wrap justify-center gap-8' : ''}`}>
                {partners.map((partner, index) => (
                  <span
                    key={index}
                    className="font-display text-2xl tracking-wider text-brand-blue-50 uppercase cursor-default hover:text-brand-yellow-500 hover:scale-105 transition-all duration-300"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              {/* Set 2 (for infinite continuous loop) */}
              {!reduceMotion && (
                <div className="flex gap-16 items-center" aria-hidden="true">
                  {partners.map((partner, index) => (
                    <span
                      key={`dup-${index}`}
                      className="font-display text-2xl tracking-wider text-brand-blue-50 uppercase cursor-default hover:text-brand-yellow-500 hover:scale-105 transition-all duration-300"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

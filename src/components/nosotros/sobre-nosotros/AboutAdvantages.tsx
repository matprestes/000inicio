'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function AboutAdvantages() {
  return (
    <section
      id="about-advantages"
      className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest font-bold transform -rotate-1 shadow-glow-yellow">
            <Sparkles className="w-4 h-4 text-brand-blue-500" />
            <span>VENTAJAS TERRITORIALES</span>
          </div>

          <h2 className="text-brand-blue-500 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            POR QUÉ CONFIAR EN DOSRUEDAS
          </h2>

          <p className="text-brand-blue-500/80 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Frente a aplicaciones automatizadas y plataformas impersonales, nosotros brindamos compromiso presencial, operadores locales y conocimiento metro a metro de Mar del Plata.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Soporte Humano Directo (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-full"
          >
            <DoubleBezelCard className="h-full">
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-blue-50 text-brand-blue-500 rounded-2xl flex items-center justify-center border border-brand-blue-100 shadow-sm">
                    <MessageSquare className="h-7 w-7 text-brand-blue-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-500 leading-tight">
                    Atención Humana y Directa
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue-500/85 leading-relaxed font-sans font-normal">
                    Damos la cara siempre. Cuando surge una duda o reprogramación, te comunicás directamente por WhatsApp con operadores en Mar del Plata que gestionan y resuelven en el acto.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider font-bold text-brand-blue-500">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 fill-current" />
                  <span>COMUNICACIÓN DIRECTA VÍA WHATSAPP</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 2: Flota Propia Coordinada (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full"
          >
            <DoubleBezelCard className="h-full">
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-yellow-50 text-brand-blue-500 rounded-2xl flex items-center justify-center border border-brand-yellow-200 shadow-sm">
                    <Truck className="h-7 w-7 text-brand-blue-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-500 leading-tight">
                    Flota Propia Capacitada
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue-500/85 leading-relaxed font-sans font-normal">
                    No tercerizamos de forma descontrolada. Nuestro equipo de cadetes está uniformado, capacitado en manejo de paquetes frágiles y con base física en <strong className="text-brand-blue-500">Friuli 1972</strong>.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider font-bold text-brand-blue-500">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 fill-current" />
                  <span>COBERTURA TOTAL GENERAL PUEYRREDÓN</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 3: Garantía de Puntualidad (12 cols full width) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12"
          >
            <DoubleBezelCard>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-2">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-blue-50 text-brand-blue-500 rounded-2xl border border-brand-blue-100">
                      <ShieldCheck className="h-6 w-6 text-brand-blue-500" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-500 leading-none">
                      Garantía Operativa Sin Excusas
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-brand-blue-500/85 leading-relaxed font-sans">
                    Tu reputación comercial depende de la puntualidad de entrega. Si coordinamos un envío express en 2 horas o un ruteo programado, cumplimos la franja pactada sin desvíos.
                  </p>
                </div>
                <div className="shrink-0 flex items-center">
                  <CTANestedPill
                    href="/cotizar"
                    variant="primary"
                    size="large"
                  >
                    Cotizar tu Envío
                  </CTANestedPill>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
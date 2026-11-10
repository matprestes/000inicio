'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function AboutMissionVision() {
  return (
    <section
      id="about-mission-vision"
      className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest font-bold transform -rotate-1 shadow-glow-yellow">
            <Sparkles className="w-4 h-4 text-brand-blue-500" />
            <span>PROPÓSITO & FUTURO</span>
          </div>

          <h2 className="text-brand-blue-500 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            MISIÓN, VISIÓN & COMPROMISO
          </h2>

          <p className="text-brand-blue-500/80 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Hacia dónde vamos y cuáles son las convicciones que guían cada entrega y ruteo diario en Mar del Plata.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Nuestra Misión (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-full"
          >
            <DoubleBezelCard className="h-full">
              <div className="space-y-6 flex flex-col justify-between h-full p-2">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-blue-50 text-brand-blue-500 rounded-2xl flex items-center justify-center border border-brand-blue-100 shadow-sm">
                    <Target className="h-7 w-7 text-brand-blue-500" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-500 leading-tight">
                    NUESTRA MISIÓN
                  </h3>

                  <p className="text-sm sm:text-base text-brand-blue-500/85 leading-relaxed font-sans font-normal">
                    Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de última milla confiable, accesible y ágil. Eliminamos las fricciones logísticas para que nuestros clientes puedan enfocarse en vender más y crecer.
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider font-bold text-brand-blue-500">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                  <span>COMPROMISO OPERATIVO PERMANENTE</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 2: Nuestra Visión (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full"
          >
            <DoubleBezelCard className="h-full">
              <div className="space-y-6 flex flex-col justify-between h-full p-2">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-yellow-50 text-brand-blue-500 rounded-2xl flex items-center justify-center border border-brand-yellow-200 shadow-sm">
                    <Eye className="h-7 w-7 text-brand-blue-500" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-500 leading-tight">
                    NUESTRA VISIÓN
                  </h3>

                  <p className="text-sm sm:text-base text-brand-blue-500/85 leading-relaxed font-sans font-normal">
                    Ser el estándar indiscutido de logística urbana y fulfillment 3PL en la Costa Atlántica, reconocidos por nuestra puntualidad, tecnología de ruteo y calidez en la atención humana.
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100 flex items-center gap-2 text-xs font-subheading uppercase tracking-wider font-bold text-brand-blue-500">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                  <span>VISIÓN DE FUTURO 2026</span>
                </div>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Card 3: Compromiso e Innovación CTA (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12"
          >
            <DoubleBezelCard>
              <div className="bg-brand-blue-500 p-6 sm:p-8 rounded-[20px] border border-white/20 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 text-white">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 text-brand-yellow-500 rounded-2xl border border-white/20">
                      <Rocket className="h-6 w-6 text-brand-yellow-500" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-none">
                      ¿LISTO PARA ENVIAR CON LOS MEJORES?
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-brand-blue-50 leading-relaxed font-sans">
                    Sumate a las cientos de tiendas y emprendimientos de Mar del Plata que confían su logística diaria en Envíos DosRuedas. Cotizá en línea o hablá hoy con un asesor comercial.
                  </p>
                </div>

                <div className="shrink-0 flex flex-wrap items-center gap-3">
                  <CTANestedPill
                    href="/cotizar"
                    variant="primary"
                    size="large"
                  >
                    Cotizar Envío
                  </CTANestedPill>
                  <CTANestedPill
                    href="/contacto"
                    variant="outline"
                    size="large"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Contactar Asesor
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
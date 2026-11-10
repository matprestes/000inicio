'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Compass, TrendingUp, Award, CheckCircle, Truck, MapPin, Sparkles } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';

export default function AboutTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'Lanzamiento Inicial en MDQ',
      desc: 'Iniciamos operaciones con flota propia de motocicletas en las calles céntricas de Mar del Plata, apostando a un servicio ágil y de confianza.',
      icon: Compass,
    },
    {
      year: '2021',
      title: 'Soluciones PyME y LowCost',
      desc: 'Lanzamos la modalidad LowCost agrupada y el Plan Emprendedores para impulsar las ventas online durante la expansión del e-commerce local.',
      icon: TrendingUp,
    },
    {
      year: '2023',
      title: 'Consolidación de Flota Propia',
      desc: 'Estructura propia de repartidores uniformados y coordinados por WhatsApp para garantizar entregas puntuales sin tercerización.',
      icon: Truck,
    },
    {
      year: '2024',
      title: 'Pioneros MercadoLibre Flex en MDQ',
      desc: 'Nos convertimos en el socio logístico de referencia para entregas Same-Day de Mercado Libre en todo Mar del Plata.',
      icon: CheckCircle,
    },
    {
      year: '2025',
      title: 'Hub Logístico Friuli 1972',
      desc: 'Inauguración de nuestro depósito central en Friuli 1972 con depósitos de paquetería, picking y tecnología de ruteo optimizado.',
      icon: MapPin,
    },
    {
      year: '2026',
      title: 'Infraestructura 3PL en todo Mar del Plata',
      desc: 'Más de 7 años de trayectoria consolidada con flota propia, cotizadores en tiempo real y fulfillment integral para tiendas online.',
      icon: Award,
    },
  ];

  return (
    <section
      id="about-timeline"
      className="py-20 sm:py-28 bg-brand-blue-50/70 relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest font-bold transform -rotate-1 shadow-glow-yellow">
            <Sparkles className="w-4 h-4 text-brand-blue-500" />
            <span>TRAYECTORIA & EVOLUCIÓN</span>
          </div>

          <h2 className="text-brand-blue-500 text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTRA HISTORIA
          </h2>

          <p className="text-brand-blue-500/80 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Más de 7 años transformando la última milla y la mensajería urbana en la ciudad de Mar del Plata.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central / Left Vertical Stepper Line for Responsive Design */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-4 w-1 bg-brand-blue-200 rounded-full">
            <div className="w-full h-full bg-brand-blue-500 rounded-full" />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 pl-12 sm:pl-0 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Concentric Node Circle */}
                  <div className="absolute left-3.5 sm:left-1/2 sm:-translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-brand-yellow-500 border-2 border-white ring-4 ring-brand-blue-500 shadow-md flex items-center justify-center z-10 text-brand-blue-500">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  {/* Spacer Column for Desktop Zig-Zag */}
                  <div className="w-full sm:w-[46%] hidden sm:block" />

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full sm:w-[46%]"
                  >
                    <DoubleBezelCard>
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-3xl sm:text-4xl text-brand-blue-500 font-extrabold leading-none tabular-nums tracking-tight">
                            {milestone.year}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-brand-yellow-50 text-2xs font-subheading text-brand-blue-500 font-bold uppercase border border-brand-yellow-200 transform -rotate-1 tabular-nums shadow-xs">
                            Hito MDQ
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-500 leading-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed font-sans font-normal">
                          {milestone.desc}
                        </p>
                      </div>
                    </DoubleBezelCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

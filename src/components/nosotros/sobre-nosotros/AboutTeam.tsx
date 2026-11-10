'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users2, ShieldCheck, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';

export default function AboutTeam() {
  const teamStats = [
    {
      number: '+20',
      role: 'Repartidores en Calle',
      desc: 'Cadetes capacitados y uniformados que conocen cada atajo y zona de Mar del Plata para entregas veloces y seguras.',
      icon: Users2,
      tag: 'Flota Propia',
    },
    {
      number: '100%',
      role: 'Base Operativa en MDQ',
      desc: 'Depósito central en Friuli 1972 para recepción, almacenamiento, consolidación de paquetes y despacho diario.',
      icon: MapPin,
      tag: 'Base Friuli 1972',
    },
    {
      number: '< 2h',
      role: 'Tiempo Promedio Express',
      desc: 'Servicio prioritario punto a punto dentro del ejido urbano con monitoreo continuo de ruta.',
      icon: ShieldCheck,
      tag: 'Máxima Velocidad',
    },
    {
      number: '+7',
      role: 'Años de Trayectoria',
      desc: 'Compromiso ininterrumpido con comerciantes, emprendedores y empresas marplatenses.',
      icon: HeartHandshake,
      tag: 'Confianza Local',
    },
  ];

  return (
    <section
      id="about-team"
      className="py-24 sm:py-28 bg-brand-blue-500 text-white relative z-10 overflow-hidden border-t border-white/15"
    >
      {/* Decorative Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffec01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest font-bold transform -rotate-1 shadow-glow-yellow">
            <Sparkles className="w-4 h-4 text-brand-blue-500" />
            <span>FUERZA OPERATIVA & EXPERIENCIA</span>
          </div>

          <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            NUESTRO EQUIPO EN CALLE
          </h2>

          <p className="text-brand-blue-50 font-sans text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            Una estructura humana consolidada con base física en la ciudad, lista para responder al ritmo de tu comercio con cero tercerización.
          </p>
        </div>

        {/* Team Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <DoubleBezelCard className="h-full">
                  <div className="flex flex-col justify-between h-full space-y-6 relative overflow-hidden">
                    <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-brand-blue-500/5 pointer-events-none" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-12 h-12 bg-brand-blue-50 text-brand-blue-500 rounded-2xl flex items-center justify-center border border-brand-blue-100 shadow-sm">
                          <Icon className="w-6 h-6 text-brand-blue-500" />
                        </div>
                        <span className="text-2xs font-subheading uppercase tracking-wider font-bold bg-brand-yellow-500 text-brand-blue-500 px-3 py-1 rounded-full transform -rotate-1 shadow-xs">
                          {stat.tag}
                        </span>
                      </div>

                      <div className="pt-2">
                        <span className="block font-mono text-5xl sm:text-6xl font-extrabold text-brand-blue-500 leading-none mb-2.5 tabular-nums tracking-tight">
                          {stat.number}
                        </span>

                        <h3 className="text-xl font-display uppercase tracking-tight text-brand-blue-500 leading-tight mb-2">
                          {stat.role}
                        </h3>

                        <p className="text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed font-sans font-normal">
                          {stat.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-brand-blue-100/80 flex items-center justify-between text-xs text-brand-blue-500/70 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Image src="/logo-envios-simplified.webp" alt="Envíos DosRuedas" width={18} height={18} className="object-contain" />
                        <span className="font-semibold">DosRuedas</span>
                      </span>
                      <span className="font-bold text-brand-blue-500 tabular-nums bg-brand-blue-50 px-2 py-0.5 rounded-md">MDQ 2026</span>
                    </div>
                  </div>
                </DoubleBezelCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

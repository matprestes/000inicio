'use client';

import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowUpRight, ShieldCheck, MessageSquare } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';

interface ChannelItem {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon: string | React.ElementType;
  tag: string;
  subtag: string;
}

const CHANNELS: ChannelItem[] = [
  {
    title: 'WhatsApp Comercial',
    description: 'Cotizaciones instantáneas, consultas operativas y coordinación de viajes urgentes en tiempo real.',
    buttonText: 'Chatear por WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Vengo%20desde%20la%20p%C3%A1gina%20de%20Contacto.',
    icon: MessageSquare,
    tag: 'RESPUESTA < 2 MIN',
    subtag: 'MAR DEL PLATA 2026',
  },
  {
    title: 'Instagram Oficial',
    description: 'Novedades de la flota, consejos para tiendas online y fotos reales del día a día logístico.',
    buttonText: 'Seguir en Instagram',
    href: 'https://instagram.com/enviosdosruedas',
    icon: '/iconos/instagram.svg',
    tag: '@ENVIOSDOSRUEDAS',
    subtag: 'COMUNIDAD E-COMMERCE',
  },
  {
    title: 'Facebook Oficial',
    description: 'Avisos de servicios especiales, reportes de tránsito urbano y canal corporativo para comercios.',
    buttonText: 'Visitar Facebook',
    href: 'https://facebook.com/enviosdosruedas',
    icon: '/iconos/facebook.svg',
    tag: 'PÁGINA OFICIAL',
    subtag: 'MAR DEL PLATA',
  },
];

export default function ContactChannels() {
  return (
    <section aria-labelledby="canales-atencion-heading" className="space-y-6">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 text-xs font-subheading uppercase tracking-wider -rotate-1 border border-brand-blue-100">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-500" aria-hidden="true" />
          <span>Canales de Atención Directa</span>
        </div>
        <h2
          id="canales-atencion-heading"
          className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-brand-blue-500 mt-2"
        >
          Elegí cómo comunicarte
        </h2>
        <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 mt-1 max-w-2xl">
          Atención personalizada sin intermediarios, de lunes a sábados en Mar del Plata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CHANNELS.map((channel, idx) => {
          const IconComp = channel.icon;
          const isWhatsApp = idx === 0;

          return (
            <DoubleBezelCard key={channel.title} className="h-full">
              <div className="flex flex-col justify-between h-full space-y-5 relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xs font-subheading uppercase tracking-wider text-brand-blue-500 px-2 py-0.5 rounded bg-brand-blue-50 border border-brand-blue-100">
                      {channel.tag}
                    </span>
                    <span className="text-2xs font-mono font-bold uppercase text-brand-blue-400 tabular-nums">
                      {channel.subtag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-500 shadow-xs">
                      {typeof IconComp === 'string' ? (
                        <OptimizedImage
                          src={IconComp}
                          alt=""
                          width={20}
                          height={20}
                          aboveTheFold={false}
                          className="w-5 h-5 object-contain"
                          aria-hidden="true"
                        />
                      ) : (
                        <IconComp className="w-5 h-5 text-brand-blue-500" aria-hidden="true" />
                      )}
                    </div>
                    <h3 className="font-display text-lg uppercase tracking-tight text-brand-blue-500">
                      {channel.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-2">
                  <CTANestedPill
                    href={channel.href}
                    variant={isWhatsApp ? 'primary' : 'elevated'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-11 h-11"
                  >
                    <span>{channel.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </CTANestedPill>
                </div>
              </div>
            </DoubleBezelCard>
          );
        })}
      </div>
    </section>
  );
}

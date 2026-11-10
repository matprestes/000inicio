import type { Metadata } from 'next';
import {
  Clock,
  PackageCheck,
  ArrowRight,
  MapPin,
  FileText,
  Timer,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  ExpressHero,
  ExpressFeatures,
  ExpressPricing,
  ExpressUseCases,
} from '@/components/servicios/express';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import {
  EXPRESS_WINDOW,
  EXPRESS_LEAD_TIME,
  EXPRESS_CUTOFF_TIME,
  STANDARD_WEIGHT_KG,
  STANDARD_BULLET_DIMENSIONS_CM,
  BULK_EXTRA_FROM_ARS,
  WAIT_TOLERANCE_MIN,
  WAIT_CHARGE_ARS,
  RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST,
  SUPPORT_PHONE,
} from '@/lib/promises';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';
const whatsappClean = (SUPPORT_PHONE || '+54 223 660-2699').replace(/\D/g, '');

export const metadata: Metadata = {
  title: 'Envíos Express en Mar del Plata (Franja de 3 hs) | Envíos DosRuedas',
  description:
    'Servicio prioritario de mensajería urgente en moto en Mar del Plata. Entrega en franja de 3 hs a coordinar con 2 hs de anticipación. Flota propia y trazabilidad en tiempo real.',
  alternates: { canonical: `${baseUrl}/servicios/envios-express` },
  openGraph: {
    title: 'Envíos Express en Mar del Plata (Franja de 3 hs) | Envíos DosRuedas',
    description:
      'Tu paquete entregado en franja horaria acotada de 3 hs con al menos 2 hs de anticipación. Tarifa fija por distancia sin sorpresas.',
    url: `${baseUrl}/servicios/envios-express`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos Express en Mar del Plata | Envíos DosRuedas',
    description:
      'Cadetería en moto con entrega prioritaria en franja horaria de 3 hs en Mar del Plata. Coordinación por WhatsApp.',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function EnviosExpressPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Envíos Express en Mar del Plata',
        serviceType: 'Mensajería Urgente en Moto y Encomiendas Prioritarias',
        description:
          'Servicio de entrega en franja horaria acotada de 3 hs a coordinar con 2 hs de anticipación. Corte diario a las 15:00 hs.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Envíos DosRuedas',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Friuli 1972',
            addressLocality: 'Mar del Plata',
            addressRegion: 'Buenos Aires',
            postalCode: 'B7600',
            addressCountry: 'AR',
          },
          telephone: '+54 223 660-2699',
          url: baseUrl,
        },
        areaServed: {
          '@type': 'City',
          name: 'Mar del Plata',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'ARS',
          lowPrice: 3700,
          offerCount: 4,
          priceValidUntil: '2026-12-31',
        },
        termsOfService: `${baseUrl}/terminos-y-condiciones`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Servicios',
            item: `${baseUrl}/servicios`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Envíos Express',
            item: `${baseUrl}/servicios/envios-express`,
          },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-col flex-1 w-full bg-white text-brand-blue-500 pb-16">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Principal Modular */}
      <ExpressHero />

      {/* Características y Compromisos Operativos */}
      <ExpressFeatures />

      {/* Tarifario Oficial por Distancia y Calculadora */}
      <ExpressPricing />

      {/* Casos de Uso Recomendados */}
      <ExpressUseCases />

      {/* Transparencia Operativa, Límites Físicos y Aviso Fiscal */}
      <section
        id="condiciones-operativas"
        aria-label="Condiciones y garantías del servicio Express"
        className="py-16 sm:py-20 bg-brand-white-50 border-t border-brand-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="-rotate-1 inline-block px-3.5 py-1 bg-brand-blue-500 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest">
              Garantías & Transparencia
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-500">
              Condiciones claras para tu tranquilidad
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-blue-500/80 leading-relaxed">
              Sin letra chica ni recargos sorpresa al momento de recibir o pagar tu viaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Límite físico estándar */}
            <DoubleBezelCard className="h-full" innerClassName="p-6 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-brand-blue-500">
                  Bulto Estándar en Moto
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed">
                  Hasta <strong className="font-bold text-brand-blue-500">{STANDARD_WEIGHT_KG} kg</strong> y dimensiones de{' '}
                  <strong className="font-bold text-brand-blue-500">{STANDARD_BULLET_DIMENSIONS_CM}</strong>. Bultos de mayor peso o volumen se coordinan con adicional desde ${BULK_EXTRA_FROM_ARS}.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-blue-50 text-2xs font-mono text-brand-blue-500/70">
                Transporte seguro en baúl y mochila de cadete
              </div>
            </DoubleBezelCard>

            {/* Ventanas y Corte horario */}
            <DoubleBezelCard className="h-full" innerClassName="p-6 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-brand-blue-500">
                  Franja {EXPRESS_WINDOW}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed">
                  Coordinamos con al menos <strong className="font-bold text-brand-blue-500">{EXPRESS_LEAD_TIME}</strong>. Corte diario a las{' '}
                  <strong className="font-bold text-brand-blue-500">{EXPRESS_CUTOFF_TIME}</strong> para entregas en la misma jornada.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-blue-50 text-2xs font-mono text-brand-blue-500/70">
                Lunes a viernes 9:00–19:00 · Sábados 9:00–14:00
              </div>
            </DoubleBezelCard>

            {/* Recargos publicados */}
            <DoubleBezelCard className="h-full" innerClassName="p-6 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center">
                  <Timer className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-brand-blue-500">
                  Tiempos de Espera y Clima
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed">
                  Tolerancia de <strong className="font-bold text-brand-blue-500">{WAIT_TOLERANCE_MIN} min</strong> de espera en puerta sin cargo (luego ${WAIT_CHARGE_ARS} c/10 min). En días de lluvia aplica recargo operativo del {RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST}%.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-blue-50 text-2xs font-mono text-brand-blue-500/70">
                Informado previamente antes de despachar
              </div>
            </DoubleBezelCard>
          </div>

          {/* Banner de régimen fiscal y Base Central */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-blue-100/80 shadow-xs flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-brand-blue-50 text-brand-blue-500 shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-subheading text-xs uppercase font-bold tracking-wider text-brand-blue-500">
                  Régimen Fiscal & Facturación
                </h4>
                <p className="font-sans text-xs text-brand-blue-500/80 leading-relaxed">
                  Operamos bajo Régimen Monotributo. Emitimos comprobantes fiscales legales tipo C. No emitimos Factura A.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-blue-100/80 shadow-xs flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-brand-blue-50 text-brand-blue-500 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-subheading text-xs uppercase font-bold tracking-wider text-brand-blue-500">
                  Base Operativa Central en Mar del Plata
                </h4>
                <p className="font-sans text-xs text-brand-blue-500/80 leading-relaxed">
                  Base en Friuli 1972, Mar del Plata. Cobertura en toda la traza urbana y enlaces especiales a Batán y Sierra de los Padres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre / Llamado a la Acción Rápido */}
      <section className="pt-16 sm:pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-blue-500 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-blue-400">
            {/* Background ambient halos */}
            <div
              className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue-400/20 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
              <span className="font-mono text-2xs uppercase tracking-widest text-brand-yellow-500 font-bold px-3 py-1 bg-white/10 rounded-full border border-white/15 inline-block">
                CADETERÍA INMEDIATA · MAR DEL PLATA
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                ¿Tenés un paquete que no puede esperar?
              </h3>
              <p className="font-sans text-sm sm:text-base text-brand-blue-50/90 leading-relaxed">
                Calculá tu distancia en el mapa con el cotizador online o mandanos los datos por WhatsApp para coordinar el retiro inmediato.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 relative z-10">
              <CTANestedPill
                href="/cotizar"
                variant="primary"
                size="large"
                className="w-full text-center justify-center"
              >
                <span>Cotizar Envío Online</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </CTANestedPill>

              <a
                href={`https://api.whatsapp.com/send/?phone=${whatsappClean}&text=Hola%20Envíos%20DosRuedas!%20Necesito%20un%20Envío%20Express%20en%20franja%20de%203%20hs`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white font-subheading text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>Pedir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


'use client';

import React from 'react';
import Link from 'next/link';
import {
  Clock,
  PackageCheck,
  ArrowRight,
  MapPin,
  FileText,
  Timer,
  Zap,
  ShieldCheck,
  TrendingUp,
  Star,
  Activity,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
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
import { EXPRESS_TIERS } from '@/lib/pricing';
import FloatingStatusIndicator from '@/components/servicios/express-luxury/FloatingStatusIndicator';
import TransformationCompareCard from '@/components/servicios/express-luxury/TransformationCompareCard';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';
const whatsappClean = (SUPPORT_PHONE || '+54 223 660-2699').replace(/\D/g, '');
const basePrice = EXPRESS_TIERS[0]?.price ?? 3700;

export default function ExpressLuxuryClientPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Envíos Express Luxury en Mar del Plata',
        serviceType: 'Mensajería Urgente en Moto y Encomiendas VIP',
        description:
          'Servicio de entrega en franja horaria acotada de 3 hs con estándar Dark Luxury y trazabilidad prioritaria.',
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
          lowPrice: basePrice,
          offerCount: 4,
          priceValidUntil: '2026-12-31',
        },
        termsOfService: `${baseUrl}/terminos-y-condiciones`,
      },
    ],
  };

  return (
    <main className="flex flex-col flex-1 w-full bg-[#121212] text-white pb-20 selection:bg-[#e11d48] selection:text-white font-sans">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Glassmorphism */}
      <header className="sticky top-0 z-50 bg-[#121212]/85 backdrop-blur-[16px] border-b border-white/5 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#e11d48] text-white flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform">
              2R
            </div>
            <div>
              <span className="font-display text-lg tracking-tight uppercase block text-white leading-none">
                Envíos DosRuedas
              </span>
              <span className="font-mono text-2xs text-[#e11d48] uppercase tracking-widest block mt-0.5">
                Dark Luxury Edition
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono text-xs text-white/70">Friuli 1972, Mar del Plata</span>
            <FloatingStatusIndicator />
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/cotizar"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#e11d48] to-[#9f1239] hover:from-rose-500 hover:to-rose-700 text-white font-subheading text-xs tracking-wider uppercase font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)]"
            >
              Cotizar Rápido
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e11d48]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-[#e11d48]/20 border border-[#e11d48]/40 text-[#e11d48] rounded-full font-mono text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                EXPRESS LUXURY · FRANJA DE 3 HS
              </span>
              <FloatingStatusIndicator />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white leading-[1.05]">
              Logística urgente con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-rose-400">estándar VIP</span> en Mar del Plata
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-sans">
              Tu paquete entregado en una franja horaria acotada de <strong className="text-white font-bold">{EXPRESS_WINDOW}</strong> con al menos {EXPRESS_LEAD_TIME} de anticipación. Flota propia y trazabilidad en tiempo real sin sorpresas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/cotizar"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#9f1239] hover:from-rose-500 hover:to-rose-700 text-white font-subheading text-base tracking-wider uppercase font-bold transition-all shadow-[0_0_30px_rgba(225,29,72,0.4)] flex items-center gap-3"
              >
                <span>Cotizar Envío Express</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`https://api.whatsapp.com/send/?phone=${whatsappClean}&text=Hola%20Envíos%20DosRuedas!%20Quiero%20coordinar%20un%20Envío%20Express%20Luxury`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#1e1e1e] hover:bg-[#282828] text-white border border-white/15 font-subheading text-base tracking-wider uppercase font-bold transition-all flex items-center gap-3 shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp VIP</span>
              </a>
            </div>

            {/* Métrica bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="block font-mono text-2xl font-bold text-[#e11d48]">3 HS</span>
                <span className="text-xs text-white/50 font-mono uppercase">Franja horaria</span>
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-white">{EXPRESS_CUTOFF_TIME}</span>
                <span className="text-xs text-white/50 font-mono uppercase">Corte diario</span>
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-white">${basePrice.toLocaleString('es-AR')}</span>
                <span className="text-xs text-white/50 font-mono uppercase">Tarifa base Z1</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TransformationCompareCard />
          </div>
        </div>
      </section>

      {/* Grid de Servicios Asimétrica */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e11d48] font-bold px-3 py-1 bg-[#e11d48]/10 rounded-full border border-[#e11d48]/20">
            ARQUITECTURA ASIMÉTRICA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Diseñado para máxima velocidad y seguridad
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-sans">
            Cada pilar operativo de nuestro servicio express ha sido refinado para garantizar entregas impecables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Card 1: 7 cols */}
          <div className="md:col-span-3 lg:col-span-7 bg-[#181818] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#e11d48]/50 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#e11d48]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#e11d48]/20 text-[#e11d48] flex items-center justify-center border border-[#e11d48]/30">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                Bulto Estándar en Moto VIP
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Transporte seguro de hasta <strong className="text-white">{STANDARD_WEIGHT_KG} kg</strong> y dimensiones de <strong className="text-white">{STANDARD_BULLET_DIMENSIONS_CM}</strong>. Carga protegida en baúl y mochila térmica especializada.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Capacidad optimizada</span>
              <span className="text-[#e11d48]">Seguro incluido</span>
            </div>
          </div>

          {/* Card 2: 5 cols */}
          <div className="md:col-span-3 lg:col-span-5 bg-[#181818] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#e11d48]/50 transition-all">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#e11d48]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#e11d48]/20 text-[#e11d48] flex items-center justify-center border border-[#e11d48]/30">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                Franja {EXPRESS_WINDOW}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Coordinación con al menos <strong className="text-white">{EXPRESS_LEAD_TIME}</strong> de anticipación. Corte diario a las <strong className="text-white">{EXPRESS_CUTOFF_TIME}</strong>.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-white/50">
              Lunes a Sábados en toda Mar del Plata
            </div>
          </div>

          {/* Card 3: 4 cols */}
          <div className="md:col-span-1 lg:col-span-4 bg-[#181818] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#e11d48]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e11d48]/20 text-[#e11d48] flex items-center justify-center border border-[#e11d48]/30">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Tiempos de Espera
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Tolerancia de <strong className="text-white">{WAIT_TOLERANCE_MIN} min</strong> en puerta sin cargo (${WAIT_CHARGE_ARS} c/10 min adicionales).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#e11d48]">
              Puntualidad garantizada
            </div>
          </div>

          {/* Card 4: 4 cols */}
          <div className="md:col-span-1 lg:col-span-4 bg-[#181818] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#e11d48]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e11d48]/20 text-[#e11d48] flex items-center justify-center border border-[#e11d48]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Recargo Climático
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                En días de lluvia aplica recargo operativo del {RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST}%, informado previamente antes de despachar.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#e11d48]">
              Transparencia total
            </div>
          </div>

          {/* Card 5: 4 cols */}
          <div className="md:col-span-1 lg:col-span-4 bg-[#181818] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#e11d48]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e11d48]/20 text-[#e11d48] flex items-center justify-center border border-[#e11d48]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Base Central MDQ
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Friuli 1972, Mar del Plata. Cobertura en toda la traza urbana y enlaces especiales a Batán y Sierra de los Padres.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#e11d48]">
              Monotributo · Factura C
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Horizontal con efecto hover "ROI" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#e11d48] font-bold px-3 py-1 bg-[#e11d48]/10 rounded-full border border-[#e11d48]/20">
              PORTFOLIO DE IMPACTO & ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Casos de éxito con retorno comprobado
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md font-sans">
            Empresas líderes en Mar del Plata confían en nuestro servicio Express para acelerar sus operaciones críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'E-Commerce de Indumentaria',
              metric: '+42% Retención',
              desc: 'Entregas express en 3 horas para compras de última hora en temporada alta.',
              roi: 'Ahorro de 3.5 horas diarias en gestión logística.',
            },
            {
              title: 'Estudio Jurídico & Notarial',
              metric: '100% Puntualidad',
              desc: 'Presentación de escritos y documentación legal con acuse de recibo inmediato.',
              roi: 'Cero plazos vencidos en tribunales locales.',
            },
            {
              title: 'Insumos Médicos & Farmacia',
              metric: 'Prioridad Absoluta',
              desc: 'Despacho urgente de medicamentos y muestras con cadena de custodia.',
              roi: 'Reducción del 50% en incidentes de entrega.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#181818] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#e11d48] hover:shadow-[0_10px_30px_rgba(225,29,72,0.2)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e11d48]/5 rounded-full blur-2xl group-hover:bg-[#e11d48]/20 transition-all" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/50">{item.title}</span>
                  <TrendingUp className="w-4 h-4 text-[#e11d48]" />
                </div>

                <div className="text-3xl font-mono font-bold text-[#e11d48] group-hover:scale-105 transition-transform origin-left">
                  {item.metric}
                </div>

                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>

                <div className="pt-4 border-t border-white/10">
                  <span className="font-mono text-2xs text-white/60 block uppercase">Efecto ROI Verificado</span>
                  <span className="text-xs font-semibold text-white">{item.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Testimonios 3x1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e11d48] font-bold px-3 py-1 bg-[#e11d48]/10 rounded-full border border-[#e11d48]/20">
            TESTIMONIOS VERIFICADOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Lo que dicen nuestros clientes VIP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: 'El servicio Express Luxury cambió por completo la velocidad de nuestras entregas a clientes exigentes en Constitución y Playa Grande.',
              author: 'Martín G., Director Comercial',
              company: 'Moda & Estilo MDQ',
            },
            {
              quote: 'Impecable puntualidad. La franja de 3 horas se cumple a rajatabla y la coordinación por WhatsApp es sumamente eficiente.',
              author: 'Dra. Sofía R., Socia Gerente',
              company: 'Estudio Jurídico Integral',
            },
            {
              quote: 'Contar con cadetes fijos y capacitados para documentos delicados nos da una tranquilidad absoluta todos los días.',
              author: 'Esteban M., Operaciones',
              company: 'Logística & Insumos',
            },
          ].map((testi, idx) => (
            <div
              key={idx}
              className="bg-[#181818] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#e11d48]/40 transition-all shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <span className="font-bold text-white text-sm block">{testi.author}</span>
                <span className="font-mono text-2xs text-[#e11d48]">{testi.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#e11d48]/40 shadow-[0_0_50px_rgba(225,29,72,0.2)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e11d48]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <span className="font-mono text-2xs uppercase tracking-widest text-[#e11d48] font-bold px-3.5 py-1 bg-[#e11d48]/10 rounded-full border border-[#e11d48]/30 inline-block">
              CADETERÍA PRIORITARIA · MAR DEL PLATA
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              ¿Listo para elevar tu estándar de entrega?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Cotiza online en segundos o comunícate directamente con nuestra base operativa central en Mar del Plata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto shrink-0 relative z-10">
            <Link
              href="/cotizar"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#9f1239] hover:from-rose-500 hover:to-rose-700 text-white font-subheading text-base tracking-wider uppercase font-bold transition-all shadow-[0_0_25px_rgba(225,29,72,0.4)] text-center flex items-center justify-center gap-2"
            >
              <span>Cotizar Envío Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://api.whatsapp.com/send/?phone=${whatsappClean}&text=Hola%20Envíos%20DosRuedas!%20Quiero%20contratar%20el%20servicio%20Express%20Luxury`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#222] hover:bg-[#2c2c2c] text-white border border-white/20 font-subheading text-base tracking-wider uppercase font-bold transition-all flex items-center justify-center gap-2.5 shadow-md"
            >
              <FaWhatsapp className="w-5 h-5 text-emerald-400" />
              <span>Pedir por WhatsApp VIP</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

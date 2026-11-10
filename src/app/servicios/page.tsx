import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, Zap, PiggyBank, Package, Warehouse, Building2, Banknote, Rocket } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Servicios de Mensajería y Logística Urbana en Mar del Plata',
  description: 'Conocé la cartera integral de envíos en moto en Mar del Plata: Express en franja de 3 hs, LowCost en el día, Mercado Envíos Flex y servicios corporativos.',
  alternates: { canonical: `${baseUrl}/servicios` },
  openGraph: {
    title: 'Servicios de Mensajería y Logística Urbana | Envíos DosRuedas',
    description: 'Soluciones de cadetería y distribución para particulares, comercios y empresas en Mar del Plata.',
    url: `${baseUrl}/servicios`,
  },
};

const SERVICES = [
  {
    href: '/servicios/envios-express',
    icon: Zap,
    title: 'Envíos Express',
    desc: 'Entrega en franja horaria acotada de 3 hs a coordinar con 2 hs de anticipación. Corte diario a las 15:00 hs.',
    badge: 'Desde $3.700',
    highlight: false,
    image: '/elementos/envios_express.webp',
  },
  {
    href: '/servicios/envios-lowcost',
    icon: PiggyBank,
    title: 'Envíos LowCost',
    desc: 'Reparto programado en el día entregando de 14:00 a 19:00 hs. Corte estricto a las 13:00 hs. La opción más económica.',
    badge: 'Desde $3.000',
    highlight: true,
    image: '/elementos/envios_lowcost.webp',
  },
  {
    href: '/servicios/enviosflex',
    icon: Package,
    title: 'Mercado Envíos Flex',
    desc: 'Entregas en el día para vendedores de Mercado Libre hasta las 20:00 hs. Corte de retiro a las 15:00 hs.',
    badge: 'Desde $4.500',
    highlight: false,
    image: '/elementos/envios_flex.webp',
  },
  {
    href: '/servicios/deposito-fulfillment',
    icon: Warehouse,
    title: 'Depósito & Fulfillment',
    desc: 'Almacenamiento seguro en Friuli 1972, armado de paquetes y despacho en primera ronda. DropOFF bonificado al 20%.',
    badge: 'Stock en Base',
    highlight: false,
  },
  {
    href: '/servicios/empresas-cuenta-corriente',
    icon: Building2,
    title: 'Empresas & Cuenta Corriente',
    desc: 'Facturación mensual o quincenal unificada, cadetería fija con remitos conformados para distribuidoras y firmas.',
    badge: 'Solución B2B',
    highlight: false,
  },
  {
    href: '/servicios/envios-contrareembolso',
    icon: Banknote,
    title: 'Cobro Contra Reembolso',
    desc: 'Cobramos tu venta en efectivo al entregar al comprador y te transferimos el dinero en 24 hs hábiles con comprobante.',
    badge: 'Cobranza Segura',
    highlight: false,
  },
  {
    href: '/servicios/plan-emprendedores',
    icon: Rocket,
    title: 'Plan Emprendedores',
    desc: 'Tarifas preferenciales por volumen mensual para marcas de indumentaria, cosmética y tiendas online locales.',
    badge: 'E-commerce MDQ',
    highlight: false,
    image: '/elementos/envios_emprendedores.webp',
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      {/* Hero */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Cartera Integral Logística
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            SERVICIOS DE MENSAJERÍA Y LOGÍSTICA URBANA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Soluciones a medida para cada tipo de entrega en Mar del Plata. Desde trámites urgentes en el día hasta logística integral con depósito y reparto de Mercado Libre.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`group p-1.5 md:p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  s.highlight
                    ? 'bg-brand-blue-500 border-2 border-brand-yellow-500 shadow-sm'
                    : 'bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-xs'
                }`}
              >
                <div className="bg-white rounded-xl p-6 sm:p-7 border border-brand-blue-100/40 h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 transition-colors">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="font-mono text-xs font-bold px-3 py-1 bg-brand-yellow-100 text-brand-blue-500 rounded-full border border-brand-yellow-200">
                        {s.badge}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-2 group-hover:text-brand-blue-400 transition-colors">
                      {s.title}
                    </h2>

                    {s.image && (
                      <div className="relative w-full h-32 my-3 rounded-lg overflow-hidden bg-brand-blue-50/70 border border-brand-blue-100/50">
                        <OptimizedImage
                          src={s.image}
                          alt={s.title}
                          fill
                          aboveTheFold={false}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center group-hover:scale-102 transition-transform duration-200"
                        />
                      </div>
                    )}

                    <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-50 flex items-center justify-between font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 group-hover:text-brand-blue-400">
                    <span>Ver detalle completo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Floating Quoting Banner with planifica graphic */}
        <div className="p-6 sm:p-8 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-white border border-brand-blue-200 shadow-xs">
              <OptimizedImage
                src="/elementos/planifica_transparent.webp"
                alt="Planificá tu cotización de envíos en moto Mar del Plata"
                fill
                aboveTheFold={false}
                sizes="64px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                ¿Querés cotizar un envío puntual ahora mismo?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 mt-1">
                Usá nuestro cotizador unificado para comparar tarifas Express y LowCost según la distancia en kilómetros.
              </p>
            </div>
          </div>
          <Link
            href="/cotizar"
            className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shrink-0 shadow-accent-sm transition-transform hover:scale-105"
          >
            Ir al Cotizador Online
          </Link>
        </div>
      </div>
    </main>
  );
}

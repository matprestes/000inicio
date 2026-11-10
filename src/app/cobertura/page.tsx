import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import InteractiveZoneMap from '@/components/cobertura/InteractiveZoneMap';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cobertura de Envíos en Mar del Plata',
  description: 'Conocé los 5 radios zonales de entrega en moto en Mar del Plata: Centro, Puerto, Norte, Oeste y zonas periféricas como Batán y Sierra de los Padres.',
  alternates: { canonical: `${baseUrl}/cobertura` },
  openGraph: {
    title: 'Cobertura de Envíos en Mar del Plata | Envíos DosRuedas',
    description: 'Radios urbanos y zonas de entrega habitual en Mar del Plata.',
    url: `${baseUrl}/cobertura`,
  },
};

export default function CoberturaPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      {/* Hero */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Alcance Territorial · Mar del Plata
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            COBERTURA DE ENVÍOS EN MAR DEL PLATA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Llegamos a cada rincón de la ciudad con cadetería propia y base fija en Friuli 1972. Conocé nuestros radios urbanos de entrega habitual y las condiciones para zonas periféricas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Base Operativa Highlight */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
          <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase">
                  Centro Neurálgico de Despacho
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
                  Base Central: Friuli 1972, Mar del Plata
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/80">
                  Punto de salida matutino y vespertino de cadetes hacia todos los cuadrantes de la ciudad.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200 hover:bg-brand-blue-500 hover:text-white font-subheading text-base font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors shrink-0"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Interactive Zone Map & Cards */}
        <InteractiveZoneMap />

        {/* Periferia Callout */}
        <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-md border border-brand-blue-400">
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand-yellow-500" />
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow-500">
                  Condiciones para Destinos de Periferia
                </h3>
              </div>
              <p className="font-sans text-sm text-brand-blue-50/90 max-w-2xl leading-relaxed">
                Los traslados hacia Batán, Sierra de los Padres, Camet Norte, Santa Clara o Chapadmalal superan el radio urbano automático de 10 km. Se cotizan a razón de $1.000 por kilómetro lineal de ruta o tarifa acordada previamente.
              </p>
            </div>

            <Link
              href="/cotizar"
              className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-accent-sm transition-transform hover:scale-105 shrink-0 inline-flex items-center gap-2"
            >
              COTIZAR RECORRIDO AHORA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import CotizadorHero from '@/components/cotizador/CotizadorHero';
import CotizadorUnificado from '@/components/cotizador/CotizadorUnificado';
import CotizadorRecargos from '@/components/cotizador/CotizadorRecargos';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cotizador Unificado de Envíos en Moto',
  description: 'Calculá el costo exacto de tu envío en Mar del Plata. Compará tarifas Express y LowCost según la distancia vial en asfalto y coordiná por WhatsApp.',
  alternates: { canonical: `${baseUrl}/cotizar` },
  openGraph: {
    title: 'Cotizador de Envíos en Mar del Plata | Envíos DosRuedas',
    description: 'Calculá al instante la tarifa de tu envío en moto en Mar del Plata.',
    url: `${baseUrl}/cotizar`,
  },
};

export default function CotizarPage() {
  return (
    <main className="flex flex-col flex-1 w-full bg-white text-brand-blue-500 pb-20">
      <CotizadorHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <CotizadorUnificado />
        <CotizadorRecargos />
      </div>
    </main>
  );
}

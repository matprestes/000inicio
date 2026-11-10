import type { Metadata } from 'next';
import LowCostHero from '@/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/components/servicios/lowcost/LowCostFeatures';
import LowCostBenefits from '@/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/components/servicios/lowcost/LowCostHowItWorks';
import LowCostPricing from '@/components/servicios/lowcost/LowCostPricing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos LowCost en el Día en Mar del Plata | Envíos DosRuedas',
  description: 'La tarifa más conveniente de Mar del Plata para envíos programados. Retiro y entrega en el día hasta las 19:00 hs. Corte estricto: 13:00 hs.',
  alternates: { canonical: `${baseUrl}/servicios/envios-lowcost` },
};

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500">
      <LowCostHero />
      <LowCostFeatures />
      <LowCostBenefits />
      <LowCostHowItWorks />
      <LowCostPricing />
    </main>
  );
}


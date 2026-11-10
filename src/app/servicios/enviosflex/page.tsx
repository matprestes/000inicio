import type { Metadata } from 'next';
import FlexHero from '@/components/servicios/flex/FlexHero';
import FlexFeatures from '@/components/servicios/flex/FlexFeatures';
import FlexHowItWorks from '@/components/servicios/flex/FlexHowItWorks';
import FlexPricing from '@/components/servicios/flex/FlexPricing';
import FlexBenefits from '@/components/servicios/flex/FlexBenefits';
import FlexRequirements from '@/components/servicios/flex/FlexRequirements';
import FlexFAQ from '@/components/servicios/flex/FlexFAQ';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mercado Envíos Flex en Mar del Plata',
  description: 'Entregá el mismo día a tus compradores de Mercado Libre en Mar del Plata. Corte de retiro a las 15:00 hs y entrega antes de las 20:00 hs.',
  alternates: { canonical: `${baseUrl}/servicios/enviosflex` },
};

export default function EnviosFlexPage() {
  return (
    <main className="flex flex-col flex-1 w-full bg-white text-brand-blue-500 overflow-x-hidden">
      <FlexHero />
      <FlexFeatures />
      <FlexHowItWorks />
      <FlexPricing />
      <FlexBenefits />
      <FlexRequirements />
      <FlexFAQ />
    </main>
  );
}

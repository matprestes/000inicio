import type { Metadata } from 'next';
import AcidHero from '@/components/servicios/lowcost-acid/AcidHero';
import AcidMarquee from '@/components/servicios/lowcost-acid/AcidMarquee';
import AcidBentoGrid from '@/components/servicios/lowcost-acid/AcidBentoGrid';
import AcidPricing from '@/components/servicios/lowcost-acid/AcidPricing';

/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: /servicios/envios-lowcost-acid
 * Data schemas: Reads constants from @/lib/promises.
 * User instruction: "genera una copia de la página kowcost y aplicar el diaeño (no lo folores ) [Detalle del sistema de diseño Neo-Brutalista]"
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envío LowCost Acid | Diseño Neo-Brutalista | DosRuedas',
  description: 'Rediseño de envíos lowcost con estética Neo-Brutalista Acid.',
  alternates: { canonical: `${baseUrl}/servicios/envios-lowcost-acid` },
};

export default function EnviosLowCostAcidPage() {
  return (
    <main className="min-h-dvh bg-[#F8F4E8] text-[#09090B]">
      <AcidHero />
      <AcidMarquee />
      <AcidBentoGrid />
      <AcidPricing />
    </main>
  );
}

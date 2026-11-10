import type { Metadata } from 'next';
import AboutHero from '@/components/nosotros/sobre-nosotros/AboutHero';
import AboutMissionVision from '@/components/nosotros/sobre-nosotros/AboutMissionVision';
import AboutAdvantages from '@/components/nosotros/sobre-nosotros/AboutAdvantages';
import AboutTimeline from '@/components/nosotros/sobre-nosotros/AboutTimeline';
import AboutTeam from '@/components/nosotros/sobre-nosotros/AboutTeam';
import AboutValues from '@/components/nosotros/sobre-nosotros/AboutValues';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Sobre Nosotros: Mensajería Real en Mar del Plata',
  description: 'Conocé la historia y valores de Envíos DosRuedas. Logística en moto marplatense con flota 100% propia, base en Friuli 1972 y sin tercerizaciones.',
  alternates: { canonical: `${baseUrl}/nosotros/sobre-nosotros` },
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500">
      <AboutHero />
      <AboutMissionVision />
      <AboutAdvantages />
      <AboutTimeline />
      <AboutTeam />
      <AboutValues />
    </main>
  );
}


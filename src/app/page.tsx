import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroAnimado from '@/components/home/HeroAnimado';
import SegmentosHome from '@/components/home/SegmentosHome';
import SocialProofSection from '@/components/home/SocialProofSection';

// Dynamic code-splitting for heavy below-the-fold interactive components
const ServicesOverview = dynamic(() => import('@/components/home/ServicesOverview'), {
  loading: () => (
    <div
      aria-label="Cargando resumen de servicios"
      className="w-full min-h-[620px] bg-brand-blue-500 flex items-center justify-center py-20"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-brand-yellow-500 border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
          Cargando servicios y tarifas...
        </span>
      </div>
    </div>
  ),
});

const EmprendedoresHome = dynamic(() => import('@/components/home/EmprendedoresHome'), {
  loading: () => (
    <div
      aria-label="Cargando sección de emprendedores"
      className="w-full min-h-[460px] bg-white flex items-center justify-center py-16"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-brand-blue-500 border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-brand-blue-500/60 uppercase tracking-widest">
          Cargando planes emprendedores...
        </span>
      </div>
    </div>
  ),
});

const LogisticaHomeSection = dynamic(() => import('@/components/home/LogisticaHomeSection'), {
  loading: () => (
    <div
      aria-label="Cargando sección de logística digital"
      className="w-full min-h-[460px] bg-white flex items-center justify-center py-16"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-brand-blue-500 border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-brand-blue-500/60 uppercase tracking-widest">
          Cargando sistema logístico...
        </span>
      </div>
    </div>
  ),
});

const MarDeliveryHomeSection = dynamic(() => import('@/components/home/MarDeliveryHomeSection'), {
  loading: () => (
    <div
      aria-label="Cargando sección de MarDelivery"
      className="w-full min-h-[460px] bg-[#031811] flex items-center justify-center py-16 text-white"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-[#2ECC85] border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-[#2ECC85]/80 uppercase tracking-widest">
          Cargando soluciones MarDelivery...
        </span>
      </div>
    </div>
  ),
});
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
  description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.',
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
    url: `${baseUrl}/`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function HomePage() {
  return (
    <div id="home-page-container" className="bg-white text-brand-blue-500 overflow-x-hidden">
      <HeroAnimado />

      <SegmentosHome />
      <ServicesOverview />
      <LogisticaHomeSection />
      <MarDeliveryHomeSection />
      <EmprendedoresHome />
      <SocialProofSection />
    </div>
  );
}

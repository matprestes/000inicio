import type { Metadata } from 'next';
import NetworksHero from '@/components/nosotros/nuestras-redes/NetworksHero';
import NetworksChannels from '@/components/nosotros/nuestras-redes/NetworksChannels';
import RecentPosts from '@/components/nosotros/nuestras-redes/RecentPosts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Nuestras Redes Sociales Oficiales | Envíos DosRuedas',
  description: 'Conectate con Envíos DosRuedas a través de nuestros canales oficiales en WhatsApp, Instagram y Facebook. Novedades y avisos operativos en Mar del Plata.',
  alternates: { canonical: `${baseUrl}/nosotros/nuestras-redes` },
};

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500">
      <NetworksHero />
      <NetworksChannels />
      <RecentPosts />
    </main>
  );
}


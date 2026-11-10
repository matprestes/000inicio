/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: src/app/servicios/envios-express-luxury/page.tsx
 * Data schemas: Express promises, pricing, and Dark Luxury design invariants (#121212 background, #e11d48 crimson accent, #ffffff text).
 * User instruction: "Copia el contenido y la lógica de src/app/servicios/envios-express/page.tsx para crear una nueva página en src/app/servicios/envios-express-luxury/page.tsx aplicando el sistema de diseño Dark Luxury."
 */

import type { Metadata } from 'next';
import { SUPPORT_PHONE } from '@/lib/promises';
import { EXPRESS_TIERS } from '@/lib/pricing';
import ExpressLuxuryClientPage from '@/components/servicios/express-luxury/ExpressLuxuryClientPage';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';
const basePrice = EXPRESS_TIERS[0]?.price ?? 3700;

export const metadata: Metadata = {
  title: 'Envíos Express Luxury en Mar del Plata (Franja de 3 hs) | Envíos DosRuedas',
  description:
    'Servicio ultra-prioritario de mensajería urgente en moto con estética Dark Luxury en Mar del Plata. Franja de 3 hs, trazabilidad VIP y atención personalizada.',
  alternates: { canonical: `${baseUrl}/servicios/envios-express-luxury` },
  openGraph: {
    title: 'Envíos Express Luxury en Mar del Plata | Envíos DosRuedas',
    description:
      'Logística de alta gama con entrega garantizada en franja horaria de 3 hs. Estándar Dark Luxury.',
    url: `${baseUrl}/servicios/envios-express-luxury`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos Express Luxury | Envíos DosRuedas',
    description: 'Cadetería en moto con entrega prioritaria en franja de 3 hs y diseño Dark Luxury.',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function EnviosExpressLuxuryPage() {
  return <ExpressLuxuryClientPage />;
}

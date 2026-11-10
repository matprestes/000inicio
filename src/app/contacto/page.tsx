import React from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contacto/ContactHero';
import ContactChannels from '@/components/contacto/ContactChannels';
import ContactForm from '@/components/contacto/ContactForm';
import ContactInfo from '@/components/contacto/ContactInfo';
import ConversionBanner from '@/components/contacto/ConversionBanner';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Contacto y Base Central',
  description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp y atención personalizada.',
  alternates: { canonical: `${baseUrl}/contacto` },
  openGraph: {
    title: 'Contacto y Base Central | Envíos DosRuedas',
    description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata.',
    url: `${baseUrl}/contacto`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto - Envíos DosRuedas',
  description: 'Contacto oficial y cotización inmediata de Envíos DosRuedas en Mar del Plata.',
  url: `${baseUrl}/contacto`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    email: 'matiascejas@enviosdosruedas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -38.0055,
      longitude: -57.5426,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '15:00',
      },
    ],
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-dvh bg-brand-blue-50/30 text-brand-blue-500 relative overflow-hidden font-sans pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-12 sm:space-y-16">
        <ContactChannels />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 h-full">
            <ContactForm />
          </div>
          <div className="lg:col-span-7 h-full">
            <ContactInfo />
          </div>
        </div>
        <ConversionBanner />
      </div>
    </div>
  );
}

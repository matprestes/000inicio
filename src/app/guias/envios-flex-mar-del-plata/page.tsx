import type { Metadata } from 'next';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Guía Definitiva: Cómo Configurar Mercado Envíos Flex en Mar del Plata',
  description: 'Aprendé a activar Mercado Envíos Flex en Mar del Plata sin perder dinero en envíos de periferia ni arriesgar tu reputación verde en Mercado Libre.',
  alternates: { canonical: `${baseUrl}/guias/envios-flex-mar-del-plata` },
};

export default function GuiaFlexMarDelPlataPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20 font-sans">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Guía de Autoridad E-commerce
          </span>
          <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            GUÍA DEFINITIVA: CÓMO CONFIGURAR MERCADO ENVÍOS FLEX EN MAR DEL PLATA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Paso a paso para activar las entregas en el día, proteger tu reputación verde y maximizar la rentabilidad de tus ventas locales.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Intro with Visual Illustration */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
          <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-brand-blue-100/60 bg-brand-blue-50 mb-4">
              <OptimizedImage
                src="/elementos/envios_flex.webp"
                alt="Mercado Envíos Flex y logística de última milla Mar del Plata"
                fill
                sizes="(max-width: 896px) 100vw, 800px"
                className="object-cover object-center"
                aboveTheFold={false}
              />
            </div>

            <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              ¿Por qué Flex es clave para vendedores de Mar del Plata?
            </h2>
            <p className="text-sm text-brand-blue-500/85 leading-relaxed">
              En Mercado Libre, los compradores filtran por <strong>&ldquo;Llega hoy&rdquo;</strong> o buscan el rayo de Flex. Si vendés en Mar del Plata y solo ofrecés Correo Argentino u OCA a través de Mercado Envíos tradicional, tus productos tardan 2 a 3 días hábiles en llegar aunque el comprador esté a 15 cuadras de tu local. Al activar Flex, tus publicaciones escalan en el algoritmo de búsqueda y aumentás tu conversión de venta hasta un 40%.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
            Los 4 Pasos Críticos para Operar Flex con Éxito
          </h2>

          <div className="p-6 rounded-2xl bg-white border border-brand-blue-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-bold w-8 h-8 rounded-full bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                Configurá el horario de corte a las 15:00 hs
              </h3>
            </div>
            <p className="text-sm text-brand-blue-500/80 leading-relaxed pl-11">
              En el panel de configuración de Envíos de Mercado Libre, establecé el horario límite de venta en el mismo día a las 15:00 hs. Esto te deja margen para embalar con tranquilidad y que el cadete de Envíos DosRuedas retire a las 15:00 hs exactas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-blue-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-bold w-8 h-8 rounded-full bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                Zonificación inteligente en Mar del Plata
              </h3>
            </div>
            <p className="text-sm text-brand-blue-500/80 leading-relaxed pl-11">
              Mercado Libre divide la ciudad en zonas tarifarias. Tené cuidado al habilitar zonas periféricas como Chapadmalal o Sierra de los Padres si no tenés acordada una tarifa plana. Con Envíos DosRuedas podés optar por nuestro <strong>Nivel 3 con Tarifa Plana de $4.500</strong> unificada a toda la ciudad para mantener costos predecibles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-blue-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-bold w-8 h-8 rounded-full bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                Escaneo y rotulado con código QR de Flex
              </h3>
            </div>
            <p className="text-sm text-brand-blue-500/80 leading-relaxed pl-11">
              Imprimí las etiquetas térmicas o autoadhesivas estándar de Mercado Envíos. Cada paquete debe tener su código QR visible para que el cadete lo escanee con la app oficial de conductores al momento de la entrega al comprador.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-blue-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-bold w-8 h-8 rounded-full bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0">
                4
              </span>
              <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                Protocolo estricto ante compradores ausentes
              </h3>
            </div>
            <p className="text-sm text-brand-blue-500/80 leading-relaxed pl-11">
              Si el comprador no responde al timbre, nuestro cadete se comunica telefónicamente al número cargado en la venta y documenta la visita con foto de la fachada. Esto evita reclamos por &ldquo;paquete no entregado&rdquo; y te permite coordinar la reentrega al día siguiente.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-md border border-brand-blue-400">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                ¿Querés integrar Flex con cadetería de confianza?
              </h3>
              <p className="font-sans text-sm text-brand-blue-50/90 mt-1">
                Te asesoramos sin costo para configurar tus zonas y comenzar a despachar en el día.
              </p>
            </div>
            <a
              href="https://wa.me/5492236602699?text=Hola!%20Le%C3%AD%20la%20gu%C3%ADa%20Flex%20y%20quiero%20integrar%20mi%20tienda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-accent-sm transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-blue-500" />
              HABLAR CON UN ASESOR FLEX
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}

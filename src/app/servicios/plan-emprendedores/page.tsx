import type { Metadata } from 'next';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Rocket, Percent, CheckCircle2, Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Plan Emprendedores: Crecé con Envíos Seguros en Mar del Plata',
  description: 'Tarifas preferenciales por volumen mensual para tiendas online y showrooms en Mar del Plata. Envíos programados, Flex y cobro contra entrega.',
  alternates: { canonical: `${baseUrl}/servicios/plan-emprendedores` },
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            E-commerce Local MDQ
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            PLAN EMPRENDEDORES: CRECÉ CON ENVÍOS SEGUROS
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Tarifas preferenciales por volumen mensual de entregas para que tus costos de envío sean competitivos y tus clientes reciban en el día.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
              <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  El aliado logístico de las marcas independientes de Mar del Plata
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/85 leading-relaxed">
                  Sabemos el esfuerzo que implica cada venta en redes sociales o tu tienda online. Un envío demorado o un cadete descuidado arruina la experiencia de compra. Con el Plan Emprendedores te brindamos cadetería profesional, seguimiento personalizado y tarifas escalonadas según tu volumen mensual.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Percent className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Descuento progresivo por cantidad</strong>
                      <span className="text-xs text-brand-blue-500/80">A partir de 15 envíos mensuales accedés a valores bonificados en el servicio LowCost y Flex.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Cambios de talle y devoluciones</strong>
                      <span className="text-xs text-brand-blue-500/80">Coordinamos el retiro de la prenda o producto y la entrega del nuevo talle en el mismo viaje con tarifa bonificada.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Rocket className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Soporte por WhatsApp directo</strong>
                      <span className="text-xs text-brand-blue-500/80">Canal exclusivo con un coordinador que conoce tu marca y a tus clientes habituales.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-brand-blue-100 shadow-sm bg-brand-blue-50">
              <OptimizedImage
                src="/elementos/envios_emprendedores.webp"
                alt="Envíos para emprendedores y showrooms en Mar del Plata"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                aboveTheFold={false}
              />
            </div>

            <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-lg border border-brand-blue-400">
              <div className="p-6 sm:p-8 space-y-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow-500">
                  Activá tu Plan Emprendedor
                </h3>
                <p className="font-sans text-sm text-brand-blue-50/90 leading-relaxed">
                  Escribinos contándonos qué vendés, tu zona en Mar del Plata y tu promedio semanal de ventas para armarte una propuesta a medida.
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5492236602699?text=Hola!%20Quiero%20conocer%20el%20Plan%20Emprendedores%20para%20mi%20tienda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm text-center transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-500" />
                    SOLICITAR PLAN EMPRENDEDOR
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

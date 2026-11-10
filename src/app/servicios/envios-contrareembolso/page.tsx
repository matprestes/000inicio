import type { Metadata } from 'next';
import { Banknote, ShieldCheck, Clock, Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos con Cobro Contra Reembolso en Mar del Plata',
  description: 'Entregamos tu producto en Mar del Plata y cobramos en efectivo en mano al comprador. Rendición documentada y transferencia en 24 hs hábiles.',
  alternates: { canonical: `${baseUrl}/servicios/envios-contrareembolso` },
};

export default function EnviosContraReembolsoPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Cobranza en Mano
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            ENVÍOS CON COBRO CONTRA REEMBOLSO
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Vendé con confianza a clientes que prefieren pagar en mano al recibir el producto. Cobramos en efectivo y te transferimos el dinero en 24 hs hábiles.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
              <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  Aumentá tus conversiones ofreciendo pago contra entrega
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/85 leading-relaxed">
                  En Mar del Plata muchos compradores todavía desconfían de transferir antes de ver la mercadería. Al ofrecer cobro contra reembolso, cerrás ventas que de otro modo se caerían. Nuestros cadetes reciben el dinero exacto y lo custodian hasta su liquidación.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Banknote className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Cobranza en efectivo en mano</strong>
                      <span className="text-xs text-brand-blue-500/80">El paquete solo se entrega una vez verificado el pago del monto estipulado.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Clock className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Liquidación en 24 hs hábiles</strong>
                      <span className="text-xs text-brand-blue-500/80">Te transferimos por CBU/alias con comprobante o podés retirar el efectivo en base.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <ShieldCheck className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Rendición transparente</strong>
                      <span className="text-xs text-brand-blue-500/80">Comprobante firmado y notificación inmediata por WhatsApp en cuanto se concreta la entrega.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-lg border border-brand-blue-400">
              <div className="p-6 sm:p-8 space-y-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow-500">
                  Condiciones del Servicio
                </h3>
                <p className="font-sans text-sm text-brand-blue-50/90 leading-relaxed">
                  Comisión por gestión de cobranza y seguro de traslado accesible. Aplicable en todos los radios urbanos de Mar del Plata.
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5492236602699?text=Hola!%20Quiero%20coordinar%20un%20Env%C3%ADo%20con%20Cobro%20Contra%20Reembolso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm text-center transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-500" />
                    COORDINAR CONTRA REEMBOLSO
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

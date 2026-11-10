import type { Metadata } from 'next';
import { Warehouse, Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Depósito & Fulfillment en Mar del Plata',
  description: 'Guardá tu stock en nuestra base de Friuli 1972, Mar del Plata. Armamos tus pedidos y los despachamos en la primera ronda. DropOFF con 20% de bonificación.',
  alternates: { canonical: `${baseUrl}/servicios/deposito-fulfillment` },
};

export default function DepositoFulfillmentPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Almacén & Preparación
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            DEPÓSITO & FULFILLMENT EN MAR DEL PLATA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Guardá tu stock en nuestra base operativa. Cuando vendés por tu tienda o redes, nosotros armamos el paquete y lo despachamos en la primera ronda.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
              <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  Operá como una gran tienda sin tener depósito propio
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/85 leading-relaxed">
                  Muchos emprendedores de Mar del Plata pierden horas en su casa esperando que pase el cadete o embalando pedidos a último momento. Con nuestro centro en Friuli 1972, delegás el stock y el empaque en manos especializadas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100/50 space-y-2">
                    <span className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 block">
                      Recepción de Mercadería
                    </span>
                    <p className="text-xs text-brand-blue-500/80">Recibimos tus bultos mayoristas desde Buenos Aires o tus proveedores y los inventariamos.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100/50 space-y-2">
                    <span className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 block">
                      Armado de Paquete (Pick & Pack)
                    </span>
                    <p className="text-xs text-brand-blue-500/80">Nos pasás la orden por WhatsApp o planilla y preparamos el pedido con tu packaging.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100/50 space-y-2">
                    <span className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 block">
                      Despacho en Primera Ronda
                    </span>
                    <p className="text-xs text-brand-blue-500/80">Al estar ya en base, tu encomienda sale en la primera salida del día sin demoras.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-yellow-50 border border-brand-yellow-200 space-y-2">
                    <span className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 block">
                      DropOFF -20% de Bonificación
                    </span>
                    <p className="text-xs text-brand-blue-500/80">Si acercás tus paquetes a Friuli 1972, te bonificamos un 20% en el costo del viaje.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-lg border border-brand-blue-400">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white text-brand-blue-500 flex items-center justify-center">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow-500">
                  Ubicación de la Base: Friuli 1972
                </h3>
                <p className="font-sans text-sm text-brand-blue-50/90 leading-relaxed">
                  Centro logístico accesible en Mar del Plata. Seguridad 24 hs, control de inventario y retiro programado de devoluciones o cambios de talle.
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5492236602699?text=Hola!%20Quiero%20consultar%20por%20el%20servicio%20de%20Dep%C3%B3sito%20y%20Fulfillment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm text-center transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-500" />
                    CONSULTAR PLAN DE DEPÓSITO
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

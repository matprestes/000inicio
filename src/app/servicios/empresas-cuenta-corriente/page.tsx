import type { Metadata } from 'next';
import { Building2, FileText, CheckCircle2, AlertCircle, Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Logística Corporativa y Cuenta Corriente en Mar del Plata',
  description: 'Centralizá los envíos y trámites de tu empresa en Mar del Plata con facturación mensual unificada, remitos conformados y cadetes de confianza.',
  alternates: { canonical: `${baseUrl}/servicios/empresas-cuenta-corriente` },
};

export default function EmpresasCuentaCorrientePage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Solución Corporativa B2B
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            LOGÍSTICA CORPORATIVA Y CUENTA CORRIENTE
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Centralizá los envíos de tu empresa con facturación quincenal o mensual unificada, remitos conformados y cadetes asignados.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
              <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  Eficiencia administrativa sin pagos en efectivo por cada salida
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/85 leading-relaxed">
                  Para distribuidoras, laboratorios, repuesteras, inmobiliarias y estudios contables o jurídicos de Mar del Plata, tener que disponer de efectivo para cada viaje de cadetería es un dolor de cabeza. Con la Cuenta Corriente de Envíos DosRuedas, ordenás tus gastos con liquidación mensual clara.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <FileText className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Resumen detallado de viajes</strong>
                      <span className="text-xs text-brand-blue-500/80">Cada viaje se registra con fecha, hora, punto de retiro, destino, solicitante y remito firmado.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Building2 className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Cadetes de confianza asignados</strong>
                      <span className="text-xs text-brand-blue-500/80">Flota propia con personal identificado que conoce la dinámica interna de tu firma.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Prioridad de despacho</strong>
                      <span className="text-xs text-brand-blue-500/80">Canal de comunicación VIP directo con el coordinador de logística en Mar del Plata.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-xs text-brand-blue-500/80 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
              <span>Aclaración Impositiva: Operamos bajo régimen Monotributo emitiendo comprobantes oficiales legales. No emitimos Factura A.</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-lg border border-brand-blue-400">
              <div className="p-6 sm:p-8 space-y-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow-500">
                  Requisitos de Apertura
                </h3>
                <p className="font-sans text-sm text-brand-blue-50/90 leading-relaxed">
                  Para dar de alta una cuenta corriente solicitamos constancia de CUIT comercial, dirección fiscal y estimación de volumen quincenal o mensual.
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5492236602699?text=Hola!%20Quiero%20solicitar%20la%20apertura%20de%20Cuenta%20Corriente%20para%20mi%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm text-center transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-500" />
                    SOLICITAR APERTURA DE CUENTA
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

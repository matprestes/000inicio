import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Términos y Condiciones del Servicio | Envíos DosRuedas',
  description: 'Condiciones de contratación, límites de carga, mercadería admitida y protocolos operativos de Envíos DosRuedas en Mar del Plata.',
  alternates: { canonical: `${baseUrl}/terminos-y-condiciones` },
};

export default function TerminosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10 text-center sm:text-left">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue-400 bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
          Marco Legal Vigente · 2026
        </span>
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-brand-blue-500 mt-3 mb-2">
          TÉRMINOS Y CONDICIONES DEL SERVICIO
        </h1>
        <p className="font-sans text-sm text-brand-blue-500/80">
          Envíos DosRuedas · Base Operativa Friuli 1972, Mar del Plata, Buenos Aires, Argentina.
        </p>
      </div>

      <div className="space-y-8 text-brand-blue-500/90 leading-relaxed text-sm bg-white p-6 sm:p-10 rounded-2xl border border-brand-blue-100 shadow-xs">
        
        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            1. Objeto y Prestación del Servicio
          </h2>
          <p>
            Envíos DosRuedas presta servicios de logística urbana, cadetería y distribución de última milla para particulares, comercios y empresas dentro del partido de General Pueyrredón (Mar del Plata y zonas aledañas), empleando flota propia de motovehículos conducidos por personal habilitado y con cobertura de seguros de accidentes personales.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            2. Límites Físicos, Peso y Dimensiones del Bulto Estándar
          </h2>
          <p>
            La tarifa base regular de mensajería en moto contempla exclusivamente paquetes de hasta <strong>5 kilogramos de peso</strong> y dimensiones que no excedan los <strong>40 × 40 × 30 centímetros</strong>. Todo bulto que supere estas medidas o requiera sujeción especial en portaequipaje devengará un recargo por bulto extra o sobredimensionado a partir de $1.800 previa confirmación operativa.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            3. Mercadería Prohibida
          </h2>
          <p>
            Queda estrictamente prohibido el transporte de:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li>Sustancias estupefacientes, psicotrópicas o medicamentos sin receta médica oficial.</li>
            <li>Materiales inflamables, corrosivos, explosivos, ácidos o pirotecnia.</li>
            <li>Dinero en efectivo en montos elevados no declarados ni asegurados, metales preciosos o títulos al portador.</li>
            <li>Armas de fuego, municiones, réplicas o cualquier bien de tráfico ilegal penado por la legislación de la República Argentina.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            4. Tolerancia de Espera y Ausencia del Destinatario
          </h2>
          <p>
            El conductor aguardará hasta un máximo de <strong>10 minutos sin cargo</strong> en el domicilio de retiro o entrega. A partir del minuto 11 se computarán bloques de espera de 10 minutos a razón de $2.200 por bloque. En caso de ausencia definitiva del destinatario tras contactarlo telefónicamente, el paquete regresará a la base de Friuli 1972 o al punto de origen, devengando el cobro del 100% del viaje y una tarifa equivalente por el reintento de entrega.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            5. Condiciones Climáticas (Recargo por Lluvia)
          </h2>
          <p>
            En jornadas de lluvia o asfalto mojado rige un recargo del 30% sobre la tarifa base (y hasta un 50% en servicios inmediatos Express o LowCost) por resguardo de la seguridad vial de los conductores. Las ventanas horarias pueden extenderse prudentemente para salvaguardar la integridad de las personas y la carga.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            6. Facturación y Régimen Fiscal
          </h2>
          <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-brand-blue-500/90 font-medium">
              Envíos DosRuedas opera bajo el Régimen Simplificado para Pequeños Contribuyentes (Monotributo). Se emiten comprobantes oficiales tipo C para consumidor final o cómputo de gastos. <strong>Bajo ninguna circunstancia se emite Factura A.</strong>
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

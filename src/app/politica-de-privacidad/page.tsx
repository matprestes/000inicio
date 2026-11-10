import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Envíos DosRuedas',
  description: 'Tratamiento y protección de datos personales de usuarios y clientes de Envíos DosRuedas en Mar del Plata conforme a la Ley 25.326.',
  alternates: { canonical: `${baseUrl}/politica-de-privacidad` },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10 text-center sm:text-left">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue-400 bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
          Protección de Datos Personales
        </span>
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-brand-blue-500 mt-3 mb-2">
          POLÍTICA DE PRIVACIDAD
        </h1>
        <p className="font-sans text-sm text-brand-blue-500/80">
          En cumplimiento de la Ley Nacional de Protección de Datos Personales N° 25.326 de la República Argentina.
        </p>
      </div>

      <div className="space-y-8 text-brand-blue-500/90 leading-relaxed text-sm bg-white p-6 sm:p-10 rounded-2xl border border-brand-blue-100 shadow-xs">
        
        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            1. Recolección de Datos Operativos
          </h2>
          <p>
            Envíos DosRuedas solicita y almacena exclusivamente los datos indispensables para coordinar y concretar la entrega de paquetes: nombre o razón social del remitente y destinatario, teléfono de contacto y domicilios exactos de retiro y entrega en la ciudad de Mar del Plata.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            2. Finalidad Exclusiva
          </h2>
          <p>
            Los datos recabados son utilizados exclusivamente con fines de gestión logística, contacto operativo en caso de no hallar el domicilio, y emisión de los comprobantes fiscales correspondientes. En ningún caso comercializamos, alquilamos ni cedemos bases de datos de clientes a terceros ni plataformas de publicidad externa.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            3. Seguridad y Confidencialidad
          </h2>
          <p>
            Adoptamos medidas técnicas y organizativas razonables para salvaguardar la información frente a pérdidas, accesos no autorizados o divulgación indebida. Solo el personal de operaciones y los cadetes asignados al viaje tienen acceso a la dirección y teléfono para la coordinación del reparto.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500">
            4. Derechos de Acceso, Rectificación y Supresión
          </h2>
          <p>
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso, actualización o supresión de sus datos de forma gratuita enviando un correo electrónico a <strong>matiascejas@enviosdosruedas.com</strong> o mediante nota en nuestra base de Friuli 1972, Mar del Plata.
          </p>
        </section>

      </div>
    </main>
  );
}

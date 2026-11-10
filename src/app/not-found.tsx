import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function NotFound() {
  return (
    <main className="min-h-[80dvh] flex flex-col items-center justify-center px-4 text-center bg-white">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-blue-500 font-bold bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
          Error 404
        </span>
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-brand-blue-500">
          Página no encontrada
        </h1>
        <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed">
          La ruta que buscás no existe o fue reubicada. Podés volver al inicio o cotizar tu envío.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <CTANestedPill href="/" variant="primary" size="default">
            Volver al inicio
          </CTANestedPill>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 hover:underline px-4 py-2.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Ir a contacto</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

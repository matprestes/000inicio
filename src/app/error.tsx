'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowLeft } from 'lucide-react';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error internally if needed
  }, [error]);

  return (
    <main className="min-h-[75dvh] flex flex-col items-center justify-center px-4 text-center bg-brand-white">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-blue-500 font-bold bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
          Error en la aplicación
        </span>
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-brand-blue-500">
          Algo no salió bien
        </h1>
        <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed">
          Ocurrió un problema temporal al procesar la solicitud. Podés volver a intentarlo o regresar al inicio.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <CTANestedPill onClick={() => reset()} variant="primary" size="default">
            <RefreshCw className="w-3.5 h-3.5 mr-2" />
            Reintentar
          </CTANestedPill>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 hover:underline px-4 py-2.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

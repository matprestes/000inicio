'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
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
    <body className="min-h-screen bg-[#FFFFFF] text-[#0950F6] flex flex-col items-center justify-center p-6 text-center font-sans antialiased">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0950F6]/10 text-[#0950F6] text-xs font-mono font-bold tracking-wider uppercase">
          Sistema Envíos DosRuedas
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0950F6]">
          Error en la aplicación
        </h1>
        <p className="text-sm text-[#0950F6]/80 leading-relaxed">
          Se produjo un error no controlado en la carga inicial. Intentá refrescar o contactar a nuestro equipo de soporte.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            type="button"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-[#FFEC01] text-[#0950F6] shadow-[0_2px_8px_rgba(255,236,1,0.35)] hover:brightness-105 transition-all"
          >
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-[#0950F6] border border-[#0950F6]/20 hover:bg-[#0950F6]/5 transition-all"
          >
            Ir a la portada
          </Link>
        </div>
      </div>
    </body>
  );
}

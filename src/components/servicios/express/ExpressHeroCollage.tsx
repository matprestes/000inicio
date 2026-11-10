'use client';

import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import { EXPRESS_CUTOFF_TIME } from '@/lib/promises';

/**
 * Collage del hero Express mejorado e integrado con la estructura visual solicitada.
 */
export default function ExpressHeroCollage({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  const shown = inView || Boolean(reduceMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-in={shown ? 'true' : 'false'}
      className={cn('relative w-full h-[26rem] sm:h-[30rem] lg:h-[38rem] z-10 group', className)}
    >
      {/* Tile Moto */}
      <div className="absolute left-0 top-0 w-[64%] aspect-560/262 overflow-hidden rounded-xl bg-brand-blue-50 lg:left-[24%] lg:top-[3%] lg:w-[52%] -rotate-[2deg] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-400">
        <OptimizedImage
          src="/elementos/envios_express.webp"
          alt="Cadete Express en moto Envíos DosRuedas"
          fill
          aboveTheFold={true}
          sizes="(min-width: 1024px) 400px, 64vw"
          className="object-cover object-center"
        />
      </div>

      {/* Tile Rider */}
      <div className="absolute right-0 top-[7.5rem] lg:top-[38%] w-[54%] lg:w-[44%] aspect-[1408/768] isolate overflow-hidden rounded-2xl bg-brand-blue-400 rotate-[3deg] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        <OptimizedImage
          src="/express-hero-inline.png"
          alt="Repartidor de Envíos DosRuedas"
          fill
          aboveTheFold={false}
          sizes="(min-width: 1024px) 360px, 54vw"
          className="object-cover grayscale contrast-[1.05] mix-blend-screen"
        />
      </div>

      {/* Tile Word */}
      <div className="absolute left-[2%] top-[15rem] lg:left-[24%] lg:top-[60%] w-[46%] lg:w-[32%] h-[6.5rem] lg:h-[11.5rem] rounded-md bg-brand-blue-400 text-white flex flex-col items-center justify-center font-display text-[1.65rem] lg:text-[2.65rem] leading-[0.85] uppercase -rotate-[3deg] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
        <span>Servicio</span>
        <span>Express</span>
      </div>

      {/* Tile Desde */}
      <div className="hidden lg:flex absolute left-[58%] top-[80%] h-[5.25rem] w-[22%] rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-[2.5rem] items-center justify-center uppercase rotate-[4deg] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
        <span>Desde</span>
      </div>

      {/* Tile Sticker */}
      <div className="absolute right-[4%] lg:right-[6%] top-[2.5rem] lg:top-[10%] bg-brand-yellow-500 text-brand-blue-500 px-4 py-2.5 rounded-full font-subheading text-lg uppercase tracking-[0.08em] rotate-[4deg] shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
        <span>Corte {EXPRESS_CUTOFF_TIME}</span>
      </div>

      {/* Tile Note */}
      <div className="absolute right-[2%] lg:left-[30%] lg:right-auto top-[19rem] lg:top-[58%] bg-white text-brand-blue-500 px-3 py-2 rounded-md font-mono text-xs tracking-wider rotate-[1deg] shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
        <span>Retiro A · Entrega B</span>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Home, Calculator, MessageCircle, Truck } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_URL = buildWhatsAppUrl({
  message: 'Hola Envíos DosRuedas! Quiero consultar por un envío en Mar del Plata.',
  source: 'mobile_bottom_nav',
});

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isCotizarActive = pathname?.startsWith('/cotizar');
  const isServiciosActive = pathname?.startsWith('/servicios');

  const handleWhatsAppClick = () => {
    trackAnalytics.whatsappClick('mobile_bottom_nav', 'WhatsApp');
  };

  return (
    <nav
      aria-label="Navegación inferior móvil"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 dark:bg-[#002855]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] transition-all select-none"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center h-16 px-1">
        {/* 1. HOME */}
        <Link
          href="/"
          aria-label="Ir al inicio"
          aria-current={isHomeActive ? 'page' : undefined}
          className="relative flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors group"
        >
          <motion.div
            whileTap={{ scale: 0.88 }}
            className={`relative flex items-center justify-center p-1 rounded-full transition-colors ${
              isHomeActive
                ? 'text-brand-blue-500 bg-brand-blue-50'
                : 'text-brand-blue-500/70 group-hover:text-brand-blue-500'
            }`}
          >
            <Home className="w-5 h-5 stroke-[2.2]" />
            {isHomeActive && (
              <motion.span
                layoutId="bottom-nav-indicator"
                className="absolute -top-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue-500"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
          </motion.div>
          <span
            className={`text-[11px] font-sans font-medium tracking-tight mt-0.5 ${
              isHomeActive
                ? 'text-brand-blue-500 font-bold'
                : 'text-brand-blue-500/70 group-hover:text-brand-blue-500'
            }`}
          >
            Home
          </span>
        </Link>

        {/* 2. COTIZAR (Hero Action Pill) */}
        <Link
          href="/cotizar"
          aria-label="Cotizar envío en Mar del Plata"
          aria-current={isCotizarActive ? 'page' : undefined}
          className="relative flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors group"
        >
          <motion.div
            whileTap={{ scale: 0.88 }}
            className={`relative flex items-center justify-center px-3 py-1 rounded-full transition-all ${
              isCotizarActive
                ? 'bg-brand-yellow-500 text-brand-blue-500 shadow-md shadow-brand-yellow-500/25 ring-2 ring-brand-blue-500/20'
                : 'bg-brand-yellow-500/20 text-brand-blue-500 group-hover:bg-brand-yellow-500 text-brand-blue-500'
            }`}
          >
            <Calculator className="w-5 h-5 stroke-[2.4]" />
          </motion.div>
          <span
            className={`text-[11px] font-sans font-semibold tracking-tight mt-0.5 ${
              isCotizarActive
                ? 'text-brand-blue-500 font-bold'
                : 'text-brand-blue-500/70 group-hover:text-brand-blue-500'
            }`}
          >
            Cotizar
          </span>
        </Link>

        {/* 3. WHATSAPP */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          aria-label="Contactar por WhatsApp directo con base central"
          className="relative flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors group"
        >
          <motion.div
            whileTap={{ scale: 0.88 }}
            className="relative flex items-center justify-center p-1 rounded-full text-brand-blue-500/70 group-hover:text-brand-blue-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5 stroke-[2.2] text-brand-blue-500" />
            {/* Live active dot indicator */}
            <span className="absolute top-0.5 right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500" />
            </span>
          </motion.div>
          <span className="text-[11px] font-sans font-medium tracking-tight mt-0.5 text-brand-blue-500/70 group-hover:text-brand-blue-500">
            WhatsApp
          </span>
        </a>

        {/* 4. SERVICIOS */}
        <Link
          href="/servicios"
          aria-label="Ver todos los servicios de mensajería"
          aria-current={isServiciosActive ? 'page' : undefined}
          className="relative flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors group"
        >
          <motion.div
            whileTap={{ scale: 0.88 }}
            className={`relative flex items-center justify-center p-1 rounded-full transition-colors ${
              isServiciosActive
                ? 'text-brand-blue-500 bg-brand-blue-50'
                : 'text-brand-blue-500/70 group-hover:text-brand-blue-500'
            }`}
          >
            <Truck className="w-5 h-5 stroke-[2.2]" />
            {isServiciosActive && (
              <motion.span
                layoutId="bottom-nav-indicator"
                className="absolute -top-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue-500"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
          </motion.div>
          <span
            className={`text-[11px] font-sans font-medium tracking-tight mt-0.5 ${
              isServiciosActive
                ? 'text-brand-blue-500 font-bold'
                : 'text-brand-blue-500/70 group-hover:text-brand-blue-500'
            }`}
          >
            Servicios
          </span>
        </Link>
      </div>
    </nav>
  );
}

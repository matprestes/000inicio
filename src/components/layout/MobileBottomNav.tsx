'use client';

/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: ClientLayout.tsx renders MobileBottomNav for unified mobile navigation.
 * Data schemas: NAV_ITEMS, SUPPORT_PHONE, WHATSAPP_URL.
 * User instruction: "necesito que el src/components/layout/MobileBottomNav.tsx y en movil sea el unico navegador con todos los kinks y no suplicar src/components/layout/MobileNav.tsx"
 */

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home, Calculator, MessageCircle, Truck, Menu, X,
  Zap, TrendingDown, Clock, Building2, Package, Store,
  LayoutGrid, Search, UtensilsCrossed, Sparkles, Info, HelpCircle, Share2, Mail, Phone, ChevronRight, ChevronDown, Bike
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_URL = buildWhatsAppUrl({
  message: 'Hola Envíos DosRuedas! Quiero consultar por un envío en Mar del Plata.',
  source: 'mobile_bottom_nav',
});

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'INICIO', href: '/', icon: Home },
  {
    label: 'SERVICIOS',
    icon: Bike,
    dropdownItems: [
      { label: 'ENVÍOS EXPRESS', href: '/servicios/envios-express', icon: Zap },
      { label: 'ENVÍOS LOWCOST', href: '/servicios/envios-lowcost', icon: TrendingDown },
      { label: 'ENVÍOS FLEX (MELI)', href: '/servicios/enviosflex', icon: Clock },
      { label: 'CUENTA CORRIENTE FLEXIBLE', href: '/servicios/empresas-cuenta-corriente', icon: Building2 },
      { label: 'E-COMMERCE 24HS', href: '/servicios#ecommerce-24hs', icon: Package },
      { label: 'E-COMMERCE SAME DAY', href: '/servicios/deposito-fulfillment', icon: Store },
    ],
  },
  {
    label: 'PLATAFORMAS',
    icon: LayoutGrid,
    dropdownItems: [
      { label: 'LOGÍSTICA DOSRUEDAS', href: '/logistica-dosruedas', icon: Search },
      { label: 'MARDELIVERY GASTRONOMÍA', href: '/mardelivery', icon: UtensilsCrossed },
    ],
  },
  { label: 'PROMPT LAB', href: '/generador-de-prompts', icon: Sparkles },
  {
    label: 'NOSOTROS',
    icon: Info,
    dropdownItems: [
      { label: 'SOBRE NOSOTROS', href: '/nosotros/sobre-nosotros', icon: Info },
      { label: 'PREGUNTAS FRECUENTES', href: '/nosotros/preguntas-frecuentes', icon: HelpCircle },
      { label: 'NUESTRAS REDES', href: '/nosotros/nuestras-redes', icon: Share2 },
    ],
  },
  { label: 'CONTACTO', href: '/contacto', icon: Mail },
];

function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function MobileBottomNav() {
  const mounted = useIsMounted();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isHomeActive = pathname === '/';
  const isCotizarActive = pathname?.startsWith('/cotizar');
  const isServiciosActive = pathname?.startsWith('/servicios');

  // Handle body scroll lock when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isDrawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
    setActiveAccordion(null);
  }, [pathname]);

  const handleWhatsAppClick = () => {
    trackAnalytics.whatsappClick('mobile_bottom_nav', 'WhatsApp');
  };

  if (!mounted) return null;

  return (
    <>
      {/* BARRA INFERIOR FIJA MÓVIL UNIFICADA */}
      <nav
        aria-label="Navegación inferior móvil unificada"
        className="fixed bottom-0 inset-x-0 z-[1500] md:hidden bg-white/95 dark:bg-[#002855]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] transition-all select-none"
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div className="max-w-md mx-auto grid grid-cols-5 items-center h-16 px-1">
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
                  ? 'text-brand-blue-500 bg-brand-blue-50 dark:bg-white/10 dark:text-brand-yellow-500'
                  : 'text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500'
              }`}
            >
              <Home className="w-5 h-5 stroke-[2.2]" />
              {isHomeActive && (
                <motion.span
                  layoutId="bottom-nav-indicator"
                  className="absolute -top-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue-500 dark:bg-brand-yellow-500"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
            </motion.div>
            <span
              className={`text-[10px] font-sans font-medium tracking-tight mt-0.5 ${
                isHomeActive
                  ? 'text-brand-blue-500 dark:text-brand-yellow-500 font-bold'
                  : 'text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500'
              }`}
            >
              Inicio
            </span>
          </Link>

          {/* 2. COTIZAR */}
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
                  : 'bg-brand-yellow-500/20 text-brand-blue-500 dark:text-brand-yellow-500 group-hover:bg-brand-yellow-500'
              }`}
            >
              <Calculator className="w-5 h-5 stroke-[2.4]" />
            </motion.div>
            <span
              className={`text-[10px] font-sans font-semibold tracking-tight mt-0.5 ${
                isCotizarActive
                  ? 'text-brand-blue-500 font-bold'
                  : 'text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500'
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
              className="relative flex items-center justify-center p-1 rounded-full text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5 stroke-[2.2] text-brand-blue-500 dark:text-brand-yellow-500" />
              <span className="absolute top-0.5 right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500" />
              </span>
            </motion.div>
            <span className="text-[10px] font-sans font-medium tracking-tight mt-0.5 text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500">
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
                  ? 'text-brand-blue-500 bg-brand-blue-50 dark:bg-white/10 dark:text-brand-yellow-500'
                  : 'text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500'
              }`}
            >
              <Truck className="w-5 h-5 stroke-[2.2]" />
              {isServiciosActive && (
                <motion.span
                  layoutId="bottom-nav-indicator"
                  className="absolute -top-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue-500 dark:bg-brand-yellow-500"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
            </motion.div>
            <span
              className={`text-[10px] font-sans font-medium tracking-tight mt-0.5 ${
                isServiciosActive
                  ? 'text-brand-blue-500 dark:text-brand-yellow-500 font-bold'
                  : 'text-brand-blue-500/70 dark:text-white/70 group-hover:text-brand-blue-500'
              }`}
            >
              Servicios
            </span>
          </Link>

          {/* 5. MENÚ COMPLETO (DRAWER) */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Abrir menú completo con todos los enlaces"
            aria-expanded={isDrawerOpen}
            className="relative flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors group cursor-pointer bg-transparent border-0"
          >
            <motion.div
              whileTap={{ scale: 0.88 }}
              className="relative flex items-center justify-center p-1 rounded-full text-brand-blue-500 dark:text-brand-yellow-500 bg-brand-blue-50 dark:bg-white/10 group-hover:bg-brand-blue-100 transition-colors"
            >
              <Menu className="w-5 h-5 stroke-[2.4]" />
            </motion.div>
            <span className="text-[10px] font-sans font-bold tracking-tight mt-0.5 text-brand-blue-500 dark:text-brand-yellow-500">
              Menú
            </span>
          </button>
        </div>
      </nav>

      {/* DRAWER DESLIZABLE COMPLETO (TODOS LOS LINKS Y CATEGORÍAS) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-[2000] bg-brand-blue-500/[0.75] backdrop-blur-[8px] md:hidden"
              aria-hidden="true"
            />

            {/* Drawer Container */}
            <motion.div
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[2001] w-[88%] max-w-[380px] bg-brand-blue-500 text-white p-6 flex flex-col gap-5 overflow-y-auto shadow-[-16px_0_48px_rgba(9,80,246,0.5)] border-l border-white/20 md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4 shrink-0">
                <div>
                  <span className="font-display text-[22px] uppercase tracking-wider text-white block leading-none">
                    Menú Principal
                  </span>
                  <span className="font-mono text-[10px] text-brand-yellow-500 tracking-widest uppercase mt-1 block">
                    Envíos DosRuedas · Mar del Plata
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-yellow-500 hover:text-brand-blue-500 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Navigation Links (All Links & Dropdowns) */}
              <nav className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1 pb-4">
                {NAV_ITEMS.map((item) => {
                  const hasSub = item.dropdownItems && item.dropdownItems.length > 0;
                  const isDirectActive = item.href ? pathname === item.href : false;
                  const isGroupActive = hasSub && item.dropdownItems?.some((sub) => pathname === sub.href);

                  return (
                    <div key={item.label} className="flex flex-col">
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsDrawerOpen(false)}
                          className={`flex items-center justify-between py-3 px-3.5 rounded-[12px] font-subheading text-[16px] tracking-[0.06em] uppercase transition-colors ${
                            isDirectActive
                              ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold shadow-sm'
                              : 'text-white hover:bg-white/15 hover:text-brand-yellow-500'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {item.icon && <item.icon className="w-5 h-5 text-brand-yellow-500 shrink-0" />}
                            <span>{item.label}</span>
                          </span>
                        </Link>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => setActiveAccordion(activeAccordion === item.label ? null : item.label)}
                            aria-expanded={activeAccordion === item.label}
                            className={`flex items-center justify-between w-full py-3 px-3.5 rounded-[12px] font-subheading text-[16px] tracking-[0.06em] uppercase transition-colors cursor-pointer ${
                              isGroupActive || activeAccordion === item.label
                                ? 'bg-white/20 text-brand-yellow-500 font-bold'
                                : 'text-white hover:bg-white/15 hover:text-brand-yellow-500'
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              {item.icon && <item.icon className="w-5 h-5 text-brand-yellow-500 shrink-0" />}
                              <span>{item.label}</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-brand-yellow-500 transition-transform duration-200 ${
                                activeAccordion === item.label ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {activeAccordion === item.label && hasSub && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex flex-col pl-3 py-1.5 gap-1.5 border-l-2 border-brand-yellow-500/50 my-1 ml-4"
                            >
                              {item.dropdownItems!.map((sub) => {
                                const SubIcon = sub.icon || ChevronRight;
                                const isSubActive = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setIsDrawerOpen(false)}
                                    className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-sm font-sans font-medium transition-all ${
                                      isSubActive
                                        ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold shadow-sm'
                                        : 'text-white/90 hover:text-brand-yellow-500 hover:bg-white/10'
                                    }`}
                                  >
                                    <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${isSubActive ? 'bg-brand-blue-500 text-brand-yellow-500' : 'bg-white/10 text-brand-yellow-500'}`}>
                                      <SubIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="truncate">{sub.label}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Drawer Footer Actions */}
              <div className="mt-auto pt-4 border-t border-white/15 flex flex-col gap-3 shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PHONE_HREF}
                    onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'drawer_mobile_bottom')}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-brand-yellow-500" />
                    <span>Llamar</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalytics.whatsappClick('drawer_mobile_bottom_wa', 'WhatsApp')}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-yellow-500" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <Link
                  href="/cotizar"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 px-5 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-[16px] uppercase tracking-[0.06em] font-bold shadow-[0_8px_24px_rgba(255,236,1,0.32)] hover:bg-brand-yellow-400 transition-all text-center min-h-[48px]"
                >
                  Cotizá tu envío ahora
                </Link>

                <div className="flex flex-col items-center justify-center pt-2 text-center text-xs text-white/80 font-mono gap-1">
                  <span className="font-semibold text-brand-yellow-500">📞 {SUPPORT_PHONE}</span>
                  <span>Friuli 1972 · Mar del Plata</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

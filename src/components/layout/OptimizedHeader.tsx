'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import {
  ChevronDown, ChevronRight, Phone,
  Home, Zap, TrendingDown, Clock, Info, HelpCircle, Share2, Mail,
  LayoutGrid, Building2, Package, Store, Search, UtensilsCrossed, Bike, Sparkles
} from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const PHONE_DISPLAY_SHORT = SUPPORT_PHONE.replace(/^\+54\s*/, '');

const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false });

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

export default function OptimizedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef(pathname);

  const dropdownContainer = useMemo<Variants>(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 420, damping: 28, staggerChildren: prefersReducedMotion ? 0 : 0.03, delayChildren: 0.01 },
    },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97, transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] } },
  }), [prefersReducedMotion]);

  const dropdownItem = useMemo<Variants>(() => ({
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -8 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } },
  }), [prefersReducedMotion]);

  const handleDropdownToggle = useCallback((label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      if (isOpen || activeDropdown) {
        const id = setTimeout(() => {
          setIsOpen(false);
          setActiveDropdown(null);
        }, 0);
        return () => clearTimeout(id);
      }
    }
  }, [pathname, isOpen, activeDropdown]);

  useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown]);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between gap-5 transition-[background,min-height,box-shadow,border-color] duration-300 px-[clamp(16px,4vw,56px)] ${
          scrolled
            ? 'bg-brand-blue-500/[0.98] min-h-[70px] shadow-[0_12px_36px_rgba(9,80,246,0.35)] border-b border-white/[0.16] backdrop-blur-[14px]'
            : 'bg-brand-blue-500/[0.94] min-h-[82px] shadow-none border-b border-white/[0.22] backdrop-blur-[14px]'
        }`}
      >
        {/* BRAND / LOGO + TEXTO TIPOGRÁFICO */}
        <Link
          href="/"
          id="nav-logo-opt"
          aria-current={pathname === '/' ? 'page' : undefined}
          className="inline-flex items-center gap-3 text-white no-underline select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl shrink-0"
        >
          <div className="relative w-11 h-11 shrink-0">
            <OptimizedImage
              src="/logo.webp"
              alt="Envíos DosRuedas"
              fill
              sizes="44px"
              className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-105"
              aboveTheFold={true}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[22px] leading-[0.92] tracking-[-0.015em] uppercase text-white">
              Envíos DosRuedas
            </span>
            <span className="mt-[5px] text-brand-yellow-500 font-mono text-[9px] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
              Mensajería · Logística MDP
            </span>
          </div>
        </Link>

        {/* NAVEGACIÓN PRINCIPAL (DESKTOP) */}
        <nav
          id="primary-nav"
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-[clamp(14px,2vw,28px)]"
        >
          {NAV_ITEMS.map((item) => {
            const isDirectActive = item.href ? pathname === item.href : false;
            const isGroupActive = item.dropdownItems
              ? item.dropdownItems.some((sub) => pathname === sub.href.split('#')[0] && sub.href !== '/servicios#ecommerce-24hs')
              : false;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setActiveDropdown((prev) => (prev === item.label ? null : prev));
                  }
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    aria-current={isDirectActive ? 'page' : undefined}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/[0.92] font-subheading text-base tracking-[0.08em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                      isDirectActive
                        ? 'text-brand-yellow-500 bg-white/[0.08]'
                        : 'hover:text-brand-yellow-500 hover:bg-white/[0.08]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/[0.92] font-subheading text-base tracking-[0.08em] uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                      isGroupActive || activeDropdown === item.label
                        ? 'text-brand-yellow-500 bg-white/[0.08]'
                        : 'hover:text-brand-yellow-500 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                )}

                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.label && (
                    <motion.div
                      variants={dropdownContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: 'top left' }}
                      className="absolute top-[calc(100%+4px)] left-0 min-w-[250px] bg-brand-blue-500 border border-white/[0.22] rounded-[14px] p-2 shadow-[0_20px_48px_-8px_rgba(9,80,246,0.45)] z-[100]"
                    >
                      <div className="flex flex-col gap-1">
                        {item.dropdownItems.map((subItem) => {
                          const SubIcon = subItem.icon || ChevronRight;
                          const isSubActive = pathname === subItem.href;
                          return (
                            <motion.div key={subItem.href} variants={dropdownItem}>
                              <Link
                                href={subItem.href}
                                aria-current={isSubActive ? 'page' : undefined}
                                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-[8px] text-white font-sans text-sm font-medium transition-all group ${
                                  isSubActive
                                    ? 'bg-white/[0.16] text-brand-yellow-500'
                                    : 'hover:bg-white/[0.12] hover:text-brand-yellow-500 hover:translate-x-[3px]'
                                }`}
                              >
                                <div
                                  className={`w-7 h-7 shrink-0 rounded-[6px] flex items-center justify-center transition-colors ${
                                    isSubActive
                                      ? 'bg-brand-yellow-500 text-brand-blue-500'
                                      : 'bg-white/10 text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-500'
                                  }`}
                                  aria-hidden="true"
                                >
                                  <SubIcon className="w-[15px] h-[15px]" />
                                </div>
                                <span className="truncate">{subItem.label}</span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* HEADER ACTIONS (TELÉFONO + CTA + TOGGLE MÓVIL) */}
        <div className="flex items-center gap-3.5 shrink-0">
          {/* Teléfono directo */}
          <a
            href={PHONE_HREF}
            onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'header_desktop')}
            className="hidden xl:inline-flex items-center gap-2 text-white font-mono text-[14px] leading-none font-semibold tracking-[0.04em] px-3 py-2 rounded-lg border border-white/[0.15] bg-white/[0.06] hover:bg-white/[0.15] hover:border-brand-yellow-500 hover:text-brand-yellow-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
          >
            <Phone className="w-[15px] h-[15px] text-brand-yellow-500" aria-hidden="true" />
            <span>{PHONE_DISPLAY_SHORT}</span>
          </a>

          {/* Botón CTA con disco y flecha */}
          <Link
            href="/cotizar"
            className="inline-flex items-center justify-between gap-3.5 min-h-[48px] pl-[18px] pr-2 border border-brand-yellow-500 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-[17px] leading-none tracking-[0.06em] uppercase shadow-[0_8px_24px_rgba(255,236,1,0.32)] hover:translate-y-[-2px] hover:bg-brand-yellow-400 hover:shadow-[0_10px_28px_rgba(255,236,1,0.45)] transition-all group select-none"
          >
            <span>Cotizá tu envío</span>
            <span
              className="grid w-8 h-8 shrink-0 place-items-center rounded-full bg-brand-blue-500 text-brand-yellow-500 transition-all duration-200 group-hover:bg-brand-blue-400 group-hover:rotate-[-45deg]"
              aria-hidden="true"
            >
              <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* Botón menú hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            id="menu-toggle"
            className="inline-flex lg:hidden w-11 h-11 p-[9px] border border-white/40 rounded-xl bg-white/[0.08] text-white hover:bg-white/20 hover:border-brand-yellow-500 hover:text-brand-yellow-500 items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-[22px] h-[22px] stroke-[2.2] stroke-current" viewBox="0 0 24 24" fill="none" strokeLinecap="round" aria-hidden="true">
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <MobileNav
        isOpen={isOpen}
        onClose={handleCloseMobileNav}
        navItems={NAV_ITEMS}
        activeDropdown={activeDropdown}
        onDropdownToggle={handleDropdownToggle}
      />
    </>
  );
}

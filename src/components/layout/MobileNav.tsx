'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const WHATSAPP_HREF = `https://wa.me/5492236602699?text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20una%20consulta`;

export interface MobileNavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: MobileNavItem[];
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
}

function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navItems, activeDropdown, onDropdownToggle }) => {
  const mounted = useIsMounted();
  const drawerRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const pathname = usePathname();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const t = setTimeout(() => drawerRef.current?.querySelector<HTMLElement>('button, [href]')?.focus(), 80);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(t);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const content = (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[2000] bg-brand-blue-500/[0.75] backdrop-blur-[8px] lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navegación móvil"
        className={`fixed top-0 right-0 bottom-0 z-[2001] w-[86%] max-w-[360px] bg-brand-blue-500 p-6 flex flex-col gap-5 overflow-y-auto shadow-[-12px_0_40px_rgba(9,80,246,0.45)] border-l border-white/15 lg:hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-4 shrink-0">
          <span className="font-display text-[20px] uppercase text-white tracking-tight">Menú Principal</span>
          <button
            type="button"
            onClick={onClose}
            id="drawer-close-btn"
            className="w-[38px] h-[38px] rounded-full bg-white/10 flex items-center justify-center text-xl text-white hover:bg-brand-yellow-500 hover:text-brand-blue-500 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto pr-1">
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center justify-between py-3 px-3.5 rounded-[10px] font-subheading text-[16px] tracking-[0.06em] uppercase text-white transition-colors ${
              pathname === '/' ? 'bg-white/20 text-brand-yellow-500 font-bold' : 'hover:bg-white/[0.12] hover:text-brand-yellow-500'
            }`}
          >
            <span>Inicio</span>
          </Link>

          {navItems.filter(item => item.label !== 'Inicio').map((item) => {
            const hasSub = item.dropdownItems && item.dropdownItems.length > 0;
            const isGroupActive = hasSub && item.dropdownItems?.some(sub => pathname === sub.href);

            return (
              <div key={item.label} className="flex flex-col">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between py-3 px-3.5 rounded-[10px] font-subheading text-[16px] tracking-[0.06em] uppercase text-white transition-colors ${
                      pathname === item.href ? 'bg-white/20 text-brand-yellow-500 font-bold' : 'hover:bg-white/[0.12] hover:text-brand-yellow-500'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => onDropdownToggle(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      className={`flex items-center justify-between w-full py-3 px-3.5 rounded-[10px] font-subheading text-[16px] tracking-[0.06em] uppercase text-white transition-colors cursor-pointer ${
                        isGroupActive || activeDropdown === item.label ? 'bg-white/[0.15] text-brand-yellow-500' : 'hover:bg-white/[0.12] hover:text-brand-yellow-500'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {item.icon && <item.icon className="w-4 h-4 text-brand-yellow-500" />}
                        <span>{item.label}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-yellow-500 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === item.label && hasSub && (
                      <div className="flex flex-col pl-4 py-1 gap-1 border-l-2 border-brand-yellow-500/40 my-1 ml-3">
                        {item.dropdownItems!.map((sub) => {
                          const SubIcon = sub.icon || ChevronRight;
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={onClose}
                              className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-sans font-medium transition-colors ${
                                isSubActive ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold' : 'text-white/90 hover:text-brand-yellow-500 hover:bg-white/10'
                              }`}
                            >
                              <SubIcon className="w-3.5 h-3.5 text-brand-yellow-500 shrink-0" />
                              <span className="truncate">{sub.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto pt-4 border-t border-white/15 flex flex-col gap-3 shrink-0">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PHONE_HREF}
              onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'drawer_mobile')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all min-h-11"
            >
              <Phone className="w-4 h-4 text-brand-yellow-500" />
              <span>Llamar</span>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('drawer_mobile_wa', 'WhatsApp')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all min-h-11"
            >
              <MessageSquare className="w-4 h-4 text-brand-yellow-500" />
              <span>WhatsApp</span>
            </a>
          </div>

          <Link
            href="/cotizar"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3 px-5 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-[16px] uppercase tracking-[0.06em] font-bold shadow-[0_8px_24px_rgba(255,236,1,0.32)] hover:bg-brand-yellow-400 transition-all text-center min-h-[48px]"
          >
            Cotizá tu envío
          </Link>

          <div className="flex flex-col items-center justify-center pt-2 text-center text-xs text-white/80 font-mono gap-1">
            <span className="font-semibold text-brand-yellow-500">📞 {SUPPORT_PHONE}</span>
            <span>Friuli 1972 · Mar del Plata</span>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
};

export default MobileNav;

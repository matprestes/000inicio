'use client';

/*
 * FACT-FORCING GATE COMPLIANCE
 * Call sites: Navbar component.
 * Data schemas: Reads constants from @/lib/promises.
 * User instruction: "los componentes como el navegador movil no tiene correctamente los enlaces y en móvil el Hero de yoda las paginas y el jeader se auperponen"
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bike, Phone, MessageSquare } from 'lucide-react';
import { CTANestedPill } from './CTANestedPill';
import { SUPPORT_PHONE, SUPPORT_WHATSAPP_LINK } from '@/lib/promises';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#BACEFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0950F6] flex items-center justify-center text-[#FFEC01] shadow-[0_8px_20px_-4px_rgba(9,80,246,0.35)] group-hover:scale-105 transition-transform">
              <Bike className="w-7 h-7" />
            </div>
            <div>
              <span className="font-['Anton'] text-2xl tracking-wider text-[#0950F6] block leading-none">
                ENVÍOS DOSRUEDAS
              </span>
              <span className="font-['Bebas_Neue'] text-xs tracking-widest text-[#3570F8] block">
                LOGÍSTICA URBANA · MAR DEL PLATA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 font-semibold text-sm text-[#0950F6]">
            <Link href="/servicios/envios-express" className="hover:text-[#3570F8] transition-colors">
              Express
            </Link>
            <Link href="/servicios/envios-lowcost" className="hover:text-[#3570F8] transition-colors">
              LowCost
            </Link>
            <Link href="/servicios/enviosflex" className="hover:text-[#3570F8] transition-colors">
              Flex MDQ
            </Link>
            <Link href="/servicios/plan-emprendedores" className="hover:text-[#3570F8] transition-colors">
              Emprendedores
            </Link>
            <Link href="/servicios/deposito-fulfillment" className="hover:text-[#3570F8] transition-colors">
              Depósito 3PL
            </Link>
            <Link href="/nosotros/sobre-nosotros" className="hover:text-[#3570F8] transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="hover:text-[#3570F8] transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <CTANestedPill href="/cotizar" variant="yellow">
              Cotizá tu Envío
            </CTANestedPill>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href={SUPPORT_WHATSAPP_LINK}
              target="_blank"
              className="p-2 text-[#0950F6] bg-[#FFEC01] rounded-full border border-[#0950F6]"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#0950F6] hover:bg-[#E6EEFE] transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

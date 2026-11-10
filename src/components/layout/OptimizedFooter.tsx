'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  Phone, MapPin, Clock, ArrowUp, Zap, ArrowUpRight, ShieldCheck, Package, Store
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');
const CURRENT_YEAR = new Date().getFullYear();

export default function OptimizedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="optimized-footer" className="bg-brand-blue-500 text-white border-t border-white/10 relative overflow-hidden w-full font-sans">
      {/* Franja Amarilla Superior de 6px (Firma Canónica de Marca) */}
      <div className="h-1.5 bg-brand-yellow-500 w-full shadow-[0_2px_12px_rgba(255,236,1,0.5)]" aria-hidden="true" />

      {/* Luces radiales de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,1,0.08),transparent_55%)] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(9,80,246,0.6),transparent_45%)] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12 md:py-16 relative z-10">
        
        {/* 1. TOP CTA BANNER RESPONSIVO */}
        <div className="mb-12 rounded-[1.25rem] bg-gradient-to-br from-brand-blue-500/[0.98] to-brand-blue-500 border border-white/20 p-6 sm:p-9 backdrop-blur-md shadow-[0_20px_45px_-10px_rgba(9,80,246,0.40)] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2.5 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/35 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand-yellow-500 shadow-[0_0_8px_#FFEC01] animate-ping" aria-hidden="true" />
              <span>Operaciones Activas Mar del Plata {CURRENT_YEAR}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] uppercase tracking-tight text-white leading-tight">
              ¿Tenés envíos para hoy? <span className="text-brand-yellow-500">Los entregamos a tiempo.</span>
            </h3>
            <p className="text-brand-blue-50 text-sm sm:text-base font-light leading-relaxed">
              Cotizá online en segundos o coordiná directo con nuestro equipo logístico en Friuli 1972 por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/cotizar"
              onClick={() => trackAnalytics.ctaClick('footer_banner_cotizar_cta', 'Cotizá tu Envío')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-[0.925rem] font-bold uppercase tracking-[0.05em] px-6 py-3.5 rounded-full shadow-[0_2px_6px_rgba(255,236,1,0.18)] hover:shadow-[0_0_28px_rgba(255,236,1,0.45),0_8px_24px_rgba(9,80,246,0.18)] transition-all min-h-[48px] group"
            >
              <span>Cotizá tu Envío</span>
              <span className="w-7 h-7 rounded-full bg-[#0950f6]/[0.12] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>

            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20Envios%20DosRuedas,%20quiero%20hacer%20una%20consulta%20de%20envios`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('footer_banner_whatsapp', 'WhatsApp Directo')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-subheading text-[0.925rem] uppercase tracking-[0.05em] px-6 py-3.5 rounded-full transition-all min-h-[48px]"
            >
              <FaWhatsapp className="w-[1.15rem] h-[1.15rem] text-brand-yellow-500" aria-hidden="true" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>

        {/* 2. MID SECTION (GRILLA DE 3 COLUMNAS RESPONSIVA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1.35fr_1.1fr] gap-10 lg:gap-14 items-start">
          
          {/* Columna 1: Marca (con logo.webp) y Redes */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl">
              <div className="relative w-[46px] h-[46px] shrink-0">
                <OptimizedImage
                  src="/logo.webp"
                  alt="Envíos DosRuedas"
                  fill
                  sizes="46px"
                  className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-105"
                  aboveTheFold={false}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[1.6rem] uppercase tracking-[-0.015em] text-white">
                  Envíos <span className="text-brand-yellow-500">DosRuedas</span>
                </span>
                <span className="font-mono text-[0.65rem] text-brand-yellow-500 tracking-[0.1em] uppercase font-semibold mt-1">
                  Flota Propia · Mar del Plata
                </span>
              </div>
            </Link>

            <p className="text-brand-blue-50 text-[0.88rem] leading-relaxed font-light max-w-lg">
              Más de 15 años liderando la mensajería urbana y última milla e-commerce en Mar del Plata. Con base física en Friuli 1972, flota propia y cero tercerización, cuidamos cada paquete como si fuera nuestro.
            </p>

            <div className="flex flex-col gap-2.5">
              <span className="text-[0.72rem] font-mono text-brand-yellow-500 uppercase font-semibold tracking-[0.08em]">
                Canales Oficiales
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                <Link
                  href="/nosotros/nuestras-redes"
                  className="w-[2.6rem] h-[2.6rem] rounded-[0.75rem] bg-white/10 border border-white/18 text-white flex items-center justify-center hover:bg-brand-yellow-500 hover:text-brand-blue-500 hover:border-brand-yellow-500 transition-all hover:-translate-y-0.5"
                  title="Instagram"
                  aria-label="Instagram de Envíos DosRuedas"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link
                  href="/nosotros/nuestras-redes"
                  className="w-[2.6rem] h-[2.6rem] rounded-[0.75rem] bg-white/10 border border-white/18 text-white flex items-center justify-center hover:bg-brand-yellow-500 hover:text-brand-blue-500 hover:border-brand-yellow-500 transition-all hover:-translate-y-0.5"
                  title="Facebook"
                  aria-label="Facebook de Envíos DosRuedas"
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[2.6rem] h-[2.6rem] rounded-[0.75rem] bg-brand-yellow-500 border border-brand-yellow-500 text-brand-blue-500 flex items-center justify-center hover:bg-brand-yellow-400 transition-all hover:-translate-y-0.5 shadow-sm"
                  title="WhatsApp"
                  aria-label="WhatsApp Oficial"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[0.65rem] bg-white/[0.08] border border-white/15 font-mono text-[0.75rem] text-white w-fit mt-1">
                <ShieldCheck className="w-[0.95rem] h-[0.95rem] text-brand-yellow-500 shrink-0" />
                <span>Base Central Operativa · Friuli 1972</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios y Plataformas */}
          <div className="flex flex-col gap-5">
            <h4 className="font-subheading text-[1.2rem] tracking-[0.06em] text-brand-yellow-500 uppercase border-b border-white/12 pb-2">
              Servicios y Plataformas
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[0.7rem] text-brand-yellow-500 uppercase tracking-[0.08em] font-mono font-semibold mb-2.5">
                  Plataformas y Portales
                </p>
                <ul className="list-none flex flex-col gap-2.5 font-sans">
                  <li>
                    <Link href="/cotizar" className="text-brand-blue-50 hover:text-brand-yellow-500 text-[0.85rem] inline-flex items-center gap-2 transition-all hover:translate-x-1">
                      <Zap className="w-[0.9rem] h-[0.9rem] text-brand-yellow-500 shrink-0" />
                      <span>Cotizá Express / LowCost</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/logistica-dosruedas" className="text-brand-blue-50 hover:text-brand-yellow-500 text-[0.85rem] inline-flex items-center gap-2 transition-all hover:translate-x-1">
                      <Package className="w-[0.9rem] h-[0.9rem] text-brand-yellow-500 shrink-0" />
                      <span>Logística DosRuedas</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mardelivery" className="text-brand-blue-50 hover:text-brand-yellow-500 text-[0.85rem] inline-flex items-center gap-2 transition-all hover:translate-x-1">
                      <Store className="w-[0.9rem] h-[0.9rem] text-brand-yellow-500 shrink-0" />
                      <span>MarDelivery Gastronomía</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[0.7rem] text-brand-yellow-500 uppercase tracking-[0.08em] font-mono font-semibold mb-2.5">
                  Planes Logísticos
                </p>
                <ul className="list-none flex flex-col gap-2.5 font-sans text-[0.85rem]">
                  <li><Link href="/servicios/envios-express" className="text-brand-blue-50 hover:text-brand-yellow-500 transition-colors">Envíos Express (&lt; 90 min)</Link></li>
                  <li><Link href="/servicios/envios-lowcost" className="text-brand-blue-50 hover:text-brand-yellow-500 transition-colors">Envíos LowCost</Link></li>
                  <li><Link href="/servicios/enviosflex" className="text-brand-blue-50 hover:text-brand-yellow-500 transition-colors">Mercado Envíos Flex</Link></li>
                  <li><Link href="/servicios/empresas-cuenta-corriente" className="text-brand-blue-50 hover:text-brand-yellow-500 transition-colors">Cuenta Corriente Flexible</Link></li>
                  <li><Link href="/servicios/deposito-fulfillment" className="text-brand-blue-50 hover:text-brand-yellow-500 transition-colors">E-commerce Same Day</Link></li>
                  <li><Link href="/servicios" className="text-brand-yellow-500 font-bold hover:underline">Ver todos los services →</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna 3: Base de Operaciones MDQ */}
          <div className="flex flex-col gap-5">
            <h4 className="font-subheading text-[1.2rem] tracking-[0.06em] text-brand-yellow-500 uppercase border-b border-white/12 pb-2">
              Base de Operaciones MDQ
            </h4>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-start bg-[#0950f6]/[0.6] p-3.5 rounded-[0.85rem] border border-white/14 hover:bg-[#0950f6]/[0.85] transition-colors">
                <div className="p-2 bg-white/10 rounded-[0.55rem] text-brand-yellow-500 shrink-0">
                  <MapPin className="w-[1.05rem] h-[1.05rem]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-[0.05em] text-[0.88rem]">Centro de Distribución</p>
                  <p className="text-[0.78rem] text-brand-blue-50 mt-0.5">Friuli 1972, Mar del Plata, Buenos Aires</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-[#0950f6]/[0.6] p-3.5 rounded-[0.85rem] border border-white/14 hover:bg-[#0950f6]/[0.85] transition-colors">
                <div className="p-2 bg-white/10 rounded-[0.55rem] text-brand-yellow-500 shrink-0">
                  <Phone className="w-[1.05rem] h-[1.05rem]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-[0.05em] text-[0.88rem]">Línea Directa y WhatsApp</p>
                  <a href={PHONE_HREF} className="font-mono text-[0.85rem] font-bold text-brand-yellow-500 hover:underline block mt-0.5">
                    {SUPPORT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-[#0950f6]/[0.6] p-3.5 rounded-[0.85rem] border border-white/14 hover:bg-[#0950f6]/[0.85] transition-colors">
                <div className="p-2 bg-white/10 rounded-[0.55rem] text-brand-yellow-500 shrink-0">
                  <Clock className="w-[1.05rem] h-[1.05rem]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-[0.05em] text-[0.88rem]">Horarios de Despacho</p>
                  <p className="text-[0.78rem] text-brand-blue-50 mt-0.5">Lunes a Viernes: 08:00 a 18:00 hs</p>
                  <p className="text-[0.78rem] text-brand-blue-50">Sábados: 08:00 a 13:00 hs · Guardia activa</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. BOTÓN VOLVER ARRIBA Y DIVISOR */}
        <div className="border-t border-white/12 my-10 relative">
          <button
            type="button"
            onClick={scrollToTop}
            className="absolute -top-[22px] right-4 sm:right-6 w-11 h-11 rounded-full bg-brand-yellow-500 text-brand-blue-500 border-2 border-brand-yellow-500 shadow-[0_4px_14px_rgba(255,236,1,0.28)] flex items-center justify-center hover:bg-brand-yellow-400 hover:shadow-[0_0_28px_rgba(255,236,1,0.45)] transition-all cursor-pointer hover:-translate-y-1"
            aria-label="Volver arriba en la página"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>

        {/* 4. BARRA LEGAL Y COPYRIGHT RESPONSIVA */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between text-[0.78rem] text-brand-blue-50 text-center md:text-left">
          <p>© {CURRENT_YEAR} Envíos DosRuedas · Todos los derechos reservados · Mar del Plata, Argentina.</p>
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-5" aria-label="Enlaces legales y secundarios">
            <Link href="/servicios" className="hover:text-brand-yellow-500 transition-colors">Servicios</Link>
            <Link href="/cobertura" className="hover:text-brand-yellow-500 transition-colors">Cobertura</Link>
            <Link href="/logistica-dosruedas" className="hover:text-brand-yellow-500 transition-colors">Logística DosRuedas</Link>
            <Link href="/mardelivery" className="hover:text-brand-yellow-500 transition-colors">MarDelivery</Link>
            <Link href="/nosotros" className="hover:text-brand-yellow-500 transition-colors">Nosotros</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-brand-yellow-500 transition-colors">Términos y Condiciones</Link>
            <Link href="/politica-de-privacidad" className="hover:text-brand-yellow-500 transition-colors">Privacidad</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}

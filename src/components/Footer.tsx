import React from 'react';
import Link from 'next/link';
import { Bike, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import {
  ADDRESS_DEPOSIT,
  SUPPORT_PHONE,
  CONTACT_EMAIL,
  OPERATING_HOURS,
  TAX_INVOICE_TYPE,
  SUPPORT_WHATSAPP_LINK,
} from '@/lib/promises';

export function Footer() {
  return (
    <footer className="bg-[#0950F6] text-white border-t-4 border-[#FFEC01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFEC01] flex items-center justify-center text-[#0950F6]">
                <Bike className="w-6 h-6" />
              </div>
              <span className="font-['Anton'] text-2xl tracking-wider text-white">
                ENVÍOS DOSRUEDAS
              </span>
            </div>
            <p className="text-sm text-[#BACEFD] leading-relaxed">
              Logística urbana en moto para comercios, emprendedores y particulares en Mar del Plata.
              Rapidez real, seguimiento y depósito propio.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#FFEC01] text-xs font-semibold border border-white/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Emitimos únicamente {TAX_INVOICE_TYPE}</span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl tracking-wider text-[#FFEC01] mb-4">
              SERVICIOS
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6EEFE]">
              <li>
                <Link href="/servicios/envios-express" className="hover:text-[#FFEC01] transition-colors">
                  Envíos Express (Franja 3 hs)
                </Link>
              </li>
              <li>
                <Link href="/servicios/envios-lowcost" className="hover:text-[#FFEC01] transition-colors">
                  Envíos LowCost (En el día)
                </Link>
              </li>
              <li>
                <Link href="/servicios/enviosflex" className="hover:text-[#FFEC01] transition-colors">
                  Mercado Envíos Flex MDQ
                </Link>
              </li>
              <li>
                <Link href="/servicios/plan-emprendedores" className="hover:text-[#FFEC01] transition-colors">
                  Plan Emprendedores (-20% DropOFF)
                </Link>
              </li>
              <li>
                <Link href="/servicios/deposito-fulfillment" className="hover:text-[#FFEC01] transition-colors">
                  Depósito & Stock 3PL
                </Link>
              </li>
              <li>
                <Link href="/cotizar" className="text-[#FFEC01] font-bold hover:underline">
                  Cotizador Online Inmediato
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporativo & Nosotros */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl tracking-wider text-[#FFEC01] mb-4">
              NOSOTROS & INFO
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6EEFE]">
              <li>
                <Link href="/nosotros/sobre-nosotros" className="hover:text-[#FFEC01] transition-colors">
                  Sobre Nosotros (15+ años en MDQ)
                </Link>
              </li>
              <li>
                <Link href="/nosotros/preguntas-frecuentes" className="hover:text-[#FFEC01] transition-colors">
                  Preguntas Frecuentes (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/logistica-dosruedas" className="hover:text-[#FFEC01] transition-colors">
                  Soluciones Corporativas B2B
                </Link>
              </li>
              <li>
                <Link href="/mardelivery" className="hover:text-[#FFEC01] transition-colors">
                  MarDelivery Gastronomía
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-[#FFEC01] transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="hover:text-[#FFEC01] transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto & Ubicación */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl tracking-wider text-[#FFEC01] mb-4">
              CONTACTO DIRECTO
            </h4>
            <div className="space-y-3 text-sm text-[#E6EEFE]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFEC01] shrink-0 mt-0.5" />
                <span>{ADDRESS_DEPOSIT}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFEC01] shrink-0" />
                <a href={`tel:${SUPPORT_PHONE}`} className="hover:text-[#FFEC01] transition-colors">
                  {SUPPORT_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFEC01] shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#FFEC01] transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-[#FFEC01] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div>Lunes a Viernes: {OPERATING_HOURS.weekdays}</div>
                  <div>Sábados: {OPERATING_HOURS.saturdays}</div>
                  <div>Domingos: {OPERATING_HOURS.sundays}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#BACEFD] gap-4">
          <p>© {new Date().getFullYear()} Envíos DosRuedas · Mar del Plata, Buenos Aires, Argentina.</p>
          <p className="flex items-center gap-4">
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
              Legales
            </Link>
            <span>·</span>
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <span>·</span>
            <Link href={SUPPORT_WHATSAPP_LINK} target="_blank" className="text-[#FFEC01] font-bold hover:underline">
              WhatsApp Oficial
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ChevronRight,
  ArrowRight,
  Search,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function PreguntasFrecuentesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });


  // Portal hero panel opening transform on scroll
  const leftPanelX = useTransform(scrollYProgress, [0, 0.25], ['0%', '-100%']);
  const rightPanelX = useTransform(scrollYProgress, [0, 0.25], ['0%', '100%']);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.3], [1.15, 1]);

  // Statement float rotation & drift
  const floatRotate = useTransform(scrollYProgress, [0.2, 0.6], [0, 25]);
  const floatY = useTransform(scrollYProgress, [0.2, 0.6], [0, -60]);

  // FAQ interactive state
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'TARIFAS' | 'LOGÍSTICA' | 'PAGOS'>('TODOS');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqsList = [
    {
      category: 'TARIFAS',
      question: '¿CÓMO SE CALCULA LA TARIFA DE UN ENVÍO EN MOTO EN MAR DEL PLATA?',
      answer: 'Nuestras tarifas se calculan de forma transparente basadas en la distancia estimada entre el punto de retiro y entrega, con zonas estandarizadas (Centro, Zona Norte, Puerto, Bosque Alegre, etc.) y recargos opcionales por lluvia o paquetes voluminosos.',
    },
    {
      category: 'LOGÍSTICA',
      question: '¿CUÁL ES EL TIEMPO ESTIMADO PARA LOS ENVÍOS EXPRESS?',
      answer: 'El servicio Express garantiza la entrega en un rango óptimo de hasta 3 horas desde confirmado el pedido, sujeto a disponibilidad en base de nuestra flota propia.',
    },
    {
      category: 'PAGOS',
      question: '¿QUÉ MEDIOS DE PAGO ACEPTAN PARA CUENTA CORRIENTE Y PARTICULARES?',
      answer: 'Aceptamos transferencias bancarias, Mercado Pago, efectivo para cadetes autorizados y cuenta corriente corporativa con facturación quincenal o mensual para e-commerces y empresas.',
    },
    {
      category: 'LOGÍSTICA',
      question: '¿CÓMO FUNCIONA MERCADO ENVÍOS FLEX (MELI) EN MAR DEL PLATA?',
      answer: 'Retiramos tus ventas de MercadoLibre en tu depósito o local antes de las 13:00 hs y realizamos las entregas en el transcurso de la tarde bajo los estándares oficiales Flex.',
    },
    {
      category: 'TARIFAS',
      question: '¿EXISTEN RECARGOS POR DÍAS DE LLUVIA O CONDICIONES CLIMÁTICAS?',
      answer: 'Sí, en días de lluvia intensa se aplica un ajuste variable por zona para compensar el esfuerzo operativo y garantizar la disponibilidad prioritaria de nuestra flota en moto.',
    },
  ];

  const filteredFaqs = faqsList.filter((faq) => {
    const matchesCategory = activeCategory === 'TODOS' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={containerRef} className="min-h-dvh bg-white text-brand-blue-500 font-sans selection:bg-brand-yellow-500 selection:text-brand-blue-500 overflow-x-hidden">
      
      {/* 1. PORTAL HERO SECTION */}
      <section className="relative h-[250vh] w-full">
        <div className="sticky top-0 h-dvh w-full overflow-hidden isolate flex flex-col justify-between bg-brand-blue-500">
          
          {/* Full bleed image overscaled */}
          <motion.div style={{ scale: heroImageScale }} className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/assets/delivery-background.jpg"
              alt="Portal hero background"
              fill
              className="object-cover object-center"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Duotone wash blending accents */}
          <div className="absolute inset-0 z-1 bg-brand-blue-500/80 mix-blend-overlay pointer-events-none" />

          {/* Radial veil darkening edges */}
          <div className="absolute inset-0 z-2 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(9,80,246,0.9)_90%)] pointer-events-none" />

          {/* TWO SOLID PANELS MEETING IN THE MIDDLE (BEGINS CLOSED) */}
          <div className="absolute inset-0 z-10 flex pointer-events-none">
            <motion.div
              style={{ x: leftPanelX }}
              className="w-1/2 h-full bg-white border-r border-brand-blue-100 flex items-center justify-end pr-12 shadow-[20px_0_50px_rgba(9,80,246,0.15)]"
            >
              <div className="text-right opacity-0 md:opacity-100">
                <span className="font-subheading text-xs tracking-widest text-brand-blue-500/40 uppercase block">CENTRO DE OPERACIONES</span>
                <span className="font-display text-4xl text-brand-blue-500 uppercase">MAR DEL PLATA</span>
              </div>
            </motion.div>
            <motion.div
              style={{ x: rightPanelX }}
              className="w-1/2 h-full bg-white border-l border-brand-blue-100 flex items-center justify-start pl-12 shadow-[-20px_0_50px_rgba(9,80,246,0.15)]"
            >
              <div className="text-left opacity-0 md:opacity-100">
                <span className="font-subheading text-xs tracking-widest text-brand-blue-500/40 uppercase block">FLOTA PROPIA 100%</span>
                <span className="font-display text-4xl text-brand-blue-500 uppercase">CERO TERCERIZACIÓN</span>
              </div>
            </motion.div>
          </div>

          {/* Glowing accent dots at centre */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-brand-yellow-500/30 animate-ping" />
              <div className="w-4 h-4 rounded-full bg-brand-yellow-500 shadow-[0_0_20px_#FFEC01]" />
            </div>
          </div>

          {/* Wordmark on top split into two spans */}
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
            <span className="font-subheading text-xs md:text-sm uppercase tracking-[0.3em] text-brand-yellow-500 mb-3 bg-brand-blue-500/90 px-4 py-1.5 rounded-full border border-brand-yellow-500/30">
              CENTRO DE AYUDA Y ASISTENCIA TÉCNICA
            </span>
            <h1 className="font-display text-5xl md:text-8xl tracking-tight text-white uppercase drop-shadow-lg flex flex-col md:flex-row gap-2 md:gap-6">
              <span>PREGUNTAS</span>
              <span className="text-brand-yellow-500">FRECUENTES.</span>
            </h1>
            <p className="font-sans text-white/80 max-w-xl text-sm md:text-base mt-4 font-light">
              Desplazate hacia abajo para abrir el portal y consultar todas las dudas sobre tarifas, tiempos y operatoria logística.
            </p>
          </div>

          {/* Corner metadata pins */}
          <div className="relative z-45 p-6 md:p-10 flex justify-between items-start text-white/70 font-mono text-xs uppercase tracking-widest">
            <div>[MDP / 38.0055° S, 57.5425° W]</div>
            <div>[EST. 2026 // DOSRUEDAS]</div>
          </div>

          <div className="relative z-45 p-6 md:p-10 flex justify-between items-end text-white/70 font-mono text-xs uppercase tracking-widest">
            <div>SCROLL PARA EXPLORAR</div>
            <div>[FAQ PORTAL V2.4]</div>
          </div>

        </div>
      </section>

      {/* 2. STATEMENT FOLD */}
      <section className="relative min-h-dvh py-28 md:py-40 bg-white text-brand-blue-500 px-6 md:px-16 flex flex-col justify-center border-b border-brand-blue-100">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-mono text-xs tracking-wider uppercase mb-6 border border-brand-blue-100">
              <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
              SOPORTE 24/7 Y GUÍA OPERATIVA
            </div>
            
            <h2 className="font-display uppercase tracking-tight leading-[0.95] text-[clamp(28px,4vw,56px)] text-brand-blue-500 max-w-[22ch]">
              TODO LO QUE NECESITÁS SABER PARA <span className="text-brand-yellow-500 bg-brand-blue-500 px-2 py-0.5 rounded">OPTIMIZAR TUS ENVÍOS</span> EN MAR DEL PLATA SIN INTERMEDIARIOS.
            </h2>

            <p className="font-sans text-brand-blue-500/70 text-base md:text-lg mt-8 max-w-2xl leading-relaxed font-light">
              Respuestas claras, directas y transparentes sobre nuestros modelos de cadetería express, cuentas corrientes corporativas y logística para tiendas online.
            </p>
          </div>

          {/* Outlined index numeral (-webkit-text-stroke) */}
          <div className="lg:col-span-4 flex justify-end relative">
            <div
              className="font-display text-[160px] md:text-[240px] leading-none select-none pointer-events-none opacity-20 text-right"
              style={{
                WebkitTextStroke: '2px #0950F6',
                color: 'transparent',
              }}
            >
              01
            </div>

            {/* Circular image floating off right edge */}
            <motion.div
              style={{ rotate: floatRotate, y: floatY }}
              className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-brand-yellow-500 opacity-90 z-20 pointer-events-none hidden sm:block"
            >
              <Image
                src="/assets/abstracto-background.jpg"
                alt="Floating circular element"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. RELEASES SECTION */}
      <section className="py-24 md:py-36 bg-[#F8FAFC] text-brand-blue-500 px-6 md:px-16 border-b border-brand-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Column 1: Headline, lede and two buttons */}
            <div className="space-y-6">
              <span className="font-subheading text-xs tracking-[0.2em] uppercase text-brand-blue-500/60 block">
                [CENTRO DE CONSULTAS Y RECURSOS]
              </span>
              <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-brand-blue-500">
                BUSCADOR DE PREGUNTAS FRECUENTES Y TÉRMINOS
              </h3>
              <p className="font-sans text-brand-blue-500/70 text-base font-light leading-relaxed">
                Utilizá nuestro buscador interactivo o filtrá por categoría para resolver al instante cualquier consulta sobre tarifas, tiempos de entrega y métodos de facturación.
              </p>

              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-blue-500/40" />
                <input
                  type="text"
                  placeholder="Buscar duda, tarifa o servicio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-brand-blue-200 rounded-xl pl-12 pr-4 py-3.5 text-brand-blue-500 placeholder:text-brand-blue-500/40 focus:outline-none focus:border-brand-blue-500 transition-colors shadow-sm font-sans text-sm"
                />
              </div>

              {/* Category selector pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(['TODOS', 'TARIFAS', 'LOGÍSTICA', 'PAGOS'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                      activeCategory === cat
                        ? 'bg-brand-blue-500 text-brand-yellow-500 font-bold shadow-md'
                        : 'bg-white text-brand-blue-500 border border-brand-blue-200 hover:border-brand-blue-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Two buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-brand-yellow-500 text-brand-blue-500 font-subheading tracking-wider text-sm px-6 py-3.5 rounded-xl hover:brightness-105 transition-all shadow-[4px_4px_0px_#0950F6]"
                >
                  <span>CONSULTAR POR WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 bg-white text-brand-blue-500 font-subheading tracking-wider text-sm px-6 py-3.5 rounded-xl border border-brand-blue-200 hover:bg-brand-blue-50 transition-all"
                >
                  <span>VER TODOS LOS SERVICIOS</span>
                </Link>
              </div>
            </div>

            {/* Column 2: Deck square with hint line and progress dots */}
            <div className="bg-white border border-brand-blue-200 rounded-2xl p-6 md:p-8 shadow-[12px_12px_0px_rgba(9,80,246,0.08)] relative flex flex-col justify-between min-h-[480px]">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-brand-blue-100 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-blue-500/60">[DECK DE PREGUNTAS CLAVE]</span>
                  <span className="px-2.5 py-1 rounded bg-brand-yellow-500 text-brand-blue-500 font-mono text-xs font-bold uppercase">
                    {filteredFaqs.length} RESULTADOS
                  </span>
                </div>

                <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2">
                  {filteredFaqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`border rounded-xl transition-all overflow-hidden ${
                          isOpen ? 'border-brand-blue-500 bg-brand-blue-50/40 shadow-sm' : 'border-brand-blue-100 hover:border-brand-blue-300 bg-white'
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-yellow-500 flex-shrink-0" />
                            <span className="font-subheading tracking-wide uppercase text-sm text-brand-blue-500">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-brand-blue-500 transition-transform ${isOpen ? 'rotate-90 text-brand-yellow-500' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 border-t border-brand-blue-100/60 font-sans text-xs md:text-sm text-brand-blue-500/80 leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-12 text-brand-blue-500/60 font-sans text-sm">
                      No se encontraron resultados para tu búsqueda. Escribinos directamente a WhatsApp para ayudarte.
                    </div>
                  )}
                </div>
              </div>

              {/* Hint line & progress dots */}
              <div className="pt-6 border-t border-brand-blue-100 flex items-center justify-between text-xs font-mono text-brand-blue-500/50">
                <span>[HINT: CLIC EN CADA DUDA PARA DESPLEGAR]</span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-blue-500" />
                  <span className="w-2 h-2 rounded-full bg-brand-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-brand-blue-200" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. ROSTER AND DATES */}
      <section className="py-24 md:py-36 bg-white text-brand-blue-500 px-6 md:px-16 border-b border-brand-blue-100">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hairline-ruled rows */}
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-brand-blue-200 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-blue-500/60">
                [CATEGORÍAS DE COBERTURA Y HORARIOS OPERATIVOS]
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-500 px-3 py-1 rounded">
                ESTADO: 100% ACTIVO
              </span>
            </div>

            <div className="divide-y divide-brand-blue-100">
              {[
                { label: 'ZONA CENTRO Y MICROCENTRO', name: 'ENTREGA RÁPIDA 30-45 MIN', count: '12 CADETES' },
                { label: 'ZONA NORTE Y LA PERLA', name: 'COBERTURA ESTÁNDAR Y FLEX', count: '18 CADETES' },
                { label: 'ZONA PUERTO Y ALTO ALFAR', name: 'RUTEO DIARIO Y RECOLECCIÓN', count: '10 CADETES' },
                { label: 'CORREDOR RUTA 88 / PARQUE INDUSTRIAL', name: 'LOGÍSTICA B2B Y EMPRESAS', count: '8 CADETES' },
              ].map((row, idx) => (
                <div key={idx} className="py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:bg-brand-blue-50/50 px-4 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand-yellow-500 bg-brand-blue-500 px-2 py-0.5 rounded">
                      {row.label}
                    </span>
                    <span className="font-display text-lg uppercase tracking-wide text-brand-blue-500">
                      {row.name}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-brand-blue-500/70 uppercase">
                    {row.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dates table with uppercase headers over a hairline */}
          <div>
            <div className="pb-4 border-b border-brand-blue-200 mb-6 flex justify-between items-center">
              <h4 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                CRONOGRAMA DE TURNOS Y TARIFAS VIGENTES
              </h4>
              <span className="font-mono text-xs text-brand-blue-500/50">[ACTUALIZADO NOV 2026]</span>
            </div>

            <div className="border border-brand-blue-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="hidden md:grid grid-cols-4 bg-brand-blue-500 text-white font-mono text-xs uppercase tracking-wider p-4 border-b border-brand-blue-100">
                <div>FRANJA HORARIA</div>
                <div>TIPO DE SERVICIO</div>
                <div>DEMORA ESTIMADA</div>
                <div className="text-right">TARIFA BASE</div>
              </div>

              <div className="divide-y divide-brand-blue-100">
                {[
                  { time: '08:00 - 13:00 HS', service: 'MERCADO ENVÍOS FLEX', delay: 'MISMO DÍA (TARDE)', rate: 'CONSULTAR COTIZADOR' },
                  { time: '09:00 - 18:00 HS', service: 'ENVÍOS EXPRESS', delay: 'HASTA 3 HORAS', rate: 'TARIFA ZONAL' },
                  { time: '08:00 - 19:00 HS', service: 'ENVÍOS LOWCOST', delay: 'PROGRAMADO 24HS', rate: '15% OFF' },
                  { time: '24 HORAS', service: 'MARDELIVERY GASTRONOMÍA', delay: 'INMEDIATO', rate: 'POR COMERCIO' },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-4 p-4 gap-2 md:gap-0 items-center hover:bg-brand-blue-50/40 transition-colors">
                    <div className="font-mono text-xs font-bold text-brand-yellow-500 bg-brand-blue-500 md:bg-transparent md:text-brand-blue-500 px-2 py-1 md:p-0 rounded">
                      {item.time}
                    </div>
                    <div className="font-display text-base uppercase text-brand-blue-500">
                      {item.service}
                    </div>
                    <div className="font-sans text-xs text-brand-blue-500/70 uppercase">
                      {item.delay}
                    </div>
                    <div className="font-mono text-xs font-bold text-brand-blue-500 md:text-right">
                      {item.rate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CLOSE SECTION */}
      <section className="relative pt-24 pb-12 bg-brand-blue-500 text-white px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="font-subheading text-xs tracking-widest text-brand-yellow-500 uppercase block mb-2">
                [¿TENÉS OTRA DUDA ESPECÍFICA?]
              </span>
              <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white max-w-xl">
                ESTAMOS LISTOS PARA RESOLVER LA LOGÍSTICA DE TU EMPRESA.
              </h3>
            </div>

            {/* Two buttons at opposite edge */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-brand-yellow-500 text-brand-blue-500 font-subheading tracking-wider text-sm px-6 py-3.5 rounded-xl hover:brightness-105 transition-all shadow-lg"
              >
                <span>CONTACTAR A SOPORTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-subheading tracking-wider text-sm px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>VOLVER AL INICIO</span>
              </Link>
            </div>
          </div>

          {/* Fine print line */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-white/60 font-mono text-xs uppercase tracking-widest">
            <div>[ENVIOS DOSRUEDAS S.R.L. // MAR DEL PLATA, BUENOS AIRES]</div>
            <div>[TODOS LOS DERECHOS RESERVADOS 2026]</div>
          </div>

          {/* Hairline footer strip */}
          <div className="w-full h-[1px] bg-white/20" />

        </div>

        {/* Wordmark full width, translated down slightly so page edge crops it */}
        <div className="w-full text-center overflow-hidden pointer-events-none select-none mt-8 -mb-12">
          <h2 className="font-display text-[18vw] leading-none text-white/10 uppercase tracking-tighter translate-y-12">
            DOSRUEDAS.
          </h2>
        </div>

      </section>

    </div>
  );
}

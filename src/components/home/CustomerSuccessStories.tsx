'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Building2,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';
import { trackAnalytics } from '@/lib/analytics';

export interface MerchantStory {
  id: string;
  merchantName: string;
  category: 'E-Commerce' | 'Indumentaria' | 'Tecnología' | 'Juguetería' | 'Gastronomía';
  zone: string;
  monthlyVolume: string;
  rating: number;
  headline: string;
  review: string;
  ownerName: string;
  ownerRole: string;
  impactMetric: string;
  badgeColor: string;
}

export const MERCHANT_STORIES: MerchantStory[] = [
  {
    id: 'toy-piola',
    merchantName: 'Toy Piola Juguetería',
    category: 'Juguetería',
    zone: 'Zona Güemes · Mar del Plata',
    monthlyVolume: '+210 envíos/mes',
    rating: 5,
    headline: '“Nuestros clientes en MDQ reciben sus regalos en 3 horas”',
    review:
      'Desde que sumamos el servicio Express y LowCost de Envíos DosRuedas, multiplicamos las ventas online. El cobro contra reembolso rinde en 24 hs impecable y los cadetes tratan los paquetes con muchísimo cuidado.',
    ownerName: 'Lucía Fernández',
    ownerRole: 'Titular de E-Commerce',
    impactMetric: '99.8% entregas en regla',
    badgeColor: 'bg-brand-blue-500 text-white',
  },
  {
    id: 'starcel',
    merchantName: 'Starcel Accesorios',
    category: 'Tecnología',
    zone: 'Microcentro · Mar del Plata',
    monthlyVolume: '+340 envíos/mes',
    rating: 5,
    headline: '“Puntualidad absoluta en Mercado Envíos Flex”',
    review:
      'En accesorios celulares la velocidad de entrega es clave para ganar en Mercado Libre. DosRuedas retira todos los días a las 15:00 hs y a las 19:00 hs ya están todos los paquetes entregados en la ciudad.',
    ownerName: 'Gonzalo Torres',
    ownerRole: 'Gerente Operativo',
    impactMetric: 'MercadoLíder Platinum',
    badgeColor: 'bg-brand-yellow-500 text-brand-blue-900',
  },
  {
    id: 'ama-pola',
    merchantName: 'Ama & Pola Indumentaria',
    category: 'Indumentaria',
    zone: 'Plaza Mitre · Mar del Plata',
    monthlyVolume: '+160 envíos/mes',
    rating: 5,
    headline: '“Cuenta corriente transparente y rendición de dinero al día”',
    review:
      'Tener cadetería fija propia sin tener que lidiar con seguros ni contrataciones nos cambió la vida. Las clientas destacan la amabilidad del repartidor y el seguimiento por WhatsApp.',
    ownerName: 'Mariana & Paula',
    ownerRole: 'Fundadoras',
    impactMetric: '100% cobro garantizado',
    badgeColor: 'bg-brand-blue-400 text-white',
  },
  {
    id: 'dropix-3d',
    merchantName: 'Dropix 3D Impresiones',
    category: 'E-Commerce',
    zone: 'Parque Luro · Mar del Plata',
    monthlyVolume: '+120 envíos/mes',
    rating: 5,
    headline: '“Manejo delicado de piezas 3D frágiles”',
    review:
      'Hacemos piezas impresas en 3D muy delicadas. Antes teníamos roturas con repartidores informales, pero la flota propia de motos de DosRuedas traslada todo perfecto. Cero reclamos en 2 años.',
    ownerName: 'Esteban Rivas',
    ownerRole: 'Director de Producción',
    impactMetric: '0% índice de roturas',
    badgeColor: 'bg-brand-blue-300 text-white',
  },
  {
    id: 'el-condor',
    merchantName: 'El Cóndor Repuestos',
    category: 'Tecnología',
    zone: 'Av. Juan B. Justo · Mar del Plata',
    monthlyVolume: '+280 envíos/mes',
    rating: 5,
    headline: '“Logística B2B entre talleres y distribuidoras de MDQ”',
    review:
      'Movemos repuestos urgentes para talleres mecánicos de toda la ciudad. Con el plan corporativo pagamos con factura A quincenal y la trazabilidad con código EDR nos permite dar certeza total.',
    ownerName: 'Roberto M. Cóndor',
    ownerRole: 'Administración B2B',
    impactMetric: 'Respuesta B2B < 15 min',
    badgeColor: 'bg-brand-blue-500 text-white',
  },
  {
    id: 'urbancow',
    merchantName: 'UrbanCow MDQ',
    category: 'Indumentaria',
    zone: 'Zona Alem · Mar del Plata',
    monthlyVolume: '+190 envíos/mes',
    rating: 5,
    headline: '“Retiros programados sin costo directo en nuestro local”',
    review:
      'El servicio LowCost agrupado es súper económico para nuestras clientas locales. Cargamos los envíos directo y nos olvidamos. Es la mejor alianza logística de Mar del Plata.',
    ownerName: 'Sofía & Gastón',
    ownerRole: 'Gestión Comercial',
    impactMetric: 'Ahorro logístico del 35%',
    badgeColor: 'bg-brand-yellow-500 text-brand-blue-900',
  },
];

const CATEGORIES = ['Todos', 'E-Commerce', 'Indumentaria', 'Tecnología', 'Juguetería'] as const;

export default function CustomerSuccessStories() {
  const reduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter stories based on category selection
  const filteredStories =
    selectedCategory === 'Todos'
      ? MERCHANT_STORIES
      : MERCHANT_STORIES.filter((s) => s.category === selectedCategory);

  const totalStories = filteredStories.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalStories);
  }, [totalStories]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalStories) % totalStories);
  }, [totalStories]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
    trackAnalytics.ctaClick(`testimonial_category_${cat}`, cat);
  };

  // Auto-rotation timer
  useEffect(() => {
    if (!isRotating || isHovered || reduceMotion || totalStories <= 1) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRotating, isHovered, reduceMotion, totalStories, handleNext]);

  // Get current story and next story for 2-column or 3-column grid display
  const currentStory = filteredStories[activeIndex % totalStories];
  const secondStory = filteredStories[(activeIndex + 1) % totalStories];
  const thirdStory = filteredStories[(activeIndex + 2) % totalStories];

  const visibleStories = [currentStory, secondStory, thirdStory].filter(
    (item, index, self) => item && self.findIndex((s) => s.id === item.id) === index
  );

  return (
    <section
      id="customer-success-stories"
      aria-labelledby="success-stories-title"
      className="content-auto relative py-20 lg:py-28 bg-white border-b border-brand-blue-50/80 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative Halos */}
      <div
        className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 text-xs font-mono font-bold uppercase tracking-wider border border-brand-blue-100">
              <Building2 className="w-3.5 h-3.5 text-brand-blue-500" />
              <span>Casos de Éxito · Comercios de Mar del Plata</span>
            </div>

            <h2
              id="success-stories-title"
              className="font-display text-3xl sm:text-5xl lg:text-6xl leading-hero tracking-tight uppercase text-brand-blue-500 text-balance"
            >
              Comercios locales que{' '}
              <span className="text-brand-yellow-500 bg-brand-blue-500 px-3 py-0.5 rounded-xl inline-block shadow-xs">
                crecen
              </span>{' '}
              con nuestra flota
            </h2>

            <p className="font-sans text-base sm:text-lg text-brand-blue-500/80 font-light leading-relaxed text-balance">
              Conocé los testimonios reales de tiendas online, distribuidoras y locales marplatenses que confían sus envíos diarios a Envíos DosRuedas.
            </p>
          </div>

          {/* Carousel & Rotation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start lg:self-end">
            <button
              type="button"
              onClick={() => setIsRotating((prev) => !prev)}
              aria-pressed={isRotating}
              className={`min-h-11 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer inline-flex items-center gap-2 ${
                isRotating
                  ? 'bg-brand-blue-500 text-white border-brand-blue-500 shadow-sm'
                  : 'bg-white text-brand-blue-500 border-brand-blue-200 hover:bg-brand-blue-50'
              }`}
            >
              {isRotating ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-brand-yellow-500 fill-current" />
                  <span>Rotación Activa</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-brand-blue-500 fill-current" />
                  <span>Pausado</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-brand-blue-50 hover:bg-brand-blue-500 hover:text-white border border-brand-blue-200 text-brand-blue-500 cursor-pointer transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500"
                aria-label="Historia anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-brand-blue-50 hover:bg-brand-blue-500 hover:text-white border border-brand-blue-200 text-brand-blue-500 cursor-pointer transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500"
                aria-label="Siguiente historia"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-brand-blue-100/60 pb-4">
          <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase mr-2">
            Filtrar por rubro:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-brand-blue-500 text-white shadow-xs'
                    : 'bg-brand-blue-50 text-brand-blue-500 hover:bg-brand-blue-100 border border-brand-blue-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid Carousel Cards */}
        <div className="relative min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${activeIndex}`}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            >
              {visibleStories.map((story) => (
                <DoubleBezelCard
                  key={story.id}
                  variant="light"
                  className="h-full flex flex-col justify-between"
                  innerClassName="p-6 sm:p-7 flex flex-col justify-between h-full bg-white hover:bg-brand-blue-50/20 transition-colors"
                >
                  <div className="space-y-4">
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-500" />
                        Comercio Verificado
                      </span>

                      <span className="font-mono text-xs font-extrabold text-brand-blue-500 bg-brand-yellow-100 px-2.5 py-0.5 rounded-md border border-brand-yellow-200">
                        {story.monthlyVolume}
                      </span>
                    </div>

                    {/* Star Rating & Category */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 text-brand-yellow-500">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-yellow-500 text-brand-yellow-500" />
                        ))}
                      </div>
                      <span className="text-2xs font-mono font-bold text-brand-blue-400 uppercase">
                        {story.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500 leading-snug">
                      {story.headline}
                    </h3>

                    {/* Review Body */}
                    <p className="font-sans text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed font-light">
                      {story.review}
                    </p>
                  </div>

                  {/* Merchant Details Footer */}
                  <div className="pt-4 mt-6 border-t border-brand-blue-50 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <b className="block font-subheading text-base uppercase text-brand-blue-500 font-bold leading-none">
                          {story.merchantName}
                        </b>
                        <span className="text-xs font-sans text-brand-blue-400">
                          {story.ownerName} · {story.ownerRole}
                        </span>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-brand-blue-500 text-brand-yellow-500 font-display font-bold flex items-center justify-center shrink-0 shadow-xs text-sm">
                        {story.merchantName.charAt(0)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-brand-blue-400 pt-1">
                      <span className="flex items-center gap-1 text-brand-blue-500">
                        <MapPin className="w-3 h-3 text-brand-blue-500" />
                        {story.zone}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-brand-blue-500">
                        <TrendingUp className="w-3 h-3 text-brand-blue-500" />
                        {story.impactMetric}
                      </span>
                    </div>
                  </div>
                </DoubleBezelCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-brand-blue-500 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-brand-yellow-500 uppercase tracking-widest block">
              Sumá tu comercio en Mar del Plata
            </span>
            <h3 className="font-display text-2xl uppercase tracking-tight text-white">
              ¿Querés despachar tus productos con la flota número 1 de la ciudad?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-brand-blue-50/90 font-light">
              Abrí tu cuenta corriente sin costo de mantenimiento ni volumen mínimo obligatorio.
            </p>
          </div>

          <CTANestedPill
            href="/servicios/plan-emprendedores"
            variant="primary"
            size="large"
            className="shrink-0"
            onClick={() =>
              trackAnalytics.ctaClick('success_stories_banner_cta', 'Conocer Plan Emprendedores')
            }
          >
            <span>Conocer Plan Emprendedores</span>
          </CTANestedPill>
        </div>
      </div>
    </section>
  );
}

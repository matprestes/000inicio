'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  Zap,
  CloudRain,
  Timer,
  PackageCheck,
  ArrowRight,
  Layers,
  SlidersHorizontal,
  Route,
  CheckCircle2,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Badge } from '@/components/ui/Badge';
import {
  calculateExpressPrice,
  EXPRESS_PRICE_PER_KM,
  EXPRESS_TIERS,
} from '@/lib/pricing';
import {
  CONSULT_THRESHOLD_KM,
  EXPRESS_CUTOFF_TIME,
  EXPRESS_LEAD_TIME,
  EXPRESS_WINDOW_SHORT,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
  WAIT_TOLERANCE_MIN,
  WAIT_CHARGE_ARS,
  RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST,
  EXTRA_STOP_SURCHARGE_PERCENT,
  BULK_EXTRA_FROM_ARS,
  SUPPORT_PHONE,
} from '@/lib/promises';

const formatArs = (val: number) => `$${val.toLocaleString('es-AR')}`;
const whatsappClean = (SUPPORT_PHONE || '+54 223 660-2699').replace(/\D/g, '');

interface ZoneInfo {
  id: number;
  name: string;
  rangeKm: string;
  price: number;
  badge: string;
  tagline: string;
  barrios: string[];
  theme: 'white' | 'yellow';
}

const ZONES_DATA: ZoneInfo[] = [
  {
    id: 1,
    name: 'Zona 1',
    rangeKm: '0 a 3 km',
    price: EXPRESS_TIERS[0].price,
    badge: 'Microcentro & Cercanías',
    tagline: 'Mandados rápidos dentro del barrio o zonas aledañas inmediatas.',
    barrios: ['Centro', 'La Perla', 'Macrocentro', 'Plaza Mitre', 'Güemes'],
    theme: 'yellow',
  },
  {
    id: 2,
    name: 'Zona 2',
    rangeKm: '3 a 5 km',
    price: EXPRESS_TIERS[1].price,
    badge: 'Cruces Interbarriales',
    tagline: 'Conexión ágil entre barrios consolidados y zonas comerciales.',
    barrios: ['Chauvín', 'San José', 'Los Troncos', 'Playa Grande', 'Pompeya'],
    theme: 'white',
  },
  {
    id: 3,
    name: 'Zona 3',
    rangeKm: '5 a 7 km',
    price: EXPRESS_TIERS[2].price,
    badge: 'Más Frecuente en MDQ',
    tagline: 'De una punta a otra de la ciudad sin demoras intermedias.',
    barrios: ['Puerto', 'Constitución', 'Caisamar', 'Punta Mogotes', 'Parque Luro'],
    theme: 'yellow',
  },
  {
    id: 4,
    name: 'Zona 4',
    rangeKm: '7 a 10 km',
    price: EXPRESS_TIERS[3].price,
    badge: 'Perímetro Urbano',
    tagline: 'Recorridos extensos dentro de los límites del ejido urbano.',
    barrios: ['Alfar', 'Faro', 'Bosque Peralta Ramos', 'Aeropuerto', 'Parque Camet'],
    theme: 'white',
  },
];

const PRESETS = [
  { label: 'Centro / Güemes', km: 2 },
  { label: 'Chauvín a Playa Grande', km: 4 },
  { label: 'Centro a Puerto', km: 6.5 },
  { label: 'Macrocentro a Alfar', km: 8.5 },
  { label: 'Centro a Aeropuerto', km: 13 },
  { label: 'Interurbano Batán/Sierra', km: 22 },
];

export default function ExpressPricing() {
  const [activeTab, setActiveTab] = useState<'grid' | 'calculator'>('grid');
  const [simulatedKm, setSimulatedKm] = useState<number>(6.5);
  const [selectedExcedenteExample, setSelectedExcedenteExample] = useState<number>(12);

  // Cálculo en vivo para el simulador
  const calculatedRaw = calculateExpressPrice(simulatedKm, []);
  const isConsult = calculatedRaw === 'consultar';
  const calculatedPrice = typeof calculatedRaw === 'number' ? calculatedRaw : 0;

  // Zona asignada según los km
  const activeZone =
    simulatedKm <= 3
      ? ZONES_DATA[0]
      : simulatedKm <= 5
        ? ZONES_DATA[1]
        : simulatedKm <= 7
          ? ZONES_DATA[2]
          : simulatedKm <= 10
            ? ZONES_DATA[3]
            : null;

  const excedenteExamplePrice = calculateExpressPrice(selectedExcedenteExample, []);

  const whatsappMessage = encodeURIComponent(
    isConsult
      ? `Hola Envíos DosRuedas! Quiero consultar cotización para un envío Express especial de más de 20 km (aprox. ${simulatedKm} km).`
      : `Hola Envíos DosRuedas! Necesito un envío Express de aprox. ${simulatedKm} km (${formatArs(calculatedPrice)}). Franja de 3 hs.`
  );

  return (
    <section
      id="tarifario-express"
      aria-label="Tarifario oficial y simulador de envíos Express en Mar del Plata"
      className="py-20 lg:py-28 bg-brand-blue-500 text-white relative z-10 overflow-hidden border-y border-brand-blue-400"
    >
      {/* Background visual accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow-500/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-0 w-80 h-80 bg-white/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-yellow-500/30 text-brand-yellow-500 text-xs font-subheading uppercase tracking-widest -rotate-1 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>TARIFARIO OFICIAL 2026 · MAR DEL PLATA</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
            Pagás por distancia real,{' '}
            <span className="bg-brand-yellow-500 text-brand-blue-500 px-3 py-0.5 rounded-xl inline-block shadow-glow-yellow">
              no por apuro
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 leading-relaxed max-w-2xl mx-auto">
            Tarifa fija según los kilómetros exactos entre retiro y entrega, calculados punto a punto en el mapa.
            Sabés el precio antes de confirmar y coordinás directo por WhatsApp.
          </p>

          {/* Selector de Vista: Cuadrícula vs Simulador */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-brand-blue-600/70 border border-white/20 shadow-md backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setActiveTab('grid')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-subheading text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeTab === 'grid'
                    ? 'bg-brand-yellow-500 text-brand-blue-500 shadow-md'
                    : 'text-white hover:text-brand-yellow-400 hover:bg-white/10'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Tarifario por Zonas</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('calculator')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-subheading text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeTab === 'calculator'
                    ? 'bg-brand-yellow-500 text-brand-blue-500 shadow-md'
                    : 'text-white hover:text-brand-yellow-400 hover:bg-white/10'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Simulador de Kilómetros</span>
              </button>
            </div>
          </div>
        </div>

        {/* VISTA 1: CUADRÍCULA DE ZONAS */}
        {activeTab === 'grid' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Grid 4 Tiers: Zona 1 y 3 en Amarillo (Diseño Z3), Zona 2 y 4 en Blanco */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ZONES_DATA.map((zone) => {
                const isYellow = zone.theme === 'yellow';

                return (
                  <div
                    key={zone.id}
                    className={`rounded-2xl p-2 sm:p-2.5 transition-all duration-300 flex flex-col justify-between relative shadow-xl hover:scale-[1.02] ${
                      isYellow
                        ? 'bg-brand-yellow-400 border-2 border-brand-yellow-300 ring-4 ring-brand-yellow-500/30'
                        : 'bg-white border-2 border-white/95 shadow-2xl'
                    }`}
                  >
                    {/* Badge superior flotante para todas las tarjetas */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <Badge
                        variant="neutral"
                        size="sm"
                        icon={
                          isYellow ? (
                            zone.id === 1 ? (
                              <Zap className="w-3 h-3 fill-current text-brand-yellow-500" />
                            ) : (
                              <Star className="w-3 h-3 fill-current text-brand-yellow-500" />
                            )
                          ) : zone.id === 2 ? (
                            <Route className="w-3 h-3 text-brand-blue-500" />
                          ) : (
                            <MapPin className="w-3 h-3 text-brand-blue-500" />
                          )
                        }
                        className={
                          isYellow
                            ? 'bg-brand-blue-500 text-brand-yellow-500 border border-brand-blue-400 shadow-md text-2xs uppercase tracking-wider font-bold whitespace-nowrap'
                            : 'bg-white text-brand-blue-500 border border-brand-blue-200 shadow-md text-2xs uppercase tracking-wider font-bold whitespace-nowrap'
                        }
                      >
                        {zone.badge}
                      </Badge>
                    </div>

                    <div
                      className={`rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full relative ${
                        isYellow
                          ? 'bg-brand-yellow-500 text-brand-blue-500'
                          : 'bg-white text-brand-blue-900'
                      }`}
                    >
                      <div className="space-y-4">
                        {/* Top metadata */}
                        <div className="flex items-center justify-between gap-2 pt-1">
                          <span
                            className={`font-mono text-xs uppercase tracking-widest font-bold px-2.5 py-1 rounded-md ${
                              isYellow
                                ? 'bg-brand-blue-500 text-brand-yellow-500 shadow-2xs'
                                : 'bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200'
                            }`}
                          >
                            {zone.name}
                          </span>

                          <span
                            className={`text-xs font-mono font-bold ${
                              isYellow ? 'text-brand-blue-900/90' : 'text-brand-blue-600'
                            }`}
                          >
                            {zone.rangeKm}
                          </span>
                        </div>

                        {/* Price display */}
                        <div className="space-y-0.5">
                          <div className="flex items-baseline gap-1">
                            <span
                              className={`font-mono text-4xl sm:text-5xl font-bold tracking-tight ${
                                isYellow ? 'text-brand-blue-500' : 'text-brand-blue-500'
                              }`}
                            >
                              {formatArs(zone.price)}
                            </span>
                          </div>
                          <span
                            className={`text-2xs font-subheading uppercase tracking-wider block font-bold ${
                              isYellow ? 'text-brand-blue-900/80' : 'text-brand-blue-900/70'
                            }`}
                          >
                            Tarifa fija por viaje
                          </span>
                        </div>

                        {/* Tagline & Reference barrios */}
                        <div className="space-y-2">
                          <p
                            className={`font-sans text-xs sm:text-sm leading-relaxed ${
                              isYellow ? 'text-brand-blue-900 font-medium' : 'text-slate-700'
                            }`}
                          >
                            {zone.tagline}
                          </p>

                          <div className="pt-2">
                            <span
                              className={`text-2xs font-mono uppercase tracking-wider font-bold block mb-1.5 ${
                                isYellow ? 'text-brand-blue-900' : 'text-brand-blue-600'
                              }`}
                            >
                              Barrios de referencia:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {zone.barrios.map((barrio) => (
                                <span
                                  key={barrio}
                                  className={`text-2xs font-sans px-2 py-0.5 rounded font-medium ${
                                    isYellow
                                      ? 'bg-brand-yellow-400 text-brand-blue-900 border border-brand-yellow-300'
                                      : 'bg-brand-blue-50/90 text-brand-blue-950 border border-brand-blue-200/90'
                                  }`}
                                >
                                  {barrio}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Core guarantees */}
                        <ul
                          className={`space-y-2 pt-3 border-t text-xs font-sans font-medium ${
                            isYellow
                              ? 'border-brand-blue-500/20 text-brand-blue-900'
                              : 'border-slate-200 text-slate-800'
                          }`}
                        >
                          <li className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 shrink-0 text-brand-blue-500" />
                            <span>{EXPRESS_WINDOW_SHORT} a elección</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <PackageCheck className="w-3.5 h-3.5 shrink-0 text-brand-blue-500" />
                            <span>Hasta {STANDARD_WEIGHT_KG} kg ({STANDARD_BULLET_DIMENSIONS_CM})</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-brand-blue-500" />
                            <span>Corte {EXPRESS_CUTOFF_TIME} · Con {EXPRESS_LEAD_TIME}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Card Action */}
                      <div
                        className={`pt-5 mt-5 border-t ${
                          isYellow ? 'border-brand-blue-500/20' : 'border-slate-200'
                        }`}
                      >
                        <Link
                          href={`/cotizar?servicio=express&zona=${zone.id}`}
                          className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-subheading text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md ${
                            isYellow
                              ? 'bg-brand-blue-500 hover:bg-brand-blue-600 text-brand-yellow-500'
                              : 'bg-brand-blue-500 hover:bg-brand-blue-600 text-white'
                          }`}
                        >
                          <span>Cotizar {zone.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Banner de Excedente (> 10 km hasta 20 km) con FONDO BLANCO y Callout AMARILLO */}
            <div className="rounded-3xl p-2 sm:p-3 bg-white border border-white/90 shadow-2xl text-brand-blue-500">
              <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-3 max-w-2xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200 rounded-full text-2xs font-mono font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>MÁS DE 10 KM DENTRO DEL EJIDO URBANO</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500 leading-tight">
                    Cálculo lineal a {formatArs(EXPRESS_PRICE_PER_KM)} por km total
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-brand-blue-900/80 leading-relaxed">
                    Superados los 10 km, el costo se calcula multiplicando los kilómetros totales por el coeficiente oficial de {formatArs(EXPRESS_PRICE_PER_KM)}/km, hasta el umbral de {CONSULT_THRESHOLD_KM} km.
                  </p>

                  {/* Ejemplos interactivos */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
                    <span className="text-brand-blue-500 font-bold">Probar distancia:</span>
                    {[11, 12, 14, 16, 18].map((km) => (
                      <button
                        key={km}
                        type="button"
                        onClick={() => setSelectedExcedenteExample(km)}
                        className={`px-3 py-1 rounded-lg border transition-all ${
                          selectedExcedenteExample === km
                            ? 'bg-brand-blue-500 text-brand-yellow-500 border-brand-blue-500 font-bold shadow-xs'
                            : 'bg-brand-blue-50 text-brand-blue-900 hover:bg-brand-blue-100 border-brand-blue-200'
                        }`}
                      >
                        {km} km = {formatArs(km * EXPRESS_PRICE_PER_KM)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Excedente Callout Box con FONDO AMARILLO */}
                <div className="p-6 rounded-2xl bg-brand-yellow-500 text-brand-blue-500 min-w-68 text-center space-y-3 shrink-0 shadow-lg border border-brand-yellow-400">
                  <span className="text-2xs font-mono uppercase tracking-widest text-brand-blue-900 font-bold block">
                    EJEMPLO SELECCIONADO
                  </span>
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-brand-blue-500">
                    {typeof excedenteExamplePrice === 'number' ? formatArs(excedenteExamplePrice) : 'A consultar'}
                  </div>
                  <span className="text-xs font-sans text-brand-blue-900/90 font-medium block">
                    {selectedExcedenteExample} km de trayecto vial punto a punto
                  </span>

                  <a
                    href={`https://api.whatsapp.com/send/?phone=${whatsappClean}&text=Hola%20Envíos%20DosRuedas!%20Quiero%20pedir%20un%20envío%20Express%20de%20${selectedExcedenteExample}%20km`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 text-brand-yellow-500 font-subheading text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Pedir este tramo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA 2: SIMULADOR INTERACTIVO DE KILÓMETROS con FONDO BLANCO y Resultado AMARILLO */}
        {activeTab === 'calculator' && (
          <div className="max-w-4xl mx-auto animate-in fade-in duration-300 space-y-8">
            <div className="rounded-3xl p-2 sm:p-3 bg-white border border-white/90 shadow-2xl text-brand-blue-500">
              <div className="p-6 sm:p-10 rounded-2xl bg-white space-y-8">
                {/* Simulator Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-blue-100">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 text-xs font-subheading uppercase tracking-widest font-bold border border-brand-blue-200">
                      <Calculator className="w-3.5 h-3.5" />
                      Simulador en Tiempo Real
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
                      Estimá la tarifa exacta de tu viaje
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-brand-blue-500 font-bold">
                    <Route className="w-4 h-4" />
                    <span>Cálculo vial punto a punto</span>
                  </div>
                </div>

                {/* Slider Controller */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="express-km-slider" className="font-subheading text-xs uppercase tracking-wider font-bold text-brand-blue-900">
                      Distancia estimada entre retiro y entrega:
                    </label>
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-blue-500">
                      {simulatedKm} km
                    </span>
                  </div>

                  <input
                    id="express-km-slider"
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={simulatedKm}
                    onChange={(e) => setSimulatedKm(parseFloat(e.target.value))}
                    className="w-full h-3 bg-brand-blue-100 rounded-lg appearance-none cursor-pointer accent-brand-blue-500 focus:outline-none"
                  />

                  <div className="flex justify-between text-2xs font-mono text-brand-blue-400">
                    <span>1 km (Cercanía)</span>
                    <span>10 km (Límite Z4)</span>
                    <span>20 km (Tope automático)</span>
                    <span>25 km (Periferia)</span>
                  </div>
                </div>

                {/* Quick Preset Buttons */}
                <div className="space-y-2 pt-2">
                  <span className="font-subheading text-2xs uppercase tracking-wider text-brand-blue-900 block font-bold">
                    Trayectos típicos en Mar del Plata:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setSimulatedKm(p.km)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all ${
                          simulatedKm === p.km
                            ? 'bg-brand-blue-500 text-brand-yellow-500 font-bold shadow-md'
                            : 'bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-900 border border-brand-blue-200'
                        }`}
                      >
                        {p.label} ({p.km} km)
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Result Showcase Box con FONDO AMARILLO */}
                <div className="p-6 sm:p-8 rounded-2xl bg-brand-yellow-500 text-brand-blue-500 shadow-xl border border-brand-yellow-400 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="px-2.5 py-0.5 rounded text-2xs font-mono font-bold uppercase tracking-wider bg-brand-blue-500 text-brand-yellow-500 shadow-xs">
                        {isConsult
                          ? 'TARIFA ESPECIAL (> 20 KM)'
                          : activeZone
                            ? `${activeZone.name} · ${activeZone.badge}`
                            : 'EXCEDENTE URBANO (> 10 KM)'}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue-500">
                        {isConsult ? 'A consultar' : formatArs(calculatedPrice)}
                      </div>
                      <p className="font-sans text-xs text-brand-blue-950 font-medium">
                        {isConsult
                          ? 'Supera el radio urbano directo. Se cotiza de forma personalizada.'
                          : simulatedKm <= 10
                            ? `Tarifa fija para el tramo de ${activeZone?.rangeKm} (coordinar con ${EXPRESS_LEAD_TIME})`
                            : `Cálculo lineal: ${simulatedKm} km × ${formatArs(EXPRESS_PRICE_PER_KM)} / km (coordinar con ${EXPRESS_LEAD_TIME})`}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <a
                      href={`https://api.whatsapp.com/send/?phone=${whatsappClean}&text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 text-brand-yellow-500 font-subheading text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Pedir por WhatsApp</span>
                    </a>

                    <Link
                      href={`/cotizar?servicio=express&km=${simulatedKm}`}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase tracking-wider font-bold transition-all shadow-md border border-brand-blue-200"
                    >
                      <span>Cotizar en Mapa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recargos Operativos Transparentes con CARDS BLANCAS y AMARILLAS */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-white/20">
          <div className="max-w-3xl mb-8 space-y-2 text-left">
            <span className="text-2xs font-subheading uppercase tracking-widest text-brand-yellow-500 font-bold px-3 py-1 bg-white/10 rounded-full border border-brand-yellow-500/30">
              RECARGOS PUBLICADOS & PREVISIBLES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Condiciones operativas informadas antes de salir
            </h3>
            <p className="font-sans text-xs sm:text-sm text-brand-blue-50/80">
              Sin sorpresas en destino. Estos son los únicos cargos adicionales que aplican según las características del viaje.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Espera en puerta (Blanco) */}
            <div className="p-5 rounded-2xl bg-white text-brand-blue-500 shadow-lg border border-white/90 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue-500">
                <Timer className="w-4 h-4" />
                <h4 className="font-subheading text-xs uppercase font-bold tracking-wider">
                  Espera en puerta
                </h4>
              </div>
              <p className="font-sans text-xs text-brand-blue-900/80 leading-relaxed">
                <strong className="font-bold text-brand-blue-500">{WAIT_TOLERANCE_MIN} min</strong> sin cargo. Luego se suman <strong className="font-bold text-brand-blue-500">{formatArs(WAIT_CHARGE_ARS)}</strong> cada 10 minutos.
              </p>
            </div>

            {/* Card 2: Días de lluvia (Amarillo) */}
            <div className="p-5 rounded-2xl bg-brand-yellow-500 text-brand-blue-500 shadow-lg border border-brand-yellow-400 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue-500">
                <CloudRain className="w-4 h-4" />
                <h4 className="font-subheading text-xs uppercase font-bold tracking-wider">
                  Días de lluvia
                </h4>
              </div>
              <p className="font-sans text-xs text-brand-blue-950 font-medium leading-relaxed">
                Recargo operativo del <strong className="font-bold text-brand-blue-500">+{RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST}%</strong> para garantizar la seguridad de la flota.
              </p>
            </div>

            {/* Card 3: Parada intermedia (Blanco) */}
            <div className="p-5 rounded-2xl bg-white text-brand-blue-500 shadow-lg border border-white/90 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue-500">
                <Route className="w-4 h-4" />
                <h4 className="font-subheading text-xs uppercase font-bold tracking-wider">
                  Parada intermedia
                </h4>
              </div>
              <p className="font-sans text-xs text-brand-blue-900/80 leading-relaxed">
                <strong className="font-bold text-brand-blue-500">+{EXTRA_STOP_SURCHARGE_PERCENT}%</strong> sobre el viaje en paradas sobre la misma ruta (desvío máx. 2 km).
              </p>
            </div>

            {/* Card 4: Bulto especial (Amarillo) */}
            <div className="p-5 rounded-2xl bg-brand-yellow-500 text-brand-blue-500 shadow-lg border border-brand-yellow-400 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue-500">
                <PackageCheck className="w-4 h-4" />
                <h4 className="font-subheading text-xs uppercase font-bold tracking-wider">
                  Bulto especial
                </h4>
              </div>
              <p className="font-sans text-xs text-brand-blue-950 font-medium leading-relaxed">
                Bultos que excedan 5 kg o 40×40×30 cm se cotizan con adicional desde <strong className="font-bold text-brand-blue-500">{formatArs(BULK_EXTRA_FROM_ARS)}</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Micro-Barra de Integridad y Confianza con FONDO BLANCO */}
        <div className="mt-10 p-4 rounded-xl bg-white text-brand-blue-500 border border-white/90 shadow-lg flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-blue-500" />
            Tabla pública sin tarifas dinámicas arbitrarias
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-blue-500" />
            Corte de solicitudes a las {EXPRESS_CUTOFF_TIME}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-blue-500" />
            Base Central: Friuli 1972, Mar del Plata
          </span>
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState } from 'react';
import OptimizedHeader from '@/components/layout/OptimizedHeader';
import OptimizedFooter from '@/components/layout/OptimizedFooter';
import { Sparkles, Copy, Check, Play, ArrowRight, Wand2, Terminal, BookOpen, Layers } from 'lucide-react';

const PRESET_TEMPLATES = [
  {
    title: 'Campaña E-commerce',
    description: 'Redactar anuncios y copys de Instagram para ventas relámpago con entrega en el día.',
    raw: 'Quiero anuncios para redes sociales para mi tienda online de indumentaria destacando envíos rápidos en Mar del Plata.',
    category: 'Marketing y Redes',
    tone: 'Persuasivo',
    format: 'Markdown',
  },
  {
    title: 'Optimización Logística',
    description: 'Estructurar un análisis de rutas y costos de distribución para flotas de motos.',
    raw: 'Necesito calcular rutas óptimas para 25 entregas diarias en Mar del Plata minimizando combustible y tiempos.',
    category: 'Logística y Operaciones',
    tone: 'Técnico',
    format: 'JSON',
  },
  {
    title: 'Atención al Cliente',
    description: 'Crear protocolos de respuesta rápida para demoras climáticas o cambios de dirección.',
    raw: 'Redactar respuestas empáticas y claras para clientes cuyos paquetes sufrieron demora por lluvia en Mar del Plata.',
    category: 'Soporte y Ventas',
    tone: 'Empático',
    format: 'Markdown',
  },
  {
    title: 'Script Python para Tracking',
    description: 'Generar código robusto para integración de APIs de seguimiento de envíos.',
    raw: 'Escribe un script en Python que consulte una API REST de seguimiento y devuelva el estado actual del paquete.',
    category: 'Programación y Datos',
    tone: 'Técnico',
    format: 'Código Python',
  },
];

export default function PromptOptimizerPage() {
  const [rawPrompt, setRawPrompt] = useState('');
  const [category, setCategory] = useState('Logística y Operaciones');
  const [tone, setTone] = useState('Profesional');
  const [outputFormat, setOutputFormat] = useState('Markdown');
  const [targetModel, setTargetModel] = useState('gemini-3.8-flash');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    optimizedPrompt: string;
    recommendedSystemInstruction: string;
    expectedFormat: string;
    tips: string[];
  } | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Live test states
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);
  const [testError, setTestError] = useState<string | null>(null);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawPrompt.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setTestResult(null);

    try {
      const res = await fetch('/api/gemini/optimize-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawPrompt, category, tone, outputFormat, targetModel }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error al optimizar el prompt.');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Error de conexión con el servicio de IA.');
    } finally {
      setLoading(false);
    }
  };

  const handleTestPrompt = async () => {
    if (!result?.optimizedPrompt) return;

    setTesting(true);
    setTestError(null);
    setTestResult(null);

    try {
      const res = await fetch('/api/gemini/run-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: result.optimizedPrompt,
          systemInstruction: result.recommendedSystemInstruction,
          targetModel,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error al ejecutar el prompt.');
      }

      setTestResult(data.text);
    } catch (err: any) {
      setTestError(err.message || 'Error al ejecutar la prueba en vivo.');
    } finally {
      setTesting(false);
    }
  };

  const handleCopy = () => {
    if (!result?.optimizedPrompt) return;
    navigator.clipboard.writeText(result.optimizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (preset: typeof PRESET_TEMPLATES[0]) => {
    setRawPrompt(preset.raw);
    setCategory(preset.category);
    setTone(preset.tone);
    setOutputFormat(preset.format);
  };

  return (
    <div className="min-h-screen bg-white text-brand-blue-500 font-sans flex flex-col">
      <OptimizedHeader />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full space-y-12">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/40 text-brand-blue-500 text-xs font-subheading uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-500" />
            <span>Laboratorio de Ingeniería de Prompts</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-brand-blue-500">
            Generador de Prompts <span className="text-brand-blue-400">Optimizado con IA</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-500/80 leading-relaxed">
            Transformá ideas simples en instrucciones de nivel profesional para Gemini. Diseñado para maximizar la precisión, el contexto y la calidad de las respuestas en logística, marketing y desarrollo.
          </p>
        </div>

        {/* PRESET TEMPLATES QUICK SELECT */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-subheading text-xs tracking-wider uppercase text-brand-blue-400">
              Plantillas Rápidas (Haz clic para cargar)
            </span>
            <span className="text-xs text-brand-blue-400">
              {PRESET_TEMPLATES.length} modelos listos
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRESET_TEMPLATES.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => applyPreset(preset)}
                className="text-left p-4 rounded-xl border border-brand-blue-100 bg-brand-blue-50/40 hover:bg-brand-blue-50 hover:border-brand-blue-300 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-1.5">
                  <span className="text-xs font-subheading uppercase tracking-wider text-brand-blue-400 group-hover:text-brand-blue-500">
                    {preset.category}
                  </span>
                  <h3 className="font-display text-lg text-brand-blue-500 uppercase tracking-tight">
                    {preset.title}
                  </h3>
                  <p className="text-xs text-brand-blue-500/80 line-clamp-2">
                    {preset.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-brand-blue-500">
                  <span>Usar plantilla</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN OPTIMIZER FORM & WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* INPUT FORM PANEL */}
          <div className="lg:col-span-5 bg-white border border-brand-blue-100 rounded-2xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(9,80,246,0.08)] space-y-6">
            <div className="flex items-center gap-3 border-b border-brand-blue-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 flex items-center justify-center text-brand-blue-500 font-bold">
                <Wand2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                  Configuración del Prompt
                </h2>
                <p className="text-xs text-brand-blue-500/70">
                  Describí tu objetivo y ajustá los parámetros
                </p>
              </div>
            </div>

            <form onSubmit={handleOptimize} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="raw-prompt" className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 block">
                  Objetivo o Prompt Crudo *
                </label>
                <textarea
                  id="raw-prompt"
                  rows={5}
                  value={rawPrompt}
                  onChange={(e) => setRawPrompt(e.target.value)}
                  placeholder="Ej: Necesito un correo para clientes corporativos ofreciendo cuenta corriente con facturación quincenal..."
                  className="w-full rounded-xl border border-brand-blue-200 p-3.5 text-sm text-brand-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/30 focus:border-brand-blue-500 bg-brand-blue-50/20 resize-y"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="category-select" className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 block">
                    Categoría
                  </label>
                  <select
                    id="category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-brand-blue-200 p-3 text-sm text-brand-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500/30"
                  >
                    <option value="Logística y Operaciones">Logística y Operaciones</option>
                    <option value="Marketing y Redes">Marketing y Redes</option>
                    <option value="Soporte y Ventas">Soporte y Ventas</option>
                    <option value="Programación y Datos">Programación y Datos</option>
                    <option value="Estratégico / General">Estratégico / General</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="tone-select" className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 block">
                    Tono de Voz
                  </label>
                  <select
                    id="tone-select"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full rounded-xl border border-brand-blue-200 p-3 text-sm text-brand-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500/30"
                  >
                    <option value="Profesional">Profesional</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Persuasivo">Persuasivo</option>
                    <option value="Empático">Empático</option>
                    <option value="Conciso">Conciso</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="format-select" className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 block">
                    Formato de Salida
                  </label>
                  <select
                    id="format-select"
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-full rounded-xl border border-brand-blue-200 p-3 text-sm text-brand-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500/30"
                  >
                    <option value="Markdown">Markdown Estructurado</option>
                    <option value="JSON">JSON Schema</option>
                    <option value="Código Python">Código Python</option>
                    <option value="Lista Estructurada">Lista con Viñetas</option>
                    <option value="Texto Libre">Texto Libre</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="model-select" className="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 block">
                    Modelo Destinatario
                  </label>
                  <select
                    id="model-select"
                    value={targetModel}
                    onChange={(e) => setTargetModel(e.target.value)}
                    className="w-full rounded-xl border border-brand-blue-200 p-3 text-sm text-brand-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500/30"
                  >
                    <option value="gemini-3.8-flash">Gemini 3.8 Flash (Recomendado)</option>
                    <option value="gemini-4-argon">Gemini 4 Argon (Razonamiento Avanzado)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !rawPrompt.trim()}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-subheading uppercase tracking-wider bg-brand-yellow-500 text-brand-blue-500 hover:bg-brand-yellow-400 shadow-[0_4px_16px_rgba(255,236,1,0.35)] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-brand-blue-500 border-t-transparent animate-spin" />
                    <span>Optimizando con Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Optimizar Prompt Ahora</span>
                  </>
                )}
              </button>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* OUTPUT RESULT & LIVE TEST PANEL */}
          <div className="lg:col-span-7 space-y-6">
            {!result && !loading && (
              <div className="bg-brand-blue-50/50 border border-dashed border-brand-blue-200 rounded-2xl p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white border border-brand-blue-100 shadow-sm mx-auto flex items-center justify-center text-brand-blue-400">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="max-w-md mx-auto space-y-1">
                  <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                    Tu prompt optimizado aparecerá aquí
                  </h3>
                  <p className="text-xs text-brand-blue-500/70">
                    Completá el formulario a la izquierda o seleccioná una plantilla rápida para generar la estructura profesional.
                  </p>
                </div>
              </div>
            )}

            {loading && (
              <div className="bg-white border border-brand-blue-100 rounded-2xl p-16 text-center space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-full border-3 border-brand-yellow-500 border-t-transparent animate-spin mx-auto" />
                <p className="font-subheading text-sm uppercase tracking-wider text-brand-blue-500">
                  Analizando y estructurando prompt profesional...
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-6">
                {/* OPTIMIZED PROMPT CARD */}
                <div className="bg-white border border-brand-blue-200 rounded-2xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(9,80,246,0.08)] space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-blue-100 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-brand-yellow-500" />
                      <h3 className="font-display text-lg uppercase tracking-tight text-brand-blue-500">
                        Prompt Optimizado
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-blue-200 bg-brand-blue-50 text-brand-blue-500 text-xs font-subheading uppercase tracking-wider hover:bg-brand-blue-100 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Prompt</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-brand-blue-50/40 rounded-xl p-4 border border-brand-blue-100 font-mono text-xs text-brand-blue-900 whitespace-pre-wrap leading-relaxed max-h-[350px] overflow-y-auto">
                    {result.optimizedPrompt}
                  </div>
                </div>

                {/* RECOMMENDED SYSTEM INSTRUCTION & TIPS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-brand-blue-100 rounded-2xl p-6 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-brand-blue-500">
                      <Terminal className="w-4 h-4 text-brand-yellow-500" />
                      <h4 className="font-subheading text-sm uppercase tracking-wider">
                        Instrucción de Sistema
                      </h4>
                    </div>
                    <p className="text-xs font-mono text-brand-blue-800 bg-brand-blue-50/40 p-3 rounded-lg border border-brand-blue-100 leading-relaxed">
                      {result.recommendedSystemInstruction}
                    </p>
                  </div>

                  <div className="bg-white border border-brand-blue-100 rounded-2xl p-6 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-brand-blue-500">
                      <BookOpen className="w-4 h-4 text-brand-yellow-500" />
                      <h4 className="font-subheading text-sm uppercase tracking-wider">
                        Consejos de Ingeniería
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-brand-blue-500/80">
                      {result.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-bold text-brand-blue-500">·</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* LIVE TEST RUNNER */}
                <div className="bg-brand-blue-500 text-white rounded-2xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(9,80,246,0.25)] space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/20 pb-4">
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-tight text-white">
                        Prueba en Vivo con Gemini
                      </h3>
                      <p className="text-xs text-brand-blue-50">
                        Ejecutá este prompt optimizado directamente en los servidores de Envíos DosRuedas.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleTestPrompt}
                      disabled={testing}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-subheading uppercase tracking-wider bg-brand-yellow-500 text-brand-blue-500 hover:bg-brand-yellow-400 transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {testing ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-brand-blue-500 border-t-transparent animate-spin" />
                          <span>Ejecutando...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-brand-blue-500" />
                          <span>Ejecutar Prueba</span>
                        </>
                      )}
                    </button>
                  </div>

                  {testError && (
                    <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500 text-red-200 text-xs font-mono">
                      {testError}
                    </div>
                  )}

                  {testResult && (
                    <div className="space-y-2">
                      <span className="font-subheading text-xs tracking-wider uppercase text-brand-yellow-500">
                        Resultado Generado por {targetModel}:
                      </span>
                      <div className="bg-brand-blue-900/90 border border-white/20 rounded-xl p-4 text-xs font-mono text-white/95 whitespace-pre-wrap leading-relaxed max-h-[300px] overflow-y-auto">
                        {testResult}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

      </main>

      <OptimizedFooter />
    </div>
  );
}

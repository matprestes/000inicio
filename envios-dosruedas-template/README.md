# Plantilla de Réplica — Envíos DosRuedas Template

Este directorio contiene la arquitectura modular, guías paso a paso, prompts maestros para agentes de IA y plantillas de referencia para replicar completamente el sistema de **Envíos DosRuedas** (plataforma de logística urbana en moto con Next.js 16, Prisma 7, Tailwind CSS v4, SSoT comercial y asistente LLM con Gemini).

## 🗂️ Estructura de Fases

- **[Fase 1: Infraestructura Base y Entorno](./phase-1-infra/README.md)**: Configuración de Next.js App Router, React 19, TypeScript, Prisma 7 con adaptador PostgreSQL y scripts de package.json.
- **[Fase 2: Sistema de Diseño y Marca](./phase-2-design/README.md)**: Implementación de la Ley de Tres Colores (Azul `#0950F6`, Amarillo `#FFEC01`, Blanco), componentes DoubleBezelCard y directrices de voz en voseo rioplatense.
- **[Fase 3: Lógica Comercial SSoT y Motor de Cotización](./phase-3-ssot/README.md)**: Invariantes operativas (`src/lib/promises.ts`), algoritmo de tarifas por distancia vial (`src/lib/pricing.ts`) y salvaguardas de copy estáticas.
- **[Fase 4: Asistente LLM y Pipeline de Evaluación](./phase-4-ai-eval/README.md)**: Endpoint `/api/assistant` con Gemini 3.5 Flash, system prompt dinámico y conjunto de pruebas de regresión con dataset golden.
- **[Fase 5: Estructura de Páginas y Rutas](./phase-5-pages/README.md)**: Arquitectura de páginas en Next.js 16 App Router (Landing, Cotizador interactivo con Leaflet, Planes y API Handlers).

---
*Generado automáticamente por el flujo de réplica guiada.*

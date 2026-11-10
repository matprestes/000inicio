# Phase 4: Asistente LLM y Pipeline de Evaluación

## Objetivo
Configurar el endpoint de inteligencia artificial **`/api/assistant`** conectado a **Gemini 3.5 Flash** con un system prompt dinámico (`src/lib/assistant-prompt.ts`) que inyecta las promesas de SSoT y el contexto de cotización activa, junto con el pipeline de evaluación (`scripts/eval-llm.ts`).

## Componentes Clave:
1. **Endpoint Seguro:** Verificación de cabeceras (`Sec-Fetch-Site`), validación Zod y llamadas a Google GenAI.
2. **System Prompt Dinámico:** Ensamblado con reglas operativas y tono en voseo rioplatense.
3. **Dataset Golden:** Pruebas de regresión automatizadas.

## Archivos en este directorio:
- `prompt.md`: Prompt maestro para la IA.
- `references/eval-dataset.json`: Dataset golden de ejemplo anonimizado.

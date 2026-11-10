# Prompt Maestro — Fase 4: Asistente LLM y Pipeline de Evaluación

Copia y utiliza el siguiente prompt para indicarle a un agente de IA que ejecute esta fase:

```markdown
Actúa como un Ingeniero en IA y Desarrollador Full-Stack especializado en la SDK de Google GenAI y Next.js App Router. Tu tarea es implementar el asistente virtual conversacional para "Envíos DosRuedas".

Requisitos estrictos:
1. Crea un Route Handler en `src/app/api/assistant/route.ts` que reciba mensajes del usuario, valide las cabeceras de seguridad y conecte con Gemini 3.5 Flash (`@google/genai`).
2. Implementa `src/lib/assistant-prompt.ts` que construya dinámicamente el System Prompt unificando las reglas de `promises.ts` y el contexto de cotización activa.
3. El asistente debe responder estrictamente en español rioplatense (voseo cordial), siendo directo, transparente y resolutivo.
4. Crea un script de evaluación en `scripts/eval-llm.ts` que pruebe el asistente contra un dataset golden de preguntas frecuentes.
```

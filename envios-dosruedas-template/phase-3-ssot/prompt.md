# Prompt Maestro — Fase 3: Lógica Comercial SSoT y Motor de Cotización

Copia y utiliza el siguiente prompt para indicarle a un agente de IA que ejecute esta fase:

```markdown
Actúa como un Ingeniero de Software Backend especializado en TypeScript y reglas de negocio. Tu tarea es implementar la Fuente Única de Verdad (SSoT) y el motor de cotización para "Envíos DosRuedas".

Requisitos estrictos:
1. Crea `src/lib/promises.ts` con las constantes oficiales:
   - Cortes horarios: LowCost (13:00 hs), Express (15:00 hs), Flex (15:00 hs).
   - Pesos y medidas: Standard weight 5 kg, 40x40x30 cm.
   - Restricciones: Emitir solo Factura C (prohibido Factura A).
2. Crea `src/lib/pricing.ts` para calcular tarifas basadas en distancia vial (Google Directions con fallback en tramos fijos).
3. Implementa salvaguardas de copy en un test estático que impida introducir afirmaciones prohibidas en el código (ej. "15 kg", "60 a 90 min", "Factura A").
```

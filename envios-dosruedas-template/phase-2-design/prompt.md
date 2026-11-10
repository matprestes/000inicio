# Prompt Maestro — Fase 2: Sistema de Diseño y Marca

Copia y utiliza el siguiente prompt para indicarle a un agente de IA que ejecute esta fase:

```markdown
Actúa como un Diseñador UI/UX Senior y Frontend Engineer especializado en Tailwind CSS v4. Tu tarea es configurar el sistema de diseño visual para "Envíos DosRuedas" en `src/app/globals.css`.

Requisitos estrictos:
1. Implementa la "Ley de Tres Colores":
   - Azul Canónico (`#0950F6` como tope máximo de oscuridad).
   - Amarillo Vial (`#FFEC01` para CTAs y acentos clave, uso estricto ≤ 15%).
   - Blanco Puro (`#FFFFFF`).
   - Prohibido el uso de negro puro (`#000000`) y escalas de grises genéricas.
2. Configura las familias tipográficas: Anton, Bebas Neue, Outfit y Geist Mono mediante `@theme`.
3. Define las utilidades personalizadas para la firma geométrica `DoubleBezelCard` y los botones `CTANestedPill`.
4. Asegura que todas las sombras estén teñidas con azul institucional (ej. `rgba(9, 80, 246, ...)`), sin sombras negras o grises.
```

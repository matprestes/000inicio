# Prompt Maestro — Fase 5: Estructura de Páginas y Componentes de Interfaz

> **Objetivo para el Agente IA:** Construir las páginas públicas y flujos interactivos de la aplicación utilizando Next.js 16 App Router, Tailwind CSS v4, Radix UI y componentes con la identidad visual de Envíos DosRuedas.

## Instrucciones de Ejecución

1. **Página Principal (`src/app/page.tsx`):**
   - Implementar un Hero de alto impacto tipográfico usando `Anton` para titulares y `Bebas Neue` para subtítulos.
   - Integrar el selector rápido de servicios (Express, LowCost, Flex, 3PL).
   - Aplicar la paleta de tres colores (Azul Canónico `#0950F6`, Amarillo Vial `#FFEC01`, Blanco Puro).

2. **Cotizador Interactivo (`src/app/cotizador/page.tsx`):**
   - Formulario de origen y destino con autocompletado y validación Zod.
   - Mapa interactivo con `Leaflet` para visualización de ruta vial.
   - Conexión con la Server Action `calculateQuoteAction` que utiliza el motor de precios (`pricing.ts`) y reglas SSoT (`promises.ts`).

3. **Landing de Emprendedores (`src/app/emprendedores/page.tsx`):**
   - Presentación clara de los planes comerciales (Plan Inicial DropOFF con -20%, Plan E-Commerce 3PL, Plan PyME).
   - Botones de acción rápida hacia WhatsApp corporativo con mensajes prellenados respetando el voseo rioplatense.

4. **Reglas de Calidad y UI:**
   - Usar estrictamente componentes `DoubleBezelCard` y `CTANestedPill`.
   - Cero uso de grises neutros o negro puro (`#000000`).
   - Todo texto dirigido al usuario debe mantener rigurosamente el voseo rioplatense ("vos", "cotizá", "fijate") y evitar guiones largos (`—`).

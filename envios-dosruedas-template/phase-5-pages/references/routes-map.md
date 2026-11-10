# Mapa de Rutas y Páginas — Envíos DosRuedas (Next.js 16 App Router)

Este documento detalla la estructura exacta de rutas y páginas (`src/app/`) que componen el sitio web y la plataforma de Envíos DosRuedas:

## 🗂️ Estructura de Directorios en `src/app/`

- **`page.tsx`** — Página principal (Landing Page con hero, propuesta de valor y cotizador rápido).
- **`cotizar/`** — Cotizador interactivo con mapa (Leaflet) y cálculo vial.
- **`contacto/`** — Canal de contacto y atención por WhatsApp / email.
- **`logistica-dosruedas/`** — Presentación corporativa de la solución logística.
- **`mardelivery/`** — Solución de entrega local y delivery.
- **`servicios/`**
  - **`envios-express/`** — Detalle del servicio Express (franjas de 3 hs, corte 15:00 hs).
  - **`envios-lowcost/`** — Detalle del servicio económico en el día (corte 13:00 hs).
  - **`enviosflex/`** — Integración y detalles para Mercado Envíos Flex en MDQ.
  - **`plan-emprendedores/`** — Planes para tiendas y emprendedores (DropOFF -20%).
  - **`deposito-fulfillment/`** — Servicio de depósito, fulfillment y stock 3PL en Friuli 1972.
- **`nosotros/`**
  - **`sobre-nosotros/`** — Trayectoria (15+ años) y equipo local.
  - **`preguntas-frecuentes/`** — FAQ institucional y operativa.
  - **`nuestras-redes/`** — Canales oficiales y comunidad.
- **`terminos-y-condiciones/`** — Términos legales del servicio.
- **`politica-de-privacidad/`** — Tratamiento de datos y privacidad.
- **`api/assistant/`** — Route Handler del asistente LLM (Gemini 3.5 Flash).

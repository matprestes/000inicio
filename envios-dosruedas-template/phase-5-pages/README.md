# Phase 5: Estructura de Páginas y Rutas

## Objetivo
Implementar la arquitectura de rutas completa siguiendo la estructura de `src/app/` de Next.js 16 App Router, asegurando el SEO local en MDQ, la legibilidad de la información y la integración con el asistente LLM.

## Mapa de Rutas
- **Landing:** `/`
- **Servicios:** `/servicios/envios-express/`, `/servicios/envios-lowcost/`, `/servicios/enviosflex/`, `/servicios/plan-emprendedores/`, `/servicios/deposito-fulfillment/`
- **Corporativo/Info:** `/cotizar/`, `/contacto/`, `/mardelivery/`, `/logistica-dosruedas/`, `/nosotros/...`
- **Legales:** `/terminos-y-condiciones/`, `/politica-de-privacidad/`

## Reglas Clave:
1. **SEO Local:** Todas las páginas deben incluir metadatos optimizados para "envíos en moto en Mar del Plata (MDQ)".
2. **Consistencia:** Mantener la `DoubleBezelCard` como contenedor base en todas las páginas de servicios.
3. **Conversión:** Cada página de servicio debe integrar la llamada a la acción (`CTANestedPill`) hacia el cotizador o WhatsApp.

## Archivos en este directorio:
- `prompt.md`: Prompt maestro para la IA.
- `references/routes-map.md`: Mapa detallado de archivos y componentes asociados.

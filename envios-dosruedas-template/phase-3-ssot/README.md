# Phase 3: Lógica Comercial SSoT y Motor de Cotización

## Objetivo
Centralizar las reglas comerciales y operativas innegociables en **`src/lib/promises.ts`** y el motor de tarifas por distancia vial en **`src/lib/pricing.ts`**, asegurando la protección mediante el test estático `copy-guard.test.ts`.

## Invariantes Clave:
- **Express:** Franja de 3 hs, corte 15:00 hs, 2 hs de anticipación.
- **LowCost:** Reparto D+1 / en el día, corte 13:00 hs, entrega hasta 19:00 hs.
- **Flex:** Mercado Envíos Flex, corte 15:00 hs, entrega hasta 20:00 hs.
- **Peso estándar:** Hasta 5 kg sin recargo.
- **Facturación:** Solo Factura C (no Factura A).

## Archivos en este directorio:
- `prompt.md`: Prompt maestro para la IA.
- `references/promises.ts`: Definición de promesas operativas.
- `references/pricing.ts`: Lógica de cálculo tarifario vial.

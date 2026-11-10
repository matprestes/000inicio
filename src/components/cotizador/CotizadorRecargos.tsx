import React from 'react';
import {
  BULK_EXTRA_FROM_ARS,
  EXTRA_STOP_MAX_DETOUR_KM,
  EXTRA_STOP_SURCHARGE_PERCENT,
  PERIPHERY_PRICE_PER_KM,
  RAIN_SURCHARGE_PERCENT,
  RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST,
  RETRY_CHARGE_PERCENT,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
  WAIT_CHARGE_ARS,
  WAIT_CHARGE_BLOCK_MIN,
  WAIT_TOLERANCE_MIN,
} from '@/lib/promises';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Lo que el cotizador no suma solo. El precio de arriba es por distancia; estos
 * recargos dependen de lo que pase en el viaje, así que se informan antes de
 * confirmar en vez de aparecer después. Todos los valores salen de `promises.ts`.
 */
const RECARGOS: { situacion: string; costo: string; detalle: string }[] = [
  {
    situacion: 'Lluvia o calzada mojada',
    costo: `+${RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST} %`,
    detalle: `Sobre la tarifa Express o LowCost. En Flex y cuentas corrientes es ${RAIN_SURCHARGE_PERCENT} %.`,
  },
  {
    situacion: 'Espera en puerta',
    costo: `${formatArs(WAIT_CHARGE_ARS)} cada ${WAIT_CHARGE_BLOCK_MIN} min`,
    detalle: `Los primeros ${WAIT_TOLERANCE_MIN} minutos no se cobran. Corre desde el minuto ${WAIT_TOLERANCE_MIN + 1}.`,
  },
  {
    situacion: 'Parada extra en el camino',
    costo: `+${EXTRA_STOP_SURCHARGE_PERCENT} % por parada`,
    detalle: `Si la parada queda sobre la ruta, hasta ${EXTRA_STOP_MAX_DETOUR_KM} km. Si desvía más, es un envío aparte.`,
  },
  {
    situacion: 'Destinatario ausente',
    costo: `${RETRY_CHARGE_PERCENT} % del envío`,
    detalle: 'La segunda visita se cobra como un envío nuevo. En zonas cercanas, a veces la hacemos sin cargo.',
  },
  {
    situacion: `Bulto de más de ${STANDARD_WEIGHT_KG} kg o ${STANDARD_BULLET_DIMENSIONS_CM}`,
    costo: `Desde ${formatArs(BULK_EXTRA_FROM_ARS)}`,
    detalle: 'El monto final depende del servicio. Si el bulto excede ese tamaño, escribinos y lo coordinamos.',
  },
  {
    situacion: 'Destino fuera de la ciudad',
    costo: `${formatArs(PERIPHERY_PRICE_PER_KM)} por km de ruta`,
    detalle: 'Batán, Sierra de los Padres y otras localidades cercanas. Se cotiza por WhatsApp.',
  },
];

export default function CotizadorRecargos() {
  return (
    <section id="recargos" aria-labelledby="recargos-titulo" className="space-y-6 mt-12 scroll-mt-24">
      <div className="space-y-2 text-center max-w-3xl mx-auto">
        <h2
          id="recargos-titulo"
          className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500"
        >
          Lo que puede sumar al precio
        </h2>
        <p className="font-sans text-brand-blue-500/80 leading-relaxed text-sm sm:text-base">
          El cotizador calcula el viaje por distancia. Estas situaciones se cobran aparte,
          según lo que pase en el viaje.
        </p>
      </div>

      <DoubleBezelCard>
        <dl className="divide-y divide-brand-blue-100">
          {RECARGOS.map((recargo) => (
            <div
              key={recargo.situacion}
              className="grid gap-2 sm:grid-cols-12 sm:gap-6 px-2 sm:px-4 py-4 first:pt-0 last:pb-0"
            >
              <dt className="sm:col-span-4 font-subheading text-sm uppercase tracking-wider text-brand-blue-500 font-bold">
                {recargo.situacion}
              </dt>
              <dd className="sm:col-span-3 font-mono text-sm font-extrabold text-brand-blue-600 tabular-nums">
                {recargo.costo}
              </dd>
              <dd className="sm:col-span-5 font-sans text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed">
                {recargo.detalle}
              </dd>
            </div>
          ))}
        </dl>
      </DoubleBezelCard>
    </section>
  );
}

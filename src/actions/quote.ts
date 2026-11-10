'use server';

import { calculateExpressPrice, calculateLowCostPrice } from '@/lib/pricing';

export interface QuoteState {
  success: boolean;
  price: number | 'consultar' | null;
  distanceKm: number | null;
  error: string | null;
}

function haversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const crowFlies = R * c;
  // Factor de ruteo urbano para la cuadrícula vial de Mar del Plata (~1.28)
  return Math.round(crowFlies * 1.28 * 10) / 10;
}

export async function calculateQuoteAction(
  _prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  try {
    const origenLat = parseFloat(formData.get('origenLat') as string);
    const origenLng = parseFloat(formData.get('origenLng') as string);
    const destinoLat = parseFloat(formData.get('destinoLat') as string);
    const destinoLng = parseFloat(formData.get('destinoLng') as string);
    const serviceType = ((formData.get('serviceType') as string) || 'EXPRESS').toUpperCase();

    if (isNaN(origenLat) || isNaN(origenLng) || isNaN(destinoLat) || isNaN(destinoLng)) {
      return {
        success: false,
        price: null,
        distanceKm: null,
        error: 'Coordenadas de origen o destino inválidas.',
      };
    }

    let distanceKm = haversineDistanceKm(origenLat, origenLng, destinoLat, destinoLng);
    if (distanceKm < 0.5) distanceKm = 0.5;

    let price: number | 'consultar';
    if (serviceType === 'LOW_COST' || serviceType === 'LOWCOST') {
      price = calculateLowCostPrice(distanceKm);
    } else {
      price = calculateExpressPrice(distanceKm);
    }

    return {
      success: true,
      price,
      distanceKm,
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      price: null,
      distanceKm: null,
      error: err instanceof Error ? err.message : 'Error al procesar la cotización.',
    };
  }
}

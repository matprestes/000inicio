import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  let distanceKm = 4.5;
  try {
    if (origin && destination) {
      const [origLat, origLng] = origin.split(',').map(Number);
      const [destLat, destLng] = destination.split(',').map(Number);
      if (!isNaN(origLat) && !isNaN(origLng) && !isNaN(destLat) && !isNaN(destLng)) {
        const R = 6371;
        const dLat = ((destLat - origLat) * Math.PI) / 180;
        const dLon = ((destLng - origLng) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((origLat * Math.PI) / 180) *
            Math.cos((destLat * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const straight = R * c;
        distanceKm = Math.max(1.0, Math.round(straight * 1.3 * 10) / 10);
      }
    }
  } catch (e) {
    // fallback
  }

  return NextResponse.json({
    status: 'OK',
    routes: [
      {
        legs: [
          {
            distance: { text: `${distanceKm} km`, value: distanceKm * 1000 },
            duration: { text: `${Math.round(distanceKm * 3)} mins`, value: distanceKm * 180 },
          },
        ],
        overview_polyline: {
          points: 'u~}sE_~ubM??',
        },
      },
    ],
  });
}

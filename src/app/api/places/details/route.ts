import { NextRequest, NextResponse } from 'next/server';

const MDQ_COORDS: Record<string, { lat: number; lng: number }> = {
  'mdq-friuli': { lat: -38.0055, lng: -57.5426 },
  'mdq-sanmartin': { lat: -37.9958, lng: -57.5515 },
  'mdq-guemes': { lat: -38.0164, lng: -57.5475 },
  'mdq-juanjusto': { lat: -38.0315, lng: -57.5470 },
  'mdq-constitucion': { lat: -37.9712, lng: -57.5735 },
  'mdq-trabajadores': { lat: -38.0750, lng: -57.5350 },
  'mdq-batan': { lat: -37.9350, lng: -57.7120 },
  'mdq-luro': { lat: -37.9850, lng: -57.5620 },
  'mdq-independencia': { lat: -38.0020, lng: -57.5580 },
  'mdq-alem': { lat: -38.0280, lng: -57.5380 },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get('place_id') || '';

  if (MDQ_COORDS[placeId]) {
    return NextResponse.json({
      status: 'OK',
      result: {
        geometry: {
          location: MDQ_COORDS[placeId],
        },
      },
    });
  }

  return NextResponse.json({
    status: 'OK',
    result: {
      geometry: {
        location: { lat: -38.0055, lng: -57.5426 },
      },
    },
  });
}

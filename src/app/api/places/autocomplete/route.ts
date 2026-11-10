import { NextRequest, NextResponse } from 'next/server';

const MDQ_PRESETS = [
  { description: 'Friuli 1972, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-friuli' },
  { description: 'San Martín 2400, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-sanmartin' },
  { description: 'Güemes 3100, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-guemes' },
  { description: 'Av. Juan B. Justo 3500, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-juanjusto' },
  { description: 'Av. Constitución 5000, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-constitucion' },
  { description: 'Av. de los Trabajadores 4500, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-trabajadores' },
  { description: 'Ruta 88 Km 9, Batán, Buenos Aires, Argentina', place_id: 'mdq-batan' },
  { description: 'Av. Luro 4000, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-luro' },
  { description: 'Av. Independencia 2500, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-independencia' },
  { description: 'Calle Alem 3500, Mar del Plata, Buenos Aires, Argentina', place_id: 'mdq-alem' },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get('input') || '';

  if (!input || input.trim().length < 2) {
    return NextResponse.json({ status: 'OK', predictions: [] });
  }

  const query = input.toLowerCase();

  try {
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input + ', Mar del Plata')}&limit=5&addressdetails=1`;
    const nomRes = await fetch(nominatimUrl, {
      headers: { 'User-Agent': 'EnviosDosRuedas/1.0' },
      signal: AbortSignal.timeout(3000),
    });
    if (nomRes.ok) {
      const nomData = await nomRes.json();
      if (Array.isArray(nomData) && nomData.length > 0) {
        const predictions = nomData.map((item: any, idx: number) => ({
          description: item.display_name,
          place_id: `nom-${item.place_id || idx}`,
        }));
        return NextResponse.json({ status: 'OK', predictions });
      }
    }
  } catch (err) {
    // Fall back to presets filtering
  }

  const filtered = MDQ_PRESETS.filter((p) => p.description.toLowerCase().includes(query));
  const predictions = filtered.length > 0 ? filtered : MDQ_PRESETS.slice(0, 5);

  return NextResponse.json({ status: 'OK', predictions });
}

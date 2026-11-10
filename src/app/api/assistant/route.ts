import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { GoogleGenAI } from '@google/genai';
import { buildSystemPrompt } from '@/lib/assistant-prompt';

const messageSchema = z.object({
  message: z.string().min(1, 'El mensaje no puede estar vacío').max(2000, 'Mensaje demasiado largo'),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model', 'assistant']),
        content: z.string(),
      })
    )
    .optional(),
  quoteContext: z
    .object({
      origin: z.string().optional(),
      destination: z.string().optional(),
      distanceKm: z.number().optional(),
      expressPrice: z.union([z.number(), z.string()]).optional(),
      lowCostPrice: z.union([z.number(), z.string()]).optional(),
    })
    .optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. Verificación básica de origen y seguridad
    const secFetchSite = req.headers.get('sec-fetch-site');
    if (secFetchSite && !['same-origin', 'same-site', 'none'].includes(secFetchSite)) {
      return NextResponse.json({ error: 'Origen no autorizado' }, { status: 403 });
    }

    // 2. Validación de payload
    const body = await req.json();
    const parseResult = messageSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Datos de solicitud inválidos', details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { message, history, quoteContext } = parseResult.data;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          reply:
            '¡Hola! En este momento no puedo conectarme con la central de IA, pero podés escribirnos directo por WhatsApp al +54 223 660-2699 y te respondemos al toque.',
        },
        { status: 200 }
      );
    }

    // 3. Preparación del System Prompt y cliente de Gemini
    const systemPrompt = buildSystemPrompt(quoteContext);
    const ai = new GoogleGenAI({ apiKey });

    // Preparar historial conversacional si existe
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (history && history.length > 0) {
      for (const item of history.slice(-6)) {
        contents.push({
          role: item.role === 'assistant' ? 'model' : (item.role as 'user' | 'model'),
          parts: [{ text: item.content }],
        });
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    let reply = '';
    const modelsToTry = ['gemini-3.5-flash', 'gemini-3.5-flash-lite'];

    for (const model of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.3,
          },
        });
        reply = response.text || '';
        if (reply) break;
      } catch (err: any) {
        if (model === modelsToTry[modelsToTry.length - 1]) throw err;
      }
    }

    return NextResponse.json({
      reply: reply || 'Disculpá, no pude procesar tu consulta. ¿Querés escribirnos por WhatsApp?',
    });
  } catch (error) {
    console.error('Error en /api/assistant:', error);
    return NextResponse.json(
      {
        reply:
          'Hubo un problema temporal con el asistente. Si necesitás coordinar tu moto urgente, avisanos directo al WhatsApp +54 223 660-2699.',
      },
      { status: 200 }
    );
  }
}

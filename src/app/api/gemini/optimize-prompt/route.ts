import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const { rawPrompt, category, tone, outputFormat, targetModel } = await req.json();

    if (!rawPrompt || typeof rawPrompt !== 'string') {
      return NextResponse.json({ error: "Se requiere un prompt o objetivo válido." }, { status: 400 });
    }

    const systemInstruction = `You are an expert Prompt Engineer and AI Systems Architect. Your task is to transform raw user objectives into production-grade, highly effective, structured prompts for Gemini models.
Follow best practices:
1. Define a clear persona or role.
2. Structure with clear constraints, context, step-by-step instructions, and output format.
3. Provide placeholders if needed.
4. Respond in Spanish (unless requested otherwise) with structured sections: optimizedPrompt, recommendedSystemInstruction, expectedFormat, and tips.`;

    const modelName = targetModel || "gemini-3.8-flash";

    const promptText = `Analiza el siguiente objetivo o prompt crudo y conviértelo en un prompt optimizado y profesional:
- Objetivo / Prompt Crudo: "${rawPrompt}"
- Categoría: ${category || 'General'}
- Tono deseado: ${tone || 'Profesional'}
- Formato de salida esperado: ${outputFormat || 'Markdown'}
- Modelo destinatario: ${modelName}`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: promptText,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            optimizedPrompt: {
              type: Type.STRING,
              description: "El prompt optimizado, estructurado con rol, contexto, instrucciones paso a paso y restricciones.",
            },
            recommendedSystemInstruction: {
              type: Type.STRING,
              description: "Instrucción de sistema (system instruction) recomendada para acompañar el prompt.",
            },
            expectedFormat: {
              type: Type.STRING,
              description: "Instrucciones sobre cómo estructurar la respuesta esperada.",
            },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 consejos clave de ingeniería de prompts para este caso de uso.",
            },
          },
          required: ["optimizedPrompt", "recommendedSystemInstruction", "expectedFormat", "tips"],
        },
      },
    });

    const textResult = response.text;
    if (!textResult) {
      throw new Error("No se pudo generar el prompt optimizado.");
    }

    const parsed = JSON.parse(textResult);
    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error("Error optimizing prompt:", error);
    return NextResponse.json(
      { error: error?.message || "Error al procesar la optimización del prompt con IA." },
      { status: 500 }
    );
  }
}

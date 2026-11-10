import { GoogleGenAI } from "@google/genai";
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
    const { prompt, systemInstruction, targetModel } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: "Se requiere un prompt para ejecutar." }, { status: 400 });
    }

    const modelName = targetModel || "gemini-3.8-flash";

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || "Eres un asistente experto y preciso.",
      },
    });

    return NextResponse.json({ text: response.text || "Sin respuesta generada." });
  } catch (error: any) {
    console.error("Error executing prompt:", error);
    return NextResponse.json(
      { error: error?.message || "Error al ejecutar el prompt con Gemini." },
      { status: 500 }
    );
  }
}

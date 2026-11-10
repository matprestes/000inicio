import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI } from '@google/genai';
import { buildSystemPrompt } from '../src/lib/assistant-prompt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EvalTestCase {
  id: string;
  prompt: string;
  expectedKeywords: string[];
  forbiddenKeywords: string[];
}

async function runEvaluation() {
  console.log('🚀 Iniciando pipeline de evaluación del Asistente LLM (Gemini 3.5 Flash)...\n');

  if (!process.env.GEMINI_API_KEY) {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      for (const line of envContent.split('\n')) {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || '';
          if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
          process.env[key] = process.env[key] || value;
        }
      }
    }
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ Error: GEMINI_API_KEY no encontrada en las variables de entorno.');
    process.exit(1);
  }

  const datasetPath = path.resolve(__dirname, 'eval-dataset.json');
  if (!fs.existsSync(datasetPath)) {
    console.error(`❌ Error: No se encontró el dataset en ${datasetPath}`);
    process.exit(1);
  }

  const testCases: EvalTestCase[] = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));
  const ai = new GoogleGenAI({ apiKey });
  const systemPrompt = buildSystemPrompt();

  let passed = 0;
  let failed = 0;

  for (const testCase of testCases) {
    console.log(`▶ Ejecutando: ${testCase.id} - "${testCase.prompt}"`);

    let reply = '';
    const models = ['gemini-3.5-flash-lite', 'gemini-3.5-flash'];

    for (const model of models) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: [{ role: 'user', parts: [{ text: testCase.prompt }] }],
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.2,
          },
        });
        reply = response.text || '';
        if (reply) break;
      } catch (err: any) {
        if (model === models[models.length - 1]) {
          console.error(`   ❌ ERROR en llamada a API:`, err?.message || err);
        }
      }
    }

    if (!reply) {
      failed++;
      continue;
    }

    console.log(`   Respuesta: "${reply.replace(/\n+/g, ' ').slice(0, 150)}..."`);

    const missingKeywords: string[] = [];
    const presentForbidden: string[] = [];

    for (const expected of testCase.expectedKeywords) {
      if (!reply.toLowerCase().includes(expected.toLowerCase())) {
        missingKeywords.push(expected);
      }
    }

    for (const forbidden of testCase.forbiddenKeywords) {
      if (reply.toLowerCase().includes(forbidden.toLowerCase())) {
        presentForbidden.push(forbidden);
      }
    }

    if (missingKeywords.length === 0 && presentForbidden.length === 0) {
      console.log(`   ✅ PASS\n`);
      passed++;
    } else {
      console.log(`   ❌ FAIL`);
      if (missingKeywords.length > 0) {
        console.log(`      Faltan palabras clave requeridas: ${missingKeywords.join(', ')}`);
      }
      if (presentForbidden.length > 0) {
        console.log(`      Contiene palabras clave prohibidas: ${presentForbidden.join(', ')}`);
      }
      console.log('');
      failed++;
    }
  }

  console.log('====================================');
  console.log(`📊 Resultado Final: ${passed}/${testCases.length} tests pasados (${failed} fallidos)`);
  console.log('====================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runEvaluation();

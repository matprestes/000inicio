import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

// Forbidden terms that MUST NEVER be promised or claimed in our codebase
const FORBIDDEN_PATTERNS_ARRAY = [
  'hasta 15\\s?kg',
  '15\\s?kg de peso',
  '60\\s?a\\s?90\\s?min',
  '60-90\\s?min',
  'emitimos Factura A',
  'hacemos Factura A',
];

// Combine all forbidden patterns into a single regex for efficiency
const FORBIDDEN_PATTERNS = FORBIDDEN_PATTERNS_ARRAY.map((p) => new RegExp(p, 'i'));

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  try {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (
          file !== 'node_modules' &&
          file !== '.next' &&
          file !== '.git' &&
          file !== 'generated' &&
          file !== 'tests'
        ) {
          getAllFiles(fullPath, arrayOfFiles);
        }
      } else if (/\.(tsx|ts|jsx|js|md|html)$/.test(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  } catch {
    // ignore permission errors
  }
  return arrayOfFiles;
}

describe('Copy Guard - SSoT Invariant Enforcement', () => {
  it('should not contain any forbidden marketing or commercial claims in src/', () => {
    const srcDir = path.resolve(process.cwd(), 'src');
    if (!fs.existsSync(srcDir)) return;

    const files = getAllFiles(srcDir);
    const violations: { file: string; line: number; text: string }[] = [];

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8');
      const lines = content.split(/\r?\n/);

      lines.forEach((line, index) => {
        if (
          line.includes('FORBIDDEN') ||
          line.includes('restricciones') ||
          line.includes('no Factura A') ||
          line.includes('no 15 kg') ||
          line.includes('no 60 a 90 min')
        ) {
          return;
        }

        for (const pattern of FORBIDDEN_PATTERNS) {
          if (pattern.test(line)) {
            violations.push({
              file: path.relative(process.cwd(), file),
              line: index + 1,
              text: line.trim(),
            });
            break; // avoid duplicate violations per line
          }
        }
      });
    }

    expect(violations).toEqual([]);
  });
});

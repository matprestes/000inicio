# Prompt Maestro — Fase 1: Infraestructura Base y Entorno

Copia y utiliza el siguiente prompt para indicarle a un agente de IA que ejecute esta fase en un proyecto nuevo:

```markdown
Actúa como un arquitecto de software senior especializado en Next.js 16, React 19 y Prisma 7. Tu tarea es configurar la infraestructura base para un proyecto de logística urbana llamado "Envíos DosRuedas".

Requisitos estrictos a cumplir:
1. Gestor de paquetes obligatorio: pnpm (pnpm@12.8.1). Prohibido usar npm, yarn o bun.
2. Stack tecnológico: Next.js 16 (App Router), TypeScript, Prisma 7 con `@prisma/adapter-pg` y `pg`.
3. Crea un archivo `package.json` con los siguientes scripts esenciales:
   - "dev": "next dev"
   - "build": "prisma generate && next build"
   - "start": "next start"
   - "typecheck": "tsc --noEmit"
   - "lint": "eslint ."
   - "postinstall": "prisma generate"
   - "test:ci": "vitest run"
4. Configura el archivo `prisma/schema.prisma` utilizando el cliente generado en `generated/prisma` y conectando con PostgreSQL.
5. Crea un archivo `.env.example` con `DATABASE_URL` y `GEMINI_API_KEY`.

Genera la estructura de directorios y archivos correspondientes verificando que `pnpm typecheck` pase sin errores.
```

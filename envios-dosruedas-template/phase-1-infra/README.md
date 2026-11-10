# Fase 1: Infraestructura Base y Entorno

## Objetivo
Establecer la base técnica del proyecto utilizando **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Prisma 7** con el adaptador de PostgreSQL y el gestor de paquetes obligatorio **pnpm** (`pnpm@12.8.1`).

## Pasos de Implementación
1. Inicializar un proyecto nuevo con Next.js 16 y Tailwind CSS v4.
2. Configurar el gestor de paquetes como `pnpm` en `package.json`.
3. Instalar dependencias clave (Prisma 7, `@prisma/adapter-pg`, `pg`, Zod, etc.).
4. Configurar el esquema de Prisma y la conexión centralizada con PostgreSQL.

## Archivos de Referencia en este directorio:
- `prompt.md`: Prompt maestro para que una IA ejecute esta fase de manera autónoma.
- `references/package.json.example`: Ejemplo de configuración de scripts y dependencias.
- `references/prisma-schema.example`: Esquema base de Prisma para la base de datos de envíos.

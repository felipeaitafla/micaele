// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// astro.config.mjs roda fora do pipeline do Vite, então import.meta.env não
// é populado aqui — precisa carregar o .env manualmente com loadEnv.
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || 'g43dummy',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    // O Sanity Studio é React — sem este renderer a rota /studio não compila.
    react(),
  ],
});

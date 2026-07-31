// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'g43dummy',
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    // O Sanity Studio é React — sem este renderer a rota /studio não compila.
    react(),
  ],
});

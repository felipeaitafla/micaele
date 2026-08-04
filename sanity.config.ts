import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Micaele Spa Estética',
  
  // O projectId do Sanity é público (aparece em toda URL de imagem do CDN e no
  // bundle do Studio), então fica aqui como padrão. Assim o Studio funciona em
  // qualquer deploy, mesmo sem env var configurada no host.
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '3e3w3fwu',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});

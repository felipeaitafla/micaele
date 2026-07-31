import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Micaele Spa Estética',
  
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'g43dummy',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});

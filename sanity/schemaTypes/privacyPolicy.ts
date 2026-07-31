import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'privacyPolicy',
  title: 'Política de Privacidade',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      initialValue: 'Política de Privacidade',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

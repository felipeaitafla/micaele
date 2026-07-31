import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Página Inicial',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'reviews', title: 'Depoimentos' },
    { name: 'services', title: 'Serviços' },
    { name: 'special', title: 'Massagens Especiais' },
    { name: 'procedures', title: 'Procedimentos' },
    { name: 'portfolio', title: 'Portfólio' },
    { name: 'about', title: 'Quem Somos' },
    { name: 'space', title: 'Nosso Espaço' },
    { name: 'contact', title: 'Contato e Localização' },
  ],
  fields: [
    // ---------- Hero ----------
    defineField({
      name: 'heroTitle',
      title: 'Título Principal (H1)',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Descrição Hero',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'heroLocation',
      title: 'Texto de Localização (Hero)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto dos Proprietários (recorte com fundo transparente)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Imagem de Fundo do Hero (foto interna do espaço)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      description: 'Recebe um overlay escuro automático para manter a legibilidade do texto.',
    }),

    // ---------- Depoimentos ----------
    defineField({
      name: 'reviewsTitle',
      title: 'Título da Seção de Depoimentos',
      type: 'string',
      group: 'reviews',
    }),
    defineField({
      name: 'testimonials',
      title: 'Depoimentos',
      type: 'array',
      group: 'reviews',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nome do Cliente' },
            { name: 'text', type: 'text', title: 'Depoimento' },
          ],
          preview: { select: { title: 'name', subtitle: 'text' } },
        },
      ],
    }),

    // ---------- Serviços ----------
    defineField({
      name: 'servicesTitle',
      title: 'Título da Seção de Serviços',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Descrição da Seção de Serviços',
      type: 'text',
      group: 'services',
    }),
    defineField({
      name: 'services',
      title: 'Lista de Serviços (Massagens)',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nome do Serviço' },
            { name: 'image', type: 'image', title: 'Foto', options: { hotspot: true } },
          ],
          preview: { select: { title: 'name', media: 'image' } },
        },
      ],
    }),

    // ---------- Massagens Especiais ----------
    defineField({
      name: 'specialServicesTitle',
      title: 'Título Especiais',
      type: 'string',
      group: 'special',
    }),
    defineField({
      name: 'specialServicesSubtitle',
      title: 'Subtítulo Especiais',
      type: 'string',
      group: 'special',
    }),
    defineField({
      name: 'specialServicesDescription',
      title: 'Descrição Especiais',
      type: 'text',
      group: 'special',
    }),
    defineField({
      name: 'specialServices',
      title: 'Serviços Especiais',
      type: 'array',
      group: 'special',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nome' },
            { name: 'description', type: 'string', title: 'Descrição' },
          ],
          preview: { select: { title: 'name', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'specialServicesDisclaimer',
      title: 'Aviso Importante',
      type: 'text',
      group: 'special',
    }),

    // ---------- Procedimentos ----------
    defineField({
      name: 'proceduresTitle',
      title: 'Título Procedimentos',
      type: 'string',
      group: 'procedures',
    }),
    defineField({
      name: 'proceduresDescription',
      title: 'Descrição Procedimentos',
      type: 'text',
      group: 'procedures',
    }),
    defineField({
      name: 'procedures',
      title: 'Procedimentos Estéticos',
      type: 'array',
      group: 'procedures',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nome' },
            { name: 'image', type: 'image', title: 'Foto', options: { hotspot: true } },
          ],
          preview: { select: { title: 'name', media: 'image' } },
        },
      ],
    }),

    // ---------- Portfólio ----------
    defineField({
      name: 'portfolioTitle',
      title: 'Título Portfólio',
      type: 'string',
      group: 'portfolio',
    }),
    defineField({
      name: 'portfolioImages',
      title: 'Fotos do Carrossel',
      type: 'array',
      group: 'portfolio',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'portfolioVideos',
      title: 'Vídeos (YouTube Shorts)',
      type: 'array',
      group: 'portfolio',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'youtubeId',
              type: 'string',
              title: 'ID do vídeo',
              description: 'Somente o ID. Ex.: em youtube.com/shorts/K7Ya1wuoi5s o ID é K7Ya1wuoi5s',
            },
            { name: 'title', type: 'string', title: 'Título (acessibilidade)' },
          ],
          preview: { select: { title: 'title', subtitle: 'youtubeId' } },
        },
      ],
    }),

    // ---------- Quem Somos ----------
    defineField({
      name: 'aboutTitle',
      title: 'Título Quem Somos',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutText',
      title: 'Texto Quem Somos',
      type: 'array',
      group: 'about',
      of: [{ type: 'block' }],
    }),

    // ---------- Nosso Espaço ----------
    defineField({
      name: 'spaceTitle',
      title: 'Título Nosso Espaço',
      type: 'string',
      group: 'space',
    }),
    defineField({
      name: 'spaceImages',
      title: 'Fotos do Espaço',
      type: 'array',
      group: 'space',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    }),

    // ---------- Contato e Localização ----------
    defineField({
      name: 'contactTitle',
      title: 'Título Contato',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Descrição Contato',
      type: 'text',
      group: 'contact',
    }),
    defineField({
      name: 'contactImage',
      title: 'Foto ao lado do Formulário',
      type: 'image',
      group: 'contact',
      options: { hotspot: true },
    }),
    defineField({
      name: 'locationTitle',
      title: 'Título Localização',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'locationText',
      title: 'Texto Localização',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'URL do Google Maps (embed)',
      type: 'url',
      group: 'contact',
      description: 'O atributo src do iframe gerado pelo "Incorporar um mapa" do Google Maps.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Página Inicial' }),
  },
});

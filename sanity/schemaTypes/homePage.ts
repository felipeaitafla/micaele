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
      initialValue:
        'Clínica de Estética e SPA de Massagem em Goiânia-GO especializada em Massagem Relaxante, Terapêutica, Muscular, Pedras Quentes, além de Massagens Especiais.',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Descrição Hero',
      type: 'text',
      group: 'hero',
      initialValue:
        'Trabalhamos ainda com Drenagem Linfática, Liberação Miofascial, Ventosaterapia, Limpeza de Pele, Dermaplaning, Clareamento Íntimo, etc.',
    }),
    defineField({
      name: 'heroLocation',
      title: 'Texto de Localização (Hero)',
      type: 'string',
      group: 'hero',
      initialValue: 'A 2 minutos da Praça Wilson Sales, na Av. T-63',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto dos Proprietários (recorte com fundo transparente)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      description:
        'Enquanto nenhuma foto for enviada aqui, o site usa a imagem local src/assets/donos/donos-ajustada-2.png.',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Imagem de Fundo do Hero (foto interna do espaço)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      description:
        'Recebe um overlay escuro automático para manter a legibilidade do texto. Enquanto vazio, usa src/assets/empresa/espaco-6.jpg.',
    }),

    // ---------- Depoimentos ----------
    defineField({
      name: 'reviewsTitle',
      title: 'Título da Seção de Depoimentos',
      type: 'string',
      group: 'reviews',
      initialValue: 'Somos referência com +60 avaliações nota máxima no Google',
    }),
    defineField({
      name: 'reviewsDescription',
      title: 'Descrição da Seção de Depoimentos',
      type: 'string',
      group: 'reviews',
      initialValue: 'Quem passa pela Micaele volta — e conta o porquê.',
    }),
    defineField({
      name: 'testimonials',
      title: 'Depoimentos (não usado hoje — os depoimentos exibidos vêm ao vivo do widget do Trustindex)',
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
      initialValue: [
        {
          name: 'Talyane Pereira',
          text: 'Ambiente aconchegante, climatizado, super limpinho e cheiroso, além de contar com atendimento personalizado, bem profissional. Super recomendo. Agendem suas terapias e garantam bem-estar, relaxamento e autocuidado.',
        },
        {
          name: 'Tânia Maiara Rodrigues',
          text: 'Espaço maravilhoso, que traz uma ótima energia, além do mais super lindo. Com excelentes profissionais, em especial a Micaele, que é um amor de pessoa e muito educada. Super recomendo.',
        },
        {
          name: 'Zhayne Silva',
          text: 'Ótimo atendimento! Super indico. Ambiente aconchegante. Quem não conheceu, vale a pena conhecer.',
        },
      ],
    }),

    // ---------- Serviços ----------
    defineField({
      name: 'servicesTitle',
      title: 'Título da Seção de Serviços',
      type: 'string',
      group: 'services',
      initialValue: 'Massagens que cuidam do seu corpo e da sua qualidade de vida',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Descrição da Seção de Serviços',
      type: 'text',
      group: 'services',
      initialValue:
        'Cada pessoa sente a dor, o estresse e o cansaço de uma forma diferente. Por isso, oferecemos tratamentos personalizados para promover relaxamento profundo, aliviar dores musculares, reduzir tensões, melhorar a circulação e proporcionar mais bem-estar no dia a dia. Escolha abaixo o serviço que melhor atende à sua necessidade e fale conosco pelo WhatsApp para agendar seu atendimento.',
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
      description:
        'Enquanto um item não tiver foto enviada aqui, o site usa a foto local correspondente em src/assets/servicos/.',
      initialValue: [
        { name: 'Massagem Relaxante' },
        { name: 'Massagem Terapêutica' },
        { name: 'Massagem Muscular' },
        { name: 'Massagem Relaxante com Ventosas' },
        { name: 'Massagem com Pedras Quentes' },
        { name: 'Drenagem Linfática' },
        { name: 'Liberação Miofascial' },
        { name: 'Ventosaterapia' },
        { name: 'Liberação Miofascial + Ventosas' },
      ],
    }),

    // ---------- Massagens Especiais ----------
    defineField({
      name: 'specialServicesTitle',
      title: 'Título Especiais',
      type: 'string',
      group: 'special',
      initialValue: 'Massagens Especiais',
    }),
    defineField({
      name: 'specialServicesSubtitle',
      title: 'Subtítulo Especiais',
      type: 'string',
      group: 'special',
      initialValue: 'Experiências exclusivas de relaxamento e conexão',
    }),
    defineField({
      name: 'specialServicesDescription',
      title: 'Descrição Especiais',
      type: 'text',
      group: 'special',
      initialValue:
        'Proporcione ao seu corpo e mente um refúgio do estresse diário com nossas técnicas de massagem terapêutica e sensorial. Cada sessão é desenhada para renovar suas energias, aliviar tensões profundas e promover um estado de bem-estar absoluto em um ambiente privativo, discreto e acolhedor.',
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
      initialValue: [
        {
          name: 'T@ntrica Sensitiva',
          description: 'Desperte a sensibilidade corporal e restaure o fluxo energético.',
        },
        {
          name: 'Massagem Relaxante a 4 Mãos',
          description: 'Uma imersão dupla de relaxamento para desconectar 100%.',
        },
        {
          name: 'Massagem com Finalizaç@o Manual',
          description: 'Alívio focado de tensões musculares e relaxamento completo.',
        },
        {
          name: 'Nur# Mix',
          description: 'Deslizamento e toque contínuo para uma experiência sensorial única.',
        },
      ],
    }),
    defineField({
      name: 'specialServicesDisclaimer',
      title: 'Aviso Importante',
      type: 'text',
      group: 'special',
      initialValue:
        'Aviso importante: nossos serviços são estritamente terapêuticos e focados no bem-estar e relaxamento. Não realizamos programas ou serviços sexuais. Agradecemos a compreensão.',
    }),

    // ---------- Procedimentos ----------
    defineField({
      name: 'proceduresTitle',
      title: 'Título Procedimentos',
      type: 'string',
      group: 'procedures',
      initialValue: 'Demais procedimentos estéticos',
    }),
    defineField({
      name: 'proceduresDescription',
      title: 'Descrição Procedimentos',
      type: 'text',
      group: 'procedures',
      initialValue:
        'Os procedimentos estéticos realizados pela Micaele Spa Estética são tratamentos seguros e modernos que cuidam da sua pele e do seu corpo, realçando sua beleza natural, promovendo bem-estar e autoestima.',
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
      description:
        'Enquanto um item não tiver foto enviada aqui, o site usa a foto local correspondente em src/assets/servicos/.',
      initialValue: [
        { name: 'Limpeza de Pele Profunda' },
        { name: 'Dermaplaning' },
        { name: 'Esfoliação com Argila' },
        { name: 'Microagulhamento' },
        { name: 'Clareamento Íntimo' },
        { name: 'Banho de Lua' },
        { name: 'Depilação na Máquina' },
      ],
    }),

    // ---------- Portfólio ----------
    defineField({
      name: 'portfolioTitle',
      title: 'Título Portfólio',
      type: 'string',
      group: 'portfolio',
      initialValue: 'Portfólio',
    }),
    defineField({
      name: 'portfolioDescription',
      title: 'Descrição Portfólio',
      type: 'string',
      group: 'portfolio',
      initialValue: 'Um pouco do nosso dia a dia e dos resultados dos tratamentos.',
    }),
    defineField({
      name: 'portfolioImages',
      title: 'Fotos do Carrossel',
      type: 'array',
      group: 'portfolio',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
      description:
        'Enquanto vazio, o site usa as fotos locais em src/assets/portfolio/.',
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
      initialValue: [
        { youtubeId: 'K7Ya1wuoi5s', title: 'Micaele Spa Estética — vídeo 1' },
        { youtubeId: 'cPQKRXpS4RI', title: 'Micaele Spa Estética — vídeo 2' },
        { youtubeId: '1w9lkiuSDCs', title: 'Micaele Spa Estética — vídeo 3' },
        { youtubeId: 'tlt-iL2VzkU', title: 'Micaele Spa Estética — vídeo 4' },
        { youtubeId: 's0CUxDZ1K1Y', title: 'Micaele Spa Estética — vídeo 5' },
        { youtubeId: '5TkaGGTPMNo', title: 'Micaele Spa Estética — vídeo 6' },
      ],
    }),

    // ---------- Quem Somos ----------
    defineField({
      name: 'aboutTitle',
      title: 'Título Quem Somos',
      type: 'string',
      group: 'about',
      initialValue: 'Quem somos',
    }),
    defineField({
      name: 'aboutText',
      title: 'Texto Quem Somos',
      type: 'array',
      group: 'about',
      of: [{ type: 'block' }],
      initialValue: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Na Micaele Spa Estética, acreditamos que cuidar do corpo e da mente é essencial para uma vida mais equilibrada. Localizado no Jardim América, em Goiânia-GO, nosso espaço foi criado para oferecer uma experiência exclusiva de bem-estar, relaxamento e estética, em um ambiente sofisticado, climatizado e acolhedor.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Contamos com uma equipe de profissionais altamente qualificados, com atendimento personalizado e foco na excelência, proporcionando momentos únicos de cuidado, conforto e renovação. Nosso compromisso é promover mais qualidade de vida, autoestima e satisfação em cada atendimento, sempre com discrição, profissionalismo e respeito aos nossos clientes.',
            },
          ],
        },
      ],
    }),

    // ---------- Nosso Espaço ----------
    defineField({
      name: 'spaceTitle',
      title: 'Título Nosso Espaço',
      type: 'string',
      group: 'space',
      initialValue: 'Conheça nosso espaço',
    }),
    defineField({
      name: 'spaceDescription',
      title: 'Descrição Nosso Espaço',
      type: 'string',
      group: 'space',
      initialValue:
        'Um ambiente pensado para o seu conforto: climatizado, discreto e acolhedor do primeiro ao último minuto.',
    }),
    defineField({
      name: 'spaceImages',
      title: 'Fotos do Espaço',
      type: 'array',
      group: 'space',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
      description: 'Enquanto vazio, o site usa as fotos locais em src/assets/empresa/.',
    }),

    // ---------- Contato e Localização ----------
    defineField({
      name: 'contactTitle',
      title: 'Título Contato',
      type: 'string',
      group: 'contact',
      initialValue: 'Entre em contato conosco',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Descrição Contato',
      type: 'text',
      group: 'contact',
      initialValue:
        'Preencha o formulário abaixo e um de nossos consultores entrará em contato com você.',
    }),
    defineField({
      name: 'contactImage',
      title: 'Foto ao lado do Formulário',
      type: 'image',
      group: 'contact',
      options: { hotspot: true },
      description: 'Enquanto vazio, o site usa a foto local src/assets/empresa/fachada.jpg.',
    }),
    defineField({
      name: 'locationTitle',
      title: 'Título Localização',
      type: 'string',
      group: 'contact',
      initialValue: 'Localização privilegiada',
    }),
    defineField({
      name: 'locationText',
      title: 'Texto Localização',
      type: 'string',
      group: 'contact',
      initialValue: 'A 2 minutos da Praça Wilson Sales, na Av. T-63',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'URL do Google Maps (embed)',
      type: 'url',
      group: 'contact',
      description: 'O atributo src do iframe gerado pelo "Incorporar um mapa" do Google Maps.',
      initialValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1860678387316!2d-49.280757300000005!3d-16.7175653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7dcb4c0cd63%3A0x9ccbad02d854a873!2sMicaele%20Spa%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1785498746823!5m2!1spt-BR!2sbr',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Página Inicial' }),
  },
});

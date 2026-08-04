/**
 * Conteúdo padrão do site — transcrito do documento de copy do cliente.
 *
 * Cada componente usa `dadosDoSanity ?? conteúdo daqui`, então o site já nasce
 * completo e o cliente pode sobrescrever qualquer campo pelo Studio depois.
 */

export const settings = {
  companyName: 'Micaele Spa Estética',
  phone: '5562982045058',
  phoneDisplay: '(62) 98204-5058',
  phone2: '(62) 3637-4234',
  email: 'contato@micaellemassagem.com.br',
  address:
    'R. C 152, Quadra 383 - Lote 20/21 Casa 03 - Jardim América, Goiânia - GO, 74275-120',
  hours1: 'Segunda a Sexta: 10h00 às 19h00',
  hours2: 'Sábado: 10h00 às 15h00',
  cnpj: '50.707.406/0001-87',
  instagram: 'https://www.instagram.com/micaelespaestetica6',
  facebook:
    'https://www.facebook.com/people/Micaele-Est%C3%A9tica-e-SPA/61552982533126/',
  youtube: 'https://www.youtube.com/channel/UCYSXxjuTF0alvypA04dhmHA',
  googleReviewsUrl:
    'https://www.google.com/maps/place/Micaele+Spa+Est%C3%A9tica/@-16.7175653,-49.2807573,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef7dcb4c0cd63:0x9ccbad02d854a873!8m2!3d-16.7175653!4d-49.2807573!16s%2Fg%2F11sszj29pg',
};

export const home = {
  // ---------- Hero ----------
  heroTitle:
    'Clínica de Estética e SPA de Massagem em Goiânia-GO especializada em Massagem Relaxante, Terapêutica, Muscular, Pedras Quentes, além de Massagens Especiais.',
  heroDescription:
    'Trabalhamos ainda com Drenagem Linfática, Liberação Miofascial, Ventosaterapia, Limpeza de Pele, Dermaplaning, Clareamento Íntimo, etc.',
  heroLocation: 'A 2 minutos da Praça Wilson Sales, na Av. T-63',

  // ---------- Depoimentos ----------
  reviewsTitle:
    'Somos referência com +60 avaliações nota máxima no Google',
  reviewsDescription:
    'Quem passa pela Micaele volta — e conta o porquê.',
  // Avaliações reais publicadas no perfil do Google da clínica.
  testimonials: [
    {
      name: 'Talyane Pereira',
      time: 'há 1 mês',
      text: 'Ambiente aconchegante, climatizado, super limpinho e cheiroso, além de contar com atendimento personalizado, bem profissional. Super recomendo. Agendem suas terapias e garantam bem-estar, relaxamento e autocuidado.',
    },
    {
      name: 'Tânia Maiara Rodrigues',
      time: 'há 9 meses',
      text: 'Espaço maravilhoso, que traz uma ótima energia, além do mais super lindo. Com excelentes profissionais, em especial a Micaele, que é um amor de pessoa e muito educada. Super recomendo.',
    },
    {
      name: 'Zhayne Silva',
      time: 'há 9 meses',
      text: 'Ótimo atendimento! Super indico. Ambiente aconchegante. Quem não conheceu, vale a pena conhecer.',
    },
  ],

  // ---------- Serviços ----------
  servicesTitle: 'Massagens que cuidam do seu corpo e da sua qualidade de vida',
  servicesDescription:
    'Cada pessoa sente a dor, o estresse e o cansaço de uma forma diferente. Por isso, oferecemos tratamentos personalizados para promover relaxamento profundo, aliviar dores musculares, reduzir tensões, melhorar a circulação e proporcionar mais bem-estar no dia a dia. Escolha abaixo o serviço que melhor atende à sua necessidade e fale conosco pelo WhatsApp para agendar seu atendimento.',
  // `slug` casa com o arquivo em src/assets/servicos/<slug>.jpg
  services: [
    { name: 'Massagem Relaxante', slug: 'massagem-relaxante' },
    { name: 'Massagem Terapêutica', slug: 'massagem-terapeutica' },
    { name: 'Massagem Muscular', slug: 'massagem-muscular' },
    { name: 'Massagem Relaxante com Ventosas', slug: 'massagem-relaxante-ventosas' },
    { name: 'Massagem com Pedras Quentes', slug: 'massagem-pedras-quentes' },
    { name: 'Drenagem Linfática', slug: 'drenagem-linfatica' },
    { name: 'Liberação Miofascial', slug: 'liberacao-miofascial' },
    { name: 'Ventosaterapia', slug: 'ventosaterapia' },
    { name: 'Liberação Miofascial + Ventosas', slug: 'liberacao-miofascial-ventosas' },
  ],

  // ---------- Massagens Especiais ----------
  specialServicesTitle: 'Massagens Especiais',
  specialServicesSubtitle: 'Experiências exclusivas de relaxamento e conexão',
  specialServicesDescription:
    'Proporcione ao seu corpo e mente um refúgio do estresse diário com nossas técnicas de massagem terapêutica e sensorial. Cada sessão é desenhada para renovar suas energias, aliviar tensões profundas e promover um estado de bem-estar absoluto em um ambiente privativo, discreto e acolhedor.',
  specialServices: [
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
  specialServicesDisclaimer:
    'Aviso importante: nossos serviços são estritamente terapêuticos e focados no bem-estar e relaxamento. Não realizamos programas ou serviços sexuais. Agradecemos a compreensão.',

  // ---------- Procedimentos ----------
  proceduresTitle: 'Demais procedimentos estéticos',
  proceduresDescription:
    'Os procedimentos estéticos realizados pela Micaele Spa Estética são tratamentos seguros e modernos que cuidam da sua pele e do seu corpo, realçando sua beleza natural, promovendo bem-estar e autoestima.',
  procedures: [
    { name: 'Limpeza de Pele Profunda', slug: 'limpeza-de-pele-profunda' },
    { name: 'Dermaplaning', slug: 'dermaplaning' },
    { name: 'Esfoliação com Argila', slug: 'esfoliacao-com-argila' },
    { name: 'Microagulhamento', slug: 'microagulhamento' },
    { name: 'Clareamento Íntimo', slug: 'clareamento-intimo' },
    { name: 'Banho de Lua', slug: 'banho-de-lua' },
    { name: 'Depilação na Máquina', slug: 'depilacao-na-maquina' },
  ],

  // ---------- Portfólio ----------
  portfolioTitle: 'Portfólio',
  portfolioDescription: 'Um pouco do nosso dia a dia e dos resultados dos tratamentos.',
  portfolioVideos: [
    { youtubeId: 'K7Ya1wuoi5s', title: 'Micaele Spa Estética — vídeo 1' },
    { youtubeId: 'cPQKRXpS4RI', title: 'Micaele Spa Estética — vídeo 2' },
    { youtubeId: '1w9lkiuSDCs', title: 'Micaele Spa Estética — vídeo 3' },
    { youtubeId: 'tlt-iL2VzkU', title: 'Micaele Spa Estética — vídeo 4' },
    { youtubeId: 's0CUxDZ1K1Y', title: 'Micaele Spa Estética — vídeo 5' },
    { youtubeId: '5TkaGGTPMNo', title: 'Micaele Spa Estética — vídeo 6' },
  ],

  // ---------- Quem Somos ----------
  aboutTitle: 'Quem somos',
  aboutParagraphs: [
    'Na Micaele Spa Estética, acreditamos que cuidar do corpo e da mente é essencial para uma vida mais equilibrada. Localizado no Jardim América, em Goiânia-GO, nosso espaço foi criado para oferecer uma experiência exclusiva de bem-estar, relaxamento e estética, em um ambiente sofisticado, climatizado e acolhedor.',
    'Contamos com uma equipe de profissionais altamente qualificados, com atendimento personalizado e foco na excelência, proporcionando momentos únicos de cuidado, conforto e renovação. Nosso compromisso é promover mais qualidade de vida, autoestima e satisfação em cada atendimento, sempre com discrição, profissionalismo e respeito aos nossos clientes.',
  ],

  // ---------- Nosso Espaço ----------
  spaceTitle: 'Conheça nosso espaço',
  spaceDescription:
    'Um ambiente pensado para o seu conforto: climatizado, discreto e acolhedor do primeiro ao último minuto.',

  // ---------- Contato ----------
  contactTitle: 'Entre em contato conosco',
  contactDescription:
    'Preencha o formulário abaixo e um de nossos consultores entrará em contato com você.',

  // ---------- Localização ----------
  locationTitle: 'Localização privilegiada',
  locationText: 'A 2 minutos da Praça Wilson Sales, na Av. T-63',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1860678387316!2d-49.280757300000005!3d-16.7175653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7dcb4c0cd63%3A0x9ccbad02d854a873!2sMicaele%20Spa%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1785498746823!5m2!1spt-BR!2sbr',
};

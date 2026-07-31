import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Configurações Globais',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Nome da Empresa',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefone/WhatsApp (Apenas números)',
      type: 'string',
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Telefone/WhatsApp (Formatado)',
      type: 'string',
    }),
    defineField({
      name: 'phone2',
      title: 'Telefone Secundário',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Endereço Completo',
      type: 'string',
    }),
    defineField({
      name: 'hours1',
      title: 'Horário de Atendimento 1',
      type: 'string',
    }),
    defineField({
      name: 'hours2',
      title: 'Horário de Atendimento 2',
      type: 'string',
    }),
    defineField({
      name: 'cnpj',
      title: 'CNPJ',
      type: 'string',
    }),
    defineField({
      name: 'googleReviewsUrl',
      title: 'URL do Perfil no Google (avaliações)',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    }),
  ],
});

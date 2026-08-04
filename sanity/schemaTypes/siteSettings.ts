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
      initialValue: 'Micaele Spa Estética',
    }),
    defineField({
      name: 'phone',
      title: 'Telefone/WhatsApp (Apenas números)',
      type: 'string',
      initialValue: '5562982045058',
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Telefone/WhatsApp (Formatado)',
      type: 'string',
      initialValue: '(62) 98204-5058',
    }),
    defineField({
      name: 'phone2',
      title: 'Telefone Secundário',
      type: 'string',
      initialValue: '(62) 3637-4234',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      initialValue: 'contato@micaellemassagem.com.br',
    }),
    defineField({
      name: 'address',
      title: 'Endereço Completo',
      type: 'string',
      initialValue:
        'R. C 152, Quadra 383 - Lote 20/21 Casa 03 - Jardim América, Goiânia - GO, 74275-120',
    }),
    defineField({
      name: 'hours1',
      title: 'Horário de Atendimento 1',
      type: 'string',
      initialValue: 'Segunda a Sexta: 10h00 às 19h00',
    }),
    defineField({
      name: 'hours2',
      title: 'Horário de Atendimento 2',
      type: 'string',
      initialValue: 'Sábado: 10h00 às 15h00',
    }),
    defineField({
      name: 'cnpj',
      title: 'CNPJ',
      type: 'string',
      initialValue: '50.707.406/0001-87',
    }),
    defineField({
      name: 'googleReviewsUrl',
      title: 'URL do Perfil no Google (avaliações)',
      type: 'url',
      initialValue:
        'https://www.google.com/maps/place/Micaele+Spa+Est%C3%A9tica/@-16.7175653,-49.2807573,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef7dcb4c0cd63:0x9ccbad02d854a873!8m2!3d-16.7175653!4d-49.2807573!16s%2Fg%2F11sszj29pg',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      initialValue: 'https://www.instagram.com/micaelespaestetica6',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      initialValue:
        'https://www.facebook.com/people/Micaele-Est%C3%A9tica-e-SPA/61552982533126/',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      initialValue: 'https://www.youtube.com/channel/UCYSXxjuTF0alvypA04dhmHA',
    }),
  ],
});

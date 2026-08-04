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
      initialValue: 'Política de Privacidade e Cookies',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      initialValue: [
  {
    "_type": "block",
    "_key": "jv3axrhh",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "6d7wacdf",
        "text": "Esta política é válida a partir de Julho de 2026.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "89si7met",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "o6ueonn7",
        "text": "50.707.406 MICAELE MARQUES PEREIRA ARVELINO DE QUEIROZ (Micaele Spa Estética), pessoa jurídica de direito privado, CNPJ 50.707.406/0001-87, sob endereço R. C 152, Quadra 383 - Lote 20/21 Casa 03 - Jardim América, Goiânia - GO, 74275-120, Brasil (“Empresa” ou “nós”) leva a sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários (“Usuários” ou “você”) do site “https://micaellemassagem.com.br/” e qualquer outro site, Loja, aplicativo operado pela Empresa (aqui designados, simplesmente, “Site”).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "um614qk1",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "t8j6gnjw",
        "text": "Esta Política de Privacidade (“Política de Privacidade”) destina-se a informá-lo sobre o modo como nós utilizamos e divulgamos informações coletadas em suas visitas ao nosso Site e em mensagens que trocamos com você (“Comunicações”).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "qlj7dyn5",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "3t98wxrp",
        "text": "AO ACESSAR O SITE, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE E DE ACORDO COM ESTA POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS QUE VOCÊ DISPONIBILIZAR NO SITE.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "pbr9csty",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "xqeulb56",
        "text": "Esta Política de Privacidade fornece uma visão geral de nossas práticas de privacidade e das escolhas que você pode fazer, bem como direitos que você pode exercer em relação aos Dados Pessoais tratados por nós. Se você tiver alguma dúvida sobre o uso de Dados Pessoais, entre em contato com contato@micaellemassagem.com.br",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "i8jhnlvy",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "78bg6qf2",
        "text": "Além disso, a Política de Privacidade não se aplica a quaisquer aplicativos, produtos, serviços, site ou recursos de mídia social de terceiros que possam ser oferecidos ou acessados por meio do Site. O acesso a esses links fará com que você deixe o Site e possa resultar na coleta ou compartilhamento de informações sobre você por terceiros. Nós não controlamos, endossamos ou fazemos quaisquer representações sobre esses sites de terceiros ou suas práticas de privacidade, que podem ser diferentes das nossas. Recomendamos que você revise a política de privacidade de qualquer site com o qual você interaja antes de permitir a coleta e o uso de seus Dados Pessoais.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "dnmt77o0",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "6rhje06p",
        "text": "Caso você nos envie Dados Pessoais referentes a outras pessoas físicas, você declara ter a competência para fazê-lo e declara ter obtido o consentimento necessário para autorizar o uso de tais informações nos termos desta Política de Privacidade.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "qut476dd",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "mhszj128",
        "text": "Definições",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "gm7pp0jr",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "wvmcby6k",
        "text": "Para os fins desta Política de Privacidade:",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "h4qja5fz",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "5wb32y0m",
        "text": "“Dados Pessoais” significa qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como por exemplo, nome, CPF, data de nascimento, endereço IP, dentre outros;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "0b4oj713",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "fufsapoh",
        "text": "“Dados Pessoais Sensíveis” significa qualquer informação que revele, em relação a uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "p8ereepz",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "9oun14fh",
        "text": "“Tratamento de Dados Pessoais” significa qualquer operação efetuada no âmbito dos Dados Pessoais, por meio de meios automáticos ou não, tal como a recolha, gravação, organização, estruturação, armazenamento, adaptação ou alteração, recuperação, consulta, utilização, divulgação por transmissão, disseminação ou, alternativamente, disponibilização, harmonização ou associação, restrição, eliminação ou destruição. Também é considerado Tratamento de Dados Pessoais qualquer outra operação prevista nos termos da legislação aplicável;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "emylsrdj",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "flb4j6tk",
        "text": "“Leis de Proteção de Dados” significa todas as disposições legais que regulem o Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a Lei nº 13.709/18, Lei Geral de Proteção de Dados Pessoais (“LGPD”).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "uj3s61rf",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "x0sqz1kj",
        "text": "Uso de Dados Pessoais",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "dv4tv19p",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "l14vckuw",
        "text": "Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo quando você estiver adquirindo produtos e/ou serviços no Site, personalizando e melhorando sua experiência. Exemplos de como usamos os dados incluem:",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "ctp1eopf",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "32oxrv82",
        "text": "Viabilizar que você adquira produtos e/ou serviços no Site;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "11c6mwg3",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "883jg3jx",
        "text": "Para confirmar ou corrigir as informações que temos sobre você;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "z3ogb4xk",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "bk5n7zwq",
        "text": "Para enviar informações que acreditamos ser do seu interesse;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "wsa3i1xb",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "nqmonhq3",
        "text": "Para personalizar sua experiência de uso no Site;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "exl0fof3",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "qnbkytwm",
        "text": "Para personalizar o envio de publicidades para você, baseada em seu interesse em nosso Site; e",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "lrwhb9dj",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "c626ewd4",
        "text": "Para entrarmos em contato por um número de telefone e/ou endereço de e-mail fornecido. Podemos entrar em contato com você pessoalmente, por mensagem de voz, através de equipamentos de discagem automática, por mensagens de texto (SMS), por e-mail, ou por qualquer outro meio de comunicação que seu dispositivo seja capaz de receber, nos termos da lei e para fins comerciais razoáveis.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "4iwy4esd",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "ic9pbqg9",
        "text": "Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que julgarmos necessária ou adequada: (a) nos termos das Leis de Proteção de Dados; (b) para atender exigências de processo judicial; (c) para cumprir decisão judicial, decisão regulatória ou decisão de autoridades competentes, incluindo autoridades fora do país de residência; (d) para proteger nossas operações; (e) para proteger direitos, privacidade, segurança nossos, seus ou de terceiros; (f) para detectar e prevenir fraude; (g) permitir-nos usar as ações disponíveis ou limitar danos que venhamos a sofrer; (h) de outros modos permitidos por lei.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "7okhdv0a",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "htj9pi77",
        "text": "NOSSO SITE NÃO SE DESTINA A PESSOAS COM MENOS DE 18 (DEZOITO) ANOS E PEDIMOS QUE TAIS PESSOAS NÃO NOS FORNEÇAM QUALQUER DADO PESSOAL",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "6i686dpo",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "pjecoupy",
        "text": "Não fornecimento de Dados Pessoais",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "zdp6oesj",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "z7g97l7u",
        "text": "Você não é obrigado a compartilhar os Dados Pessoais que solicitamos, no entanto, se você optar por não os compartilhar, em alguns casos, não poderemos fornecer a você acesso completo ao Site, alguns recursos especializados ou ser capaz de prestar a assistência necessária ou, ainda, viabilizar a entrega do produto ou prestar o serviço contratado por você.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "c300inki",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "mqk2x4ht",
        "text": "Dados coletados",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "37urq3z3",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "zerotqno",
        "text": "O público em geral poderá navegar no Site sem necessidade de qualquer cadastro e envio de Dados Pessoais. No entanto, algumas das funcionalidades do Site poderão depender de cadastro e envio de Dados Pessoais como concluir a compra/contratação do serviço e/ou a viabilizar a entrega do produto/prestação do serviço por nós.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "6a51pfyf",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "9xafkoru",
        "text": "No contato ao Site, nós podemos coletar:",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "qs0l3g7x",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "9far3xs0",
        "text": "Dados de contato. Nome, sobrenome, número de telefone, cidade, Estado e endereço de e-mail; e",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "jjcm00nc",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "52u1u9ht",
        "text": "Informações que você envia. Informações que você envia via formulário (dúvidas, reclamações, sugestões, críticas, elogios etc.).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "4azch91y",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "6wmpfttv",
        "text": "Na navegação geral no Site, nós poderemos coletar:",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "qda83zxu",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "jnehmq1f",
        "text": "Dados de localização. Dados de geolocalização quando você acessa o Site;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "ujxf21hc",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "djea3s3j",
        "text": "Preferências. Informações sobre suas preferências e interesses em relação aos produtos/serviços (quando você nos diz o que eles são ou quando os deduzimos do que sabemos sobre você);",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "77z047mm",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "1kc27r8s",
        "text": "Dados de navegação no Site. Informações sobre suas visitas e atividades no Site, incluindo o conteúdo (e quaisquer anúncios) com os quais você visualiza e interage, informações sobre o navegador e o dispositivo que você está usando, seu endereço IP, sua localização, o endereço do site a partir do qual você chegou. Algumas dessas informações são coletadas usando nossas Ferramentas de Coleta Automática de Dados, que incluem cookies, web beacons e links da web incorporados. Para saber mais, leia como nós usamos Ferramentas de Coleta Automática de Dados no item 7 abaixo;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "wnjkvznx",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "f5px792m",
        "text": "Dados anônimos ou agregados. Respostas anônimas para pesquisas ou informações anônimas e agregadas sobre como o Site é usufruída. Durante nossas operações, em certos casos, aplicamos um processo de desidentificação ou pseudonimização aos seus dados para que seja razoavelmente improvável que você identifique você através do uso desses dados com a tecnologia disponível; e",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "tgykwf5z",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "pj832hg9",
        "text": "Outras informações que podemos coletar. Outras informações que não revelem especificamente a sua identidade ou que não são diretamente relacionadas a um indivíduo, tais como informações sobre navegador e dispositivo; dados de uso do Site; e informações coletadas por meio de cookies, pixel tags e outras tecnologias.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "gisvni6y",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "djg0fquw",
        "text": "Ao menos que você informe em algum formulário livre preenchido por você, nós não coletamos Dados Pessoais Sensíveis.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "z78tjzd6",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "sw3tmcvk",
        "text": "Compartilhamento de Dados Pessoais com terceiros",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "9cbli48r",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "08bih0qz",
        "text": "Nós poderemos compartilhar seus Dados Pessoais:",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "1p1xwmy7",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "x1i1picr",
        "text": "Com a(s) empresa(s) parceira(s) que você selecionar ou optar em enviar os seus dados, dúvidas, perguntas etc., bem como com provedores de serviços ou parceiros para gerenciar ou suportar certos aspectos de nossas operações comerciais em nosso nome. Esses provedores de serviços ou parceiros podem estar localizados nos Estados Unidos, na Argentina, no Brasil ou em outros locais globais, incluindo servidores para homologação e produção, e prestadores de serviços de hospedagem e armazenamento de dados, gerenciamento de fraudes, suporte ao cliente, vendas em nosso nome, atendimento de pedidos, personalização de conteúdo, atividades de publicidade e marketing (incluindo publicidade digital e personalizada) e serviços de TI, por exemplo;",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "bark4fxd",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "sbnfjjun",
        "text": "Com terceiros, com o objetivo de nos ajudar a gerenciar o Site; e",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "iamh5fv1",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "r4csvj3g",
        "text": "Com terceiros, caso ocorra qualquer reorganização, fusão, venda, joint venture, cessão, transmissão ou transferência de toda ou parte da nossa empresa, ativo ou capital (incluindo os relativos à falência ou processos semelhantes).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "qdvmgj10",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "68r4zwae",
        "text": "Transferências internacionais de Dados",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "2o31jxg3",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "6gn1gzbp",
        "text": "Dados Pessoais e informações de outras naturezas coletadas por nós podem ser transferidos ou acessados por entidades pertencentes ao grupo corporativo das empresas parceiras em todo o mundo de acordo com esta Política de Privacidade.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "4jrhsw5o",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "llmbdust",
        "text": "Forma de coleta automática de Dados Pessoais",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "frehjniv",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "ipjf0l91",
        "text": "Quando você visita o Site, ele pode armazenar ou recuperar informações em seu navegador, seja na forma de cookies e de outras tecnologias semelhantes. Essas informações podem ser sobre você, suas preferências ou seu dispositivo e são usadas principalmente para que o Site funcione como você espera. As informações geralmente não o identificam diretamente, mas podem oferecer uma experiência na internet mais personalizada.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "hrutekh2",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "rc4frk33",
        "text": "De acordo com esta Política de Privacidade, nós e nossos prestadores de serviços terceirizados podemos coletar seus Dados Pessoais de diversas formas, incluindo, entre outros:",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "87nwa9kz",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "uepnsq6w",
        "text": "Por meio do navegador ou do dispositivo: Algumas informações são coletadas pela maior parte dos navegadores ou automaticamente por meio de dispositivos de acesso à internet, como o tipo de computador, resolução da tela, nome e versão do sistema operacional, modelo e fabricante do dispositivo, idioma, tipo e versão do navegador de Internet que está utilizando. Podemos utilizar essas informações para assegurar que o Site funcione adequadamente.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "sw497gio",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "he7lmxyd",
        "text": "Uso de cookies: Os cookies permitem a coleta de informações tais como o tipo de navegador, o tempo dispendido no Site, as páginas visitadas, as preferências de idioma, e outros dados de tráfego anônimos. Nós e nossos prestadores de serviços podemos utilizar essas informações para, dentre outros, personalizar sua experiência ao utilizar o Site, assim como para direcionar publicidade para você, de acordo com os seus interesses. Também coletamos informações estatísticas sobre o uso do Site para aprimoramento contínuo do nosso design e funcionalidade.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "aszlsi0t",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "z5jq1r2q",
        "text": "Caso não deseje que suas informações sejam coletadas por meio de cookies, você pode configurar os cookies no menu \"opções\" ou \"preferências\" do seu browser (Google Chrome, Mozilla Firefox, Safari, Internet Explorer, Microsoft Edge ou Opera).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "k123u629",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "4i8q0tbt",
        "text": "Caso deseje saber um pouco mais sobre os cookies de publicidade e remarketing, que servem para direcionarmos publicidade em função dos interesses de cada usuário e do número de visitas que realizou em nosso site e suas buscas na internet, acesse a política de cada empresa (Facebook, Google e/ou Bing).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "a7nizn58",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "w8wh18cg",
        "text": "Uso de pixel tags e outras tecnologias similares: Pixel tags (também conhecidos como Web beacons e GIFs invisíveis) podem ser utilizados para rastrear ações de usuários do Site (incluindo destinatários de e-mails), medir o sucesso das nossas campanhas de marketing e coletar dados estatísticos sobre o uso do Site e taxas de resposta. Em caso de ter ativa a personalização de anúncios em ferramentas como Facebook, Google ou Bing, a informação pode ser usada para mostrar anúncios em seus serviços. No caso de você não desejar ser rastreado pode pedir a desativação para cada um dos serviços (Facebook, Google e/ou Bing).",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "olb2ojl7",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "i40y1le3",
        "text": "Podemos contratar empresas de publicidade comportamental, para obter relatórios sobre os anúncios do Site em toda a internet. Para isso, essas empresas utilizam cookies, pixel tags e outras tecnologias para coletar informações sobre a sua utilização, ou sobre a utilização de outros usuários, do nosso Site e de site de terceiros. Nós não somos responsáveis por pixel tags, cookies e outras tecnologias similares utilizadas por terceiros. Você pode configurar suas preferências no menu do seu browser. Esteja ciente de que se você mudar de computador ou navegador, ou usar vários computadores ou navegadores, você precisará repetir este processo para cada computador e cada navegador.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "yra504ga",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "gzv26t4b",
        "text": "Direitos do Usuário",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "2upf90cd",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "h6daazq5",
        "text": "Você pode, a qualquer momento, requerer: (i) confirmação de que seus Dados Pessoais estão sendo tratados; (ii) acesso aos seus Dados Pessoais; (iii) correções a dados incompletos, inexatos ou desatualizados; (iv) anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto em lei; (v) portabilidade de Dados Pessoais a outro prestador de serviços, contanto que isso não afete nossos segredos industriais e comerciais; (vi) eliminação de Dados Pessoais tratados com seu consentimento, na medida do permitido em lei; (vii) informações sobre as entidades às quais seus Dados Pessoais tenham sido compartilhados; (viii) informações sobre a possibilidade de não fornecer o consentimento e sobre as consequências da negativa; e (ix) revogação do consentimento. Os seus pedidos serão tratados com especial cuidado de forma a que possamos assegurar a eficácia dos seus direitos. Poderá lhe ser pedido que faça prova da sua identidade de modo a assegurar que a partilha dos Dados Pessoais é apenas feita com o seu titular.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "8tdndvcg",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "ri44zg2c",
        "text": "Você deverá ter em mente que, em certos casos (por exemplo, devido a requisitos legais), o seu pedido poderá não ser imediatamente satisfeito, além de que nós poderemos não conseguir atendê-lo por conta de cumprimento de obrigações legais.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "zt7m2vfg",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "2p80ck3j",
        "text": "Segurança dos Dados Pessoais",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "k3tsptgr",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "isjwyf4m",
        "text": "Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção de Dados adequadas para proteção dos Dados Pessoais na nossa organização. Infelizmente, nenhuma transmissão ou sistema de armazenamento de dados tem a garantia de serem 100% seguros. Caso tenha motivos para acreditar que sua interação conosco tenha deixado de ser segura (por exemplo, caso acredite que a segurança de qualquer uma de suas contas foi comprometida), favor nos notificar imediatamente.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "vh9wb0sf",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "cu1yecyk",
        "text": "Links de hipertexto para outros sites e redes sociais",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "wvxta6rk",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "9mfc696c",
        "text": "Esse Site poderá, de tempos a tempos, conter links de hipertexto que redirecionará você para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Se você clicar em um desses links para qualquer um desses sites, lembramos que cada site possui as suas próprias práticas de privacidade e que não somos responsáveis por essas políticas. Consulte as referidas políticas antes de enviar quaisquer Dados Pessoais para esses sites.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "j3emu1wj",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "5m9mmzgv",
        "text": "Não nos responsabilizamos pelas políticas e práticas de coleta, uso e divulgação (incluindo práticas de proteção de dados) de outras organizações, tais como Facebook, Apple, Google, Microsoft, ou de qualquer outro desenvolvedor de software ou provedor de aplicativo, Loja de mídia social, sistema operacional, prestador de serviços de internet sem fio ou fabricante de dispositivos, incluindo todos os Dados Pessoais que divulgar para outras organizações por meio dos aplicativos, relacionadas a tais aplicativos, ou publicadas em nossas páginas em mídias sociais. Nós recomendamos que você se informe sobre a política de privacidade de cada site visitado ou de cada prestador de serviço utilizado.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "tz4pvyvm",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "utjeh6o4",
        "text": "Atualizações desta Política de Privacidade",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "b3ke3wev",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "j7kzq9lq",
        "text": "Se modificarmos nossa Política de Privacidade, publicaremos o novo texto no Site, com a data de revisão atualizada. Podemos alterar esta Política de Privacidade a qualquer momento. Caso haja alteração significativa nos termos dessa Política de Privacidade, podemos informá-lo por meio das informações de contato que tivermos em nosso banco de dados ou por meio de notificação em nosso Site.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "cyqik949",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "j1z9dpao",
        "text": "Recordamos que nós temos como compromisso não tratar os seus Dados Pessoais de forma incompatível com os objetivos descritos acima, exceto se de outra forma requerido por lei ou ordem judicial.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "qilkpior",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "cwmvcjs4",
        "text": "Sua utilização do Site após as alterações significa que aceitou as Políticas de Privacidade revisadas. Caso, após a leitura da versão revisada, você não esteja de acordo com seus termos, favor encerrar o acesso ao Site.",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "dudcl4i1",
    "style": "h2",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "o11ed7oc",
        "text": "Pessoa responsável do tratamento dos Dados Pessoais",
        "marks": []
      }
    ]
  },
  {
    "_type": "block",
    "_key": "fmxoznki",
    "style": "normal",
    "markDefs": [],
    "children": [
      {
        "_type": "span",
        "_key": "v8ak170u",
        "text": "Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade e/ou nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao Tratamento de seus Dados Pessoais, favor contatar-nos através do e-mail contato@micaellemassagem.com.br",
        "marks": []
      }
    ]
  }
],
    }),
  ],
});

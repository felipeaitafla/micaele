/**
 * Endpoint do formulário de contato — roda como Cloudflare Pages Function.
 *
 * A chave do Resend é secreta (permite enviar e-mail em nome do domínio), por
 * isso vive só aqui no servidor, nunca no HTML. Configure em:
 * Cloudflare Pages → Settings → Variables and Secrets
 *   RESEND_API_KEY  (tipo Secret)
 *   CONTACT_TO      (opcional) destinatário
 *   CONTACT_FROM    (opcional) remetente
 */

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

/**
 * Enquanto o domínio não estiver verificado em resend.com/domains, o Resend só
 * aceita o remetente de sandbox e entrega apenas ao dono da conta. Depois de
 * verificar, basta definir CONTACT_FROM e CONTACT_TO no painel — sem mexer no
 * código nem refazer deploy do site.
 */
const FROM_PADRAO = 'Site Micaele <onboarding@resend.dev>';
const TO_PADRAO = 'micaele.marques.2796@gmail.com';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

/** Neutraliza HTML vindo do visitante antes de embutir no corpo do e-mail. */
function escapar(valor: unknown) {
  return String(valor ?? '')
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return json({ success: false, message: 'Envio não configurado no servidor.' }, 500);
  }

  let corpo: Record<string, unknown>;
  try {
    corpo = await request.json();
  } catch {
    return json({ success: false, message: 'Requisição inválida.' }, 400);
  }

  // Campo-isca: só robôs preenchem. Responde sucesso para não revelar a trava.
  if (corpo.botcheck) return json({ success: true });

  const nome = escapar(corpo.name);
  const telefone = escapar(corpo.phone);
  const email = escapar(corpo.email);
  const mensagem = escapar(corpo.message);

  if (!nome || !telefone) {
    return json({ success: false, message: 'Informe nome e WhatsApp.' }, 400);
  }

  const linhas = [
    `<p><strong>Nome:</strong> ${nome}</p>`,
    `<p><strong>WhatsApp:</strong> ${telefone}</p>`,
    email ? `<p><strong>E-mail:</strong> ${email}</p>` : '',
    mensagem ? `<p><strong>Mensagem:</strong><br>${mensagem.replace(/\n/g, '<br>')}</p>` : '',
  ].filter(Boolean);

  const payload: Record<string, unknown> = {
    from: env.CONTACT_FROM || FROM_PADRAO,
    to: env.CONTACT_TO || TO_PADRAO,
    subject: `Novo contato pelo site — ${nome}`,
    html: `<h2>Novo contato pelo site</h2>${linhas.join('')}`,
  };
  // Permite responder direto para o visitante a partir da caixa de entrada.
  if (email) payload.reply_to = email;

  try {
    const resposta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resposta.ok) {
      const erro = await resposta.text();
      console.error('Resend recusou o envio:', resposta.status, erro);
      return json({ success: false, message: 'Não foi possível enviar agora.' }, 502);
    }

    return json({ success: true });
  } catch (erro) {
    console.error('Falha ao chamar o Resend:', erro);
    return json({ success: false, message: 'Não foi possível enviar agora.' }, 502);
  }
};

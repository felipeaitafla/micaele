import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

const builder = imageUrlBuilder(sanityClient);

/** Monta a URL de uma imagem do Sanity. Retorna null se não houver imagem. */
export function urlFor(source: any) {
  if (!source?.asset) return null;
  return builder.image(source);
}

/**
 * Busca no Sanity com fallback silencioso.
 * Enquanto o projeto Sanity não estiver configurado (sem .env), a página
 * continua renderizando com o conteúdo padrão em vez de quebrar o build.
 */
export async function sanityFetch<T>(query: string): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(query);
  } catch {
    return null;
  }
}

/** Monta o link do WhatsApp com a mensagem padrão do cliente. */
export function whatsappUrl(phone: string, companyName: string, subject?: string) {
  const message = subject
    ? `Olá, ${companyName}! Gostaria de mais informações sobre ${subject}.`
    : `Olá, ${companyName}! Gostaria de mais informações.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

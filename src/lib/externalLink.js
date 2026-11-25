// Links do portfólio para as minhas aplicações.
//
// Só vira botão o endereço que estiver nesta lista e for https. Qualquer outro
// (erro de digitação, "javascript:", http, usuário e senha na URL, porta
// diferente, domínio parecido) não aparece. Assim, mesmo que alguém consiga
// mexer no portfolioData.js, o portfólio não vira um trampolim para uma página
// falsa de login das minhas aplicações.
//
// Este repositório é público: só entra aqui o endereço que pode aparecer para
// qualquer pessoa. Nunca colocar URL de preview da Vercel (a que tem um código
// no meio) nem endereço de API.
export const ALLOWED_HOSTS = new Set([
  'www.cortapedra.com.br',
  'ibr-recortados-orpin.vercel.app',
  'medida-inloco.vercel.app',
  'docemania.vercel.app',
]);

export function safeExternalUrl(value) {
  if (typeof value !== 'string' || value === '') return null;

  let url;
  try {
    url = new URL(value);
  } catch {
    return warn(value);
  }

  if (url.protocol !== 'https:') return warn(value);
  if (url.username || url.password || url.port) return warn(value);
  if (!ALLOWED_HOSTS.has(url.hostname)) return warn(value);

  return url.href;
}

function warn(value) {
  if (import.meta.env?.DEV) {
    console.warn(`[portfólio] Link recusado (fora da lista de externalLink.js ou sem https): ${value}`);
  }
  return null;
}

const PHONE_NUMBER = '5534999865512';
const DEFAULT_MESSAGE = 'Olá Geovanna, vim pelo seu portfólio e gostaria de conversar sobre um projeto!';

export function buildWhatsAppUrl(message = DEFAULT_MESSAGE): string {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_URL = buildWhatsAppUrl();

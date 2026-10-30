import type { Lang } from '../LanguageContext';
import { pt, type Messages } from './pt';

export type { Messages };

/** Português já vem no bundle (é o padrão); inglês e espanhol são baixados só quando alguém escolhe. */
export const defaultMessages: Messages = pt;

const loaders: Record<Exclude<Lang, 'pt'>, () => Promise<Messages>> = {
  en: () => import('./en').then(m => m.en),
  es: () => import('./es').then(m => m.es),
};

const cache: Partial<Record<Lang, Messages>> = { pt };

/** Textos já carregados do idioma, se houver (usado para trocar de idioma sem esperar). */
export const getLoadedMessages = (lang: Lang) => cache[lang];

/** Baixa (uma vez) e devolve os textos do idioma. */
export async function loadMessages(lang: Lang): Promise<Messages> {
  const cached = cache[lang];
  if (cached) return cached;
  const loaded = await loaders[lang as Exclude<Lang, 'pt'>]();
  cache[lang] = loaded;
  return loaded;
}

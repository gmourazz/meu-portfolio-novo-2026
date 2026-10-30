import { useLang } from './LanguageContext';

/** Textos da interface no idioma atual. */
export function useMessages() {
  return useLang().messages;
}

import { useLang } from '../context/LanguageContext';
import { getT } from '../data/i18n';

export function useT() {
  const { lang } = useLang();
  return getT(lang);
}

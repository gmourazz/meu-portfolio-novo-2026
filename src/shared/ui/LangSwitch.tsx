import { useLang, type Lang } from '@/i18n/LanguageContext';
import { useMessages } from '@/i18n/useMessages';

const LANGS: Lang[] = ['pt', 'en', 'es'];

/** Seletor PT / EN / ES em pílula escura, fixo no topo à direita. */
export function LangSwitch() {
  const { lang, setLang, prefetch } = useLang();
  const t = useMessages();
  return (
    <div className="pf-lang" role="group" aria-label={t.nav.langAria}>
      {LANGS.map(l => (
        <button key={l} type="button" aria-pressed={lang === l} className={lang === l ? 'is-active' : undefined} onClick={() => setLang(l)} onPointerEnter={() => prefetch(l)} onFocus={() => prefetch(l)}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

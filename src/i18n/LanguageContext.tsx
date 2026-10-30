import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultMessages, getLoadedMessages, loadMessages, type Messages } from './messages';

export type Lang = 'pt' | 'en' | 'es';

const LANGS: readonly Lang[] = ['pt', 'en', 'es'];
const isLang = (value: string | null): value is Lang => !!value && (LANGS as readonly string[]).includes(value);

interface LangCtx {
  lang: Lang;
  messages: Messages;
  /** Troca o idioma. O texto novo é baixado antes de aplicar, então a tela nunca mistura idiomas. */
  setLang: (l: Lang) => void;
  /** Começa a baixar os textos de um idioma (ex.: ao passar o mouse no botão). */
  prefetch: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: 'pt', messages: defaultMessages, setLang: () => {}, prefetch: () => {} });

/**
 * Idioma inicial: `?lang=` na URL (links compartilháveis e hreflang) > preferência salva > português.
 * Não usa o idioma do navegador de propósito: o site é brasileiro e os buscadores precisam ver sempre a mesma versão em `/`.
 */
function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (isLang(fromUrl)) return fromUrl;
    const saved = localStorage.getItem('lang');
    if (isLang(saved)) return saved;
  } catch { /* storage bloqueado: segue com o padrão */ }
  return 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ lang: Lang; messages: Messages } | null>(() => {
    const lang = initialLang();
    const messages = getLoadedMessages(lang);
    return messages ? { lang, messages } : null;
  });

  // Idioma inicial que não é o padrão: baixa os textos antes do primeiro desenho
  useEffect(() => {
    if (state) return;
    let alive = true;
    const lang = initialLang();
    loadMessages(lang).then(messages => { if (alive) setState({ lang, messages }); });
    return () => { alive = false; };
  }, [state]);

  const setLang = useCallback((lang: Lang) => {
    try { localStorage.setItem('lang', lang); } catch { /* sem persistência */ }
    loadMessages(lang).then(messages => setState({ lang, messages }));
  }, []);
  const prefetch = useCallback((lang: Lang) => { void loadMessages(lang); }, []);

  const value = useMemo(() => state && ({ ...state, setLang, prefetch }), [state, setLang, prefetch]);
  if (!value) return null;
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() { return useContext(Ctx); }

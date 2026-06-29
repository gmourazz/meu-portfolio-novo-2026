import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'pt' | 'en' | 'es';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }

const Ctx = createContext<LangCtx>({ lang: 'pt', setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    return saved && ['pt', 'en', 'es'].includes(saved) ? saved : 'pt';
  });

  const setLang = (l: Lang) => {
    localStorage.setItem('lang', l);
    setLangState(l);
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() { return useContext(Ctx); }

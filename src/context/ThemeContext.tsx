import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeCtx { theme: Theme; toggleTheme: () => void; setTheme: (t: Theme) => void; }

const Ctx = createContext<ThemeCtx>({ theme: 'dark', toggleTheme: () => {}, setTheme: () => {} });

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved === 'dark' || saved === 'light') return saved;
  return 'dark'; // padrão do site
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return <Ctx.Provider value={{ theme, toggleTheme, setTheme }}>{children}</Ctx.Provider>;
}

export function useTheme() { return useContext(Ctx); }

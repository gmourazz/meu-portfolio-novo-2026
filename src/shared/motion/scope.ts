export const EASE = 'cubic-bezier(.16,1,.3,1)';

/** Função que desfaz tudo o que um efeito de movimento montou. */
export type Disposer = () => void;

/** Raiz da página + helpers para achar elementos por `data-pf="..."` ou seletor, e se há movimento permitido. */
export type Scope = {
  root: HTMLElement;
  motion: boolean;
  /** Elemento marcado com `data-pf="name"` */
  ref: <T extends HTMLElement = HTMLElement>(name: string) => T | null;
  all: (selector: string) => HTMLElement[];
};

export function createScope(root: HTMLElement, motion: boolean): Scope {
  return {
    root,
    motion,
    ref: <T extends HTMLElement = HTMLElement>(name: string) => root.querySelector<T>(`[data-pf="${name}"]`),
    all: selector => Array.from(root.querySelectorAll<HTMLElement>(selector)),
  };
}

/** Junta vários desfazedores em um só. */
export const combine = (...fns: Disposer[]): Disposer => () => fns.forEach(fn => fn());

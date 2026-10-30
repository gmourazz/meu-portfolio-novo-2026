import type { KeyboardEvent } from 'react';

/** Handler de teclado para elementos clicáveis que não são <button>: Enter e Espaço ativam. */
export function onActivate(action: () => void) {
  return (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };
}

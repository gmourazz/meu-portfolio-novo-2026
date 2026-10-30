import { useEffect, useRef, type RefObject } from 'react';

type Options = {
  from: Keyframe;
  duration?: number;
  /** Atraso extra entre um item e o próximo (ms). */
  stagger?: number;
  disabled?: boolean;
};

const EASE = 'cubic-bezier(.16,1,.3,1)';

/**
 * Reanima os filhos que casam com `selector` toda vez que `deps` mudam (filtros, abas, expandir lista).
 * Não anima na primeira renderização.
 */
export function useCascadeIn(ref: RefObject<HTMLElement>, selector: string, deps: unknown[], { from, duration = 500, stagger = 50, disabled }: Options) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ref.current?.querySelectorAll(selector).forEach((el, i) => {
      el.animate([from, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration, delay: i * stagger, easing: EASE, fill: 'backwards' });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

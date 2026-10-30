import { useEffect, useState } from 'react';

/** Índice que avança sozinho a cada `every` ms (começando depois de `delay`). Fica parado com movimento reduzido ou lista curta. */
export function useCycle(length: number, every: number, delay = 0) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => setIndex(n => (n + 1) % length), every);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [length, every, delay]);
  return index;
}

import { useEffect, type RefObject } from 'react';

/** Move `ref` (position: fixed) atrás do cursor com atraso suave. `offset` empurra o elemento para o lado e inverte perto da borda direita. */
export function useFollowPointer(ref: RefObject<HTMLElement>, active: boolean, offset = 200) {
  useEffect(() => {
    if (!active) return;
    let tx = 0, ty = 0, px = 0, py = 0, raf = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX + offset;
      ty = e.clientY;
      if (tx + offset - 20 > window.innerWidth) tx = e.clientX - offset;
    };
    const loop = () => {
      px += (tx - px) * 0.16;
      py += (ty - py) * 0.16;
      const el = ref.current;
      if (el) {
        el.style.left = `${px}px`;
        el.style.top = `${py}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, [ref, active, offset]);
}

import { EASE, combine, type Disposer, type Scope } from './scope';
import { burst } from './particles';

/** Efeitos do ponteiro: inclinação 3D dos cards (com brilho que segue o mouse), botões magnéticos e confete ao clicar. */
export function setupPointer({ root, motion, all }: Scope): Disposer {
  const magnets = all('[data-magnet]');
  magnets.forEach(m => { m.style.transition = `transform .5s ${EASE}`; });
  if (!motion) return () => {};

  let tilted: HTMLElement | null = null;
  const release = () => {
    if (tilted) tilted.style.transform = '';
    tilted = null;
  };

  const onMove = (e: Event) => {
    const ev = e as MouseEvent;
    const card = (ev.target as Element).closest<HTMLElement>('[data-tilt]');
    if (tilted && tilted !== card) release();
    if (card) {
      const r = card.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      card.style.setProperty('--my', `${ev.clientY - r.top}px`);
      card.style.transform = `perspective(1000px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) scale(1.015)`;
      tilted = card;
    }
    magnets.forEach(m => {
      const r = m.getBoundingClientRect();
      const dx = ev.clientX - (r.left + r.width / 2);
      const dy = ev.clientY - (r.top + r.height / 2);
      const reach = Math.max(r.width, r.height) * 0.9 + 40;
      m.style.transform = Math.hypot(dx, dy) < reach ? `translate(${dx * 0.28}px,${dy * 0.35}px)` : '';
    });
  };
  const onLeave = () => {
    release();
    magnets.forEach(m => { m.style.transform = ''; });
  };
  const onDown = (e: Event) => burst(root, (e as PointerEvent).clientX, (e as PointerEvent).clientY);

  root.addEventListener('mousemove', onMove);
  root.addEventListener('mouseleave', onLeave);
  root.addEventListener('pointerdown', onDown);
  return combine(
    () => root.removeEventListener('mousemove', onMove),
    () => root.removeEventListener('mouseleave', onLeave),
    () => root.removeEventListener('pointerdown', onDown),
  );
}

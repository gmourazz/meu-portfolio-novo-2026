import { EASE, combine, type Disposer, type Scope } from './scope';

const INFINITE = { iterations: Infinity } as const;

/** Animações decorativas em loop (marquees, flutuação, giro, ícones) e hovers que dependem delas. */
export function setupLoops({ motion, ref, all }: Scope): Disposer {
  if (!motion) return () => {};
  const anims: Animation[] = [];
  const disposers: Disposer[] = [];
  const add = (el: Element | null, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
    if (!el) return null;
    const anim = el.animate(keyframes, { ...INFINITE, ...options });
    anims.push(anim);
    return anim;
  };
  const on = (target: EventTarget, type: string, fn: EventListener) => {
    target.addEventListener(type, fn);
    disposers.push(() => target.removeEventListener(type, fn));
  };

  add(ref('dot'), [{ opacity: 1 }, { opacity: 0.35 }, { opacity: 1 }], { duration: 1600 });
  add(ref('marquee'), [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 36000 });
  add(ref('chips'), [{ transform: 'translateX(-50%)' }, { transform: 'translateX(0)' }], { duration: 30000 });
  add(ref('chips2'), [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 34000 });
  all('[data-chip-icon]').forEach((el, i) => add(el, [{ transform: 'rotate(0deg) scale(1)' }, { transform: 'rotate(-10deg) scale(1.12)' }, { transform: 'rotate(8deg) scale(1)' }, { transform: 'rotate(0deg) scale(1)' }], { duration: 2400 + (i % 4) * 400, easing: 'ease-in-out', delay: -i * 310 }));

  // Depoimentos: duas fileiras em sentidos opostos, pausam com o mouse em cima
  const row1 = add(ref('reviews'), [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 70000 });
  const row2 = add(ref('reviews2'), [{ transform: 'translateX(-50%)' }, { transform: 'translateX(0)' }], { duration: 80000 });
  const wrap = ref('reviewsWrap');
  if (wrap) {
    on(wrap, 'mouseenter', () => { row1?.pause(); row2?.pause(); });
    on(wrap, 'mouseleave', () => { row1?.play(); row2?.play(); });
  }

  all('[data-bob]').forEach((el, i) => {
    const base = el.style.transform || '';
    add(el, [{ transform: `${base} translateY(0)` }, { transform: `${base} translateY(-18px)` }, { transform: `${base} translateY(0)` }], { duration: 4200 + i * 700, easing: 'ease-in-out', delay: -i * 900 });
  });
  all('[data-spin]').forEach(el => add(el, [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 22000 }));
  all('[data-stack-icon]').forEach((el, i) => add(el, [{ transform: 'translateY(0) rotate(0deg)' }, { transform: 'translateY(-4px) rotate(-4deg)' }, { transform: 'translateY(0) rotate(0deg)' }], { duration: 2600 + (i % 5) * 300, easing: 'ease-in-out', delay: -i * 230 }));
  all('[data-stack-chip]').forEach(chip => on(chip, 'mouseenter', () => {
    const icon = chip.querySelector('[data-stack-icon]');
    const target = icon?.firstElementChild ?? icon;
    target?.animate([{ transform: 'scale(1) rotate(0)' }, { transform: 'scale(1.35) rotate(-14deg) translateY(-6px)', offset: 0.35 }, { transform: 'scale(.92) rotate(8deg)', offset: 0.65 }, { transform: 'scale(1) rotate(0)' }], { duration: 650, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  }));
  all('[data-proc-line]').forEach((el, i) => add(el, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)', offset: 0.6 }, { transform: 'scaleX(1)' }], { duration: 2400, delay: i * 600, easing: EASE }));
  all('[data-proc-icon]').forEach((el, i) => add(el, [{ transform: 'translateY(0) rotate(0)' }, { transform: 'translateY(-5px) rotate(-6deg)' }, { transform: 'translateY(0) rotate(0)' }], { duration: 3000, delay: -i * 700, easing: 'ease-in-out' }));
  add(ref('nextDot'), [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 8000 });

  return combine(() => anims.forEach(a => a.cancel()), ...disposers);
}

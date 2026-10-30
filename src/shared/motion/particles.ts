import { EASE } from './scope';

const COLORS = ['oklch(0.6 0.27 300)', '#ff8ad8', '#7fdcff', '#fff0a8'];
const COUNT = 12;

/** Explosão de confete no ponto (x, y) da viewport. As partículas se removem sozinhas ao terminar. */
export function burst(root: HTMLElement, x: number, y: number) {
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('span');
    const size = 5 + Math.random() * 6;
    const color = COLORS[i % COLORS.length];
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${color};z-index:70;pointer-events:none;border-radius:2px;box-shadow:0 0 8px ${color}`;
    root.appendChild(p);
    const angle = (Math.PI * 2 * i) / COUNT + Math.random() * 0.4;
    const distance = 40 + Math.random() * 60;
    const anim = p.animate(
      [
        { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px),calc(-50% + ${Math.sin(angle) * distance + 20}px)) scale(0) rotate(180deg)`, opacity: 0 },
      ],
      { duration: 650 + Math.random() * 300, easing: EASE },
    );
    anim.onfinish = () => p.remove();
  }
}

import type { Disposer, Scope } from './scope';

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const HORIZONTAL_MIN_WIDTH = 900;

/**
 * Tudo que depende da posição de rolagem: barra de progresso e XP, HUD, barras de habilidade, parallax,
 * manifesto palavra a palavra, linha do tempo e o trilho horizontal de projetos (desktop).
 */
export function setupScroll({ motion, ref, all }: Scope): Disposer {
  const progress = ref('progress'), xp = ref('xp'), hud = ref('hud'), stats = ref('stats');
  const name1 = ref('name1'), name2 = ref('name2'), manifesto = ref('manifesto');
  const pipe = ref('pipe'), pipeFill = ref('pipeFill');
  const section = ref('hsec'), sticky = ref('sticky'), track = ref('track'), trackBar = ref('hbar');
  const words = all('[data-word]');
  const depths = all('[data-depth]').map(el => ({ el, d: parseFloat(el.dataset.depth!), base: el.style.transform || '' }));
  let barsOn = false;
  let trackExtra = 0;
  let raf = 0;

  const update = () => {
    raf = 0;
    const y = window.scrollY, vh = window.innerHeight;
    const docH = document.documentElement.scrollHeight - vh;
    const progressValue = docH > 0 ? Math.min(1, y / docH) : 0;
    if (progress) progress.style.transform = `scaleX(${progressValue})`;
    if (xp) xp.style.transform = `scaleX(${progressValue})`;
    hud?.classList.toggle('is-on', y > vh * 0.6);
    if (!barsOn && stats && stats.getBoundingClientRect().top < vh * 0.9) {
      barsOn = true;
      all('[data-bar]').forEach(b => { b.style.width = b.dataset.bar + '%'; });
    }
    if (!motion) return;

    if (y < vh * 1.2) {
      if (name1) name1.style.transform = `translateX(${-y * 0.35}px)`;
      if (name2) name2.style.transform = `translateX(${y * 0.25}px)`;
    }
    depths.forEach(({ el, d, base }) => {
      const r = el.parentElement!.getBoundingClientRect();
      el.style.transform = `${base} translateY(${-(r.top + r.height / 2 - vh / 2) * d}px)`;
    });
    if (manifesto && words.length) {
      const r = manifesto.getBoundingClientRect();
      const lit = clamp01((vh * 0.85 - r.top) / (r.height * 0.75)) * words.length;
      words.forEach((w, i) => { w.style.opacity = i < lit ? '1' : '0.14'; });
    }
    if (pipe && pipeFill) {
      const r = pipe.getBoundingClientRect();
      pipeFill.style.transform = `scaleY(${clamp01((vh * 0.6 - r.top) / r.height)})`;
    }
    if (section && track && trackExtra) {
      const r = section.getBoundingClientRect();
      const p = clamp01(-r.top / (r.height - vh));
      track.style.transform = `translateX(${-p * trackExtra}px)`;
      if (trackBar) trackBar.style.transform = `scaleX(${0.08 + p * 0.92})`;
    }
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };

  // Projetos: no desktop a seção ganha altura extra e o scroll vertical move o trilho na horizontal
  const layout = () => {
    if (section && sticky && track) {
      if (window.innerWidth >= HORIZONTAL_MIN_WIDTH && motion) {
        trackExtra = Math.max(0, track.scrollWidth - window.innerWidth);
        section.style.height = `${trackExtra + window.innerHeight}px`;
        sticky.style.overflowX = 'hidden';
        sticky.style.height = '100vh';
      } else {
        trackExtra = 0;
        section.style.height = '';
        sticky.style.overflowX = '';
        sticky.style.height = '';
        track.style.transform = '';
      }
    }
    schedule();
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', layout);
  layout();
  const lateLayout = window.setTimeout(layout, 800);

  return () => {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', layout);
    clearTimeout(lateLayout);
    cancelAnimationFrame(raf);
  };
}

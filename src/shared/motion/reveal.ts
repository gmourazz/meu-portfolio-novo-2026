import { EASE, type Disposer, type Scope } from './scope';

/** Elementos `[data-reveal]` que começam abaixo da dobra entram com blur + deslize ao aparecer. */
export function setupReveal({ motion, all }: Scope): Disposer {
  if (!motion) return () => {};
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    entry.target.animate([{ opacity: 0, transform: 'translateY(60px)', filter: 'blur(10px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 1000, easing: EASE });
  }), { threshold: 0.06 });
  const fold = window.innerHeight;
  all('[data-reveal]').filter(el => el.getBoundingClientRect().top > fold).forEach(el => observer.observe(el));
  return () => observer.disconnect();
}

/** Números `[data-count]` contam de 0 até o valor (com `data-suffix` e `data-decimals`) quando ficam visíveis. */
export function setupCounters({ motion, all }: Scope): Disposer {
  if (!motion) return () => {};
  const render = (el: HTMLElement, value: number) => {
    el.textContent = value.toFixed(Number(el.dataset.decimals ?? 0)) + (el.dataset.suffix ?? '');
  };
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target as HTMLElement;
    observer.unobserve(el);
    const to = Number(el.dataset.count), t0 = performance.now(), duration = 1600;
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      render(el, to * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.4 });
  all('[data-count]').forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) render(el, 0);
    observer.observe(el);
  });
  return () => observer.disconnect();
}

/** Títulos de seção: ao ficarem visíveis ganham `.is-in`, que dispara a subida letra a letra no CSS. */
export function setupTitles({ motion, all }: Scope): Disposer {
  if (!motion) return () => {};
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    observer.unobserve(entry.target);
  }), { threshold: 0.35 });
  all('.pf-h2').forEach(el => observer.observe(el));
  return () => observer.disconnect();
}

/** Avisa qual `<section id>` está no meio da tela. */
export function setupActiveSection({ all }: Scope, onSection: (id: string) => void): Disposer {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => { if (entry.isIntersecting) onSection(entry.target.id); }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  all('section[id]').forEach(s => observer.observe(s));
  return () => observer.disconnect();
}

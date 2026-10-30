import type { MouseEvent } from 'react';
import { BadgeCheck } from 'lucide-react';
import { useMessages } from '@/i18n/useMessages';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';

const GLITCH: Keyframe[] = [
  { textShadow: 'none' },
  { textShadow: '-6px 0 #ff3df0, 6px 0 #3de1ff', offset: 0.15 },
  { textShadow: '5px 0 #ff3df0, -5px 0 #3de1ff', clipPath: 'inset(20% 0 40% 0)', offset: 0.3 },
  { textShadow: '-3px 0 #ff3df0, 3px 0 #3de1ff', clipPath: 'inset(0 0 0 0)', offset: 0.45 },
  { textShadow: '4px 2px #b26bff, -4px -2px #3de1ff', offset: 0.7 },
  { textShadow: 'none' },
];

const PLATFORMS = ['Web', 'Mobile', 'iOS', 'Android'];

export function HeroSection() {
  const reduced = useReducedMotion();
  const t = useMessages().hero;
  const glitch = (e: MouseEvent<HTMLElement>) => {
    if (!reduced) e.currentTarget.animate(GLITCH, { duration: 520, easing: 'steps(6)' });
  };

  return (
    <section id="inicio" className="pf-hero">
      <div className="pf-hero-glow" />
      <div className="pf-hero-grid" />

      <div data-depth="0.25" className="pf-float" style={{ top: '24%', right: '6%' }}><div data-bob className="pf-orb" /></div>
      <div data-depth="0.45" className="pf-float" style={{ top: '50%', right: '18%' }}><div data-spin className="pf-ring" /></div>
      <div data-depth="0.15" className="pf-float" style={{ top: '30%', left: '56%' }}><div data-bob className="pf-pill" style={{ transform: 'rotate(28deg)' }} /></div>
      <div data-depth="0.6" className="pf-float" style={{ top: '58%', left: '38%' }}><div data-bob className="pf-marble" /></div>

      <div className="pf-hero-meta pf-mono">
        <span><BadgeCheck data-pf="dot" size={18} className="pf-ok" /><span className="pf-ink">{t.available}</span></span>
        <span>{t.copyright} {new Date().getFullYear()}</span>
      </div>

      <h1 className="pf-h1">
        <span data-pf="name1" className="pf-h1-l1" onMouseEnter={glitch}>Geovanna</span>
        <span data-pf="name2" className="pf-h1-l2">
          <span data-tilt className="pf-avatar">
            <span className="pf-avatar-img">
              <img src="/eu.webp" alt="Geovanna Moura" className="pf-portrait" />
            </span>
            <span className="pf-avatar-lvl">LVL 24</span>
          </span>
          <span onMouseEnter={glitch} style={{ cursor: 'default' }}>Moura<span style={{ color: 'var(--neon)' }}>.</span></span>
        </span>
      </h1>

      <div className="pf-hero-foot">
        <div>
          <div className="pf-tags">
            <span className="pf-tag pf-tag--ink">{t.role}</span>
            {PLATFORMS.map(p => <span key={p} className="pf-tag">{p}</span>)}
          </div>
          <p className="pf-lead">{t.leadPre}<strong>{t.leadStrong}</strong>{t.leadPost}</p>
        </div>
        <div className="pf-ctas">
          <a href="#projetos" data-magnet className="pf-btn-start"><span>{t.start}</span><span>▶</span></a>
          <a href="/Profile.pdf" download="Geovanna_Moura_Curriculo.pdf" data-magnet className="pf-btn-ghost">{t.resume}</a>
        </div>
      </div>
    </section>
  );
}

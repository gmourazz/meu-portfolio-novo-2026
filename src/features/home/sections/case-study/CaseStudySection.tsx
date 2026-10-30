import { useEffect, useState } from 'react';
import { useMessages } from '@/i18n/useMessages';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { caseStudy } from '@/features/home/data';

const { shots } = caseStudy;

export function CaseStudySection() {
  const t = useMessages().caseStudy;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setI(n => (n + 1) % shots.length), 5000);
    return () => clearInterval(timer);
  }, [paused, i]);

  return (
    <section id="case" className="pf-case">
      <div className="pf-wrap pf-case-grid">
        <div data-reveal className="pf-case-info">
          <PixelLabel size={9} tone="neon" tight>{t.eyebrow}</PixelLabel>
          <h2>ASIO Sport Wear</h2>
          <p>{t.desc}</p>
          <div className="pf-case-stats">
            {t.stats.map(([v, k]) => (
              <div key={k}><strong>{v}</strong><small>{k}</small></div>
            ))}
          </div>
          <div className="pf-proj-tags">{caseStudy.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <a href={caseStudy.url} target="_blank" rel="noopener noreferrer" data-magnet className="pf-case-cta">{t.cta} <span>↗</span></a>
        </div>

        <div data-reveal className="pf-case-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="pf-browser" data-tilt>
            <div className="pf-browser-bar">
              <i /><i /><i />
              <span>{caseStudy.domain}</span>
            </div>
            <div className="pf-browser-view">
              {shots.map((src, n) => (
                <img key={src} src={src} alt={`ASIO Sport Wear: ${t.shots[n]}`} loading="lazy" className={n === i ? 'is-on' : undefined} />
              ))}
              <span className="pf-browser-label">{String(i + 1).padStart(2, '0')} / {t.shots[i]}</span>
            </div>
          </div>
          <div className="pf-thumbs" role="tablist">
            {shots.map((src, n) => (
              <button key={src} role="tab" aria-selected={n === i} aria-label={t.shots[n]} className={n === i ? 'is-on' : undefined} onClick={() => setI(n)}>
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

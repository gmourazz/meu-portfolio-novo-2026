import { useRef } from 'react';
import { useMessages } from '@/i18n/useMessages';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useCascadeIn } from '@/shared/motion/useCascadeIn';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { onActivate } from '@/shared/lib/onActivate';
import type { CatalogItem } from '../data';

const SKINS = ['ink', 'soft', 'soft', 'ink'] as const;

type Props = { items: CatalogItem[]; onOpen: (index: number) => void; animateKey: string };

export function ProjectGrid({ items, onOpen, animateKey }: Props) {
  const t = useMessages().allProjects;
  const ref = useRef<HTMLDivElement>(null);
  const twoColumns = useMediaQuery('(min-width: 640px)');
  const reduced = useReducedMotion();
  useCascadeIn(ref, '.pj-card', [animateKey], {
    from: { opacity: 0, transform: 'translateY(50px) scale(.96)', filter: 'blur(8px)' },
    duration: 800,
    stagger: 70,
    disabled: reduced,
  });

  return (
    <div ref={ref} className="pj-grid">
      {items.map((p, i) => (
        <div
          key={p.id}
          data-tilt
          role="button"
          tabIndex={0}
          onClick={() => onOpen(i)}
          onKeyDown={onActivate(() => onOpen(i))}
          className={`pf-card pj-card pf-card--${SKINS[i % 4]}`}
          style={{ gridColumn: `span ${twoColumns ? 6 : 12}` }}
        >
          <div className="pj-card-shot">
            <img src={p.image} alt={p.title} loading="lazy" />
            <div className="pj-card-top">
              <span className="pf-proj-type" style={{ position: 'static' }}>{t.types[p.type] ?? p.type}</span>
              <span className="pf-pixel pj-n">{p.n}</span>
            </div>
          </div>
          <div className="pj-card-foot">
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, opacity: 0.6 }}>{p.niche}</div>
              <h2>{p.title}</h2>
            </div>
            <span className="pf-proj-arrow">↗</span>
          </div>
        </div>
      ))}
    </div>
  );
}

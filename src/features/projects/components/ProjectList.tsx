import { useRef, useState } from 'react';
import { useMessages } from '@/i18n/useMessages';
import { useCascadeIn } from '@/shared/motion/useCascadeIn';
import { useFollowPointer } from '@/shared/hooks/useFollowPointer';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { onActivate } from '@/shared/lib/onActivate';
import type { CatalogItem } from '../data';

type Props = { items: CatalogItem[]; onOpen: (index: number) => void; animateKey: string };

/** Lista tipográfica: ao passar o mouse numa linha, uma prévia da imagem segue o cursor. */
export function ProjectList({ items, onOpen, animateKey }: Props) {
  const t = useMessages().allProjects;
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [hover, setHover] = useState(0);

  useCascadeIn(listRef, '.pj-card', [animateKey], {
    from: { opacity: 0, transform: 'translateY(50px) scale(.96)', filter: 'blur(8px)' },
    duration: 800,
    stagger: 70,
    disabled: reduced,
  });
  useFollowPointer(previewRef, !reduced);

  const show = (i: number) => {
    setHover(i);
    const el = previewRef.current;
    if (el) {
      el.style.opacity = '1';
      el.style.transform = 'translate(-50%,-50%) scale(1) rotate(-3deg)';
    }
  };
  const hide = () => {
    const el = previewRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%,-50%) scale(.6) rotate(-6deg)';
    }
  };

  return (
    <div ref={listRef} onMouseLeave={hide}>
      {items.map((p, i) => (
        <div
          key={p.id}
          role="button"
          tabIndex={0}
          onClick={() => onOpen(i)}
          onKeyDown={onActivate(() => onOpen(i))}
          onMouseEnter={() => show(i)}
          className="pj-card pj-row"
        >
          <PixelLabel size={10} tone="neon" tight>{p.n}</PixelLabel>
          <div style={{ minWidth: 0 }}>
            <h2>{p.title}</h2>
            <div className="pj-row-meta"><span>{t.types[p.type] ?? p.type}</span><span>·</span><span>{p.niche}</span></div>
          </div>
          <span className="pf-proj-arrow" style={{ width: 56, height: 56 }}>↗</span>
        </div>
      ))}
      <div ref={previewRef} className="pj-preview" aria-hidden>
        {items[hover] && <img src={items[hover].image} alt="" />}
      </div>
    </div>
  );
}

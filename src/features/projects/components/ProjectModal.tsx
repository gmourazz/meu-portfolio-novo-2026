import { useEffect, useRef } from 'react';
import { useModal } from '@/shared/hooks/useModal';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { useMessages } from '@/i18n/useMessages';
import type { CatalogItem } from '../data';

type Props = { list: CatalogItem[]; index: number; onClose: () => void; onStep: (d: number) => void };

/** Detalhe do projeto em tela cheia: Esc fecha, setas navegam. */
export function ProjectModal({ list, index, onClose, onStep }: Props) {
  const t = useMessages().allProjects;
  const p = list[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  useModal(dialogRef, onClose);

  // Setas navegam entre projetos (Esc e Tab ficam com o useModal)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onStep]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    dialogRef.current?.animate([{ opacity: 0, transform: 'translateY(40px) scale(.94)' }, { opacity: 1, transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.34,1.3,.64,1)' });
  }, [index]);

  if (!p) return null;
  return (
    <div className="pj-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.title}>
      <div ref={dialogRef} className="pj-modal" onClick={e => e.stopPropagation()}>
        <div className="pj-modal-shot"><img src={p.image} alt={p.title} /></div>
        <div className="pj-modal-body">
          <div className="pf-row">
            <PixelLabel tone="neon" tight>{t.modalStage} {p.n}</PixelLabel>
            <button type="button" className="pj-close" onClick={onClose} aria-label={t.close}>✕</button>
          </div>
          <div className="pj-chips">
            <span className="is-ink">{t.types[p.type] ?? p.type}</span>
            {p.niche && <span>{p.niche}</span>}
            <span className="is-neon">★ 5.0</span>
          </div>
          <h2>{p.title}</h2>
          <p>{p.desc}</p>
          <div>
            <div className="pf-mono" style={{ fontSize: 12, marginBottom: 10 }}>{t.stackLabel}</div>
            <div className="pj-tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
          <div className="pj-actions">
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="pf-case-cta">{t.visit} <span>↗</span></a>
            <button type="button" className="pj-round" onClick={() => onStep(-1)} aria-label={t.prev}>←</button>
            <button type="button" className="pj-round" onClick={() => onStep(1)} aria-label={t.next}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

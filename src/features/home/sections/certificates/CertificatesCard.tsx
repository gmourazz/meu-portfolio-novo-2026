import { useRef, useState } from 'react';
import { useMessages } from '@/i18n/useMessages';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { useCascadeIn } from '@/shared/motion/useCascadeIn';
import { certTabs, homeCertificates, type CertTab } from '@/features/home/data';

const INITIAL_CERTS = 5;

export function CertificatesCard() {
  const t = useMessages().certs;
  const [tab, setTab] = useState<CertTab>('all');
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = tab === 'all' ? homeCertificates : homeCertificates.filter(c => c.cat === tab);
  const visible = open ? filtered : filtered.slice(0, INITIAL_CERTS);

  // Reentrada em cascata ao trocar de aba ou expandir
  useCascadeIn(listRef, '.pf-cert', [tab, open], { from: { opacity: 0, transform: 'translateY(14px) scale(.97)' } });

  return (
    <div data-reveal className="pf-card pf-card--ink pf-box pf-certs pf-scan">
      <div className="pf-glow-blob" />
      <div className="pf-box-head">
        <div>
          <PixelLabel size={9} tone="neon2" tight>{t.eyebrow}</PixelLabel>
          <h2>{t.title}</h2>
        </div>
        <span className="pf-badge">55+</span>
      </div>
      <div className="pf-grid3">
        <div className="pf-glass"><strong data-count="55" data-suffix="+">55+</strong><small>{t.unlocked}</small></div>
        <div className="pf-glass"><strong data-count="200" data-suffix="h+">200h+</strong><small>{t.study}</small></div>
        <div className="pf-glass"><strong>AZ-900</strong><small>{t.vendor}</small></div>
      </div>
      <div className="pf-tabs" role="tablist">
        {certTabs.map(id => (
          <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : undefined} onClick={() => { setTab(id); setOpen(false); }}>{t.tabs[id]}</button>
        ))}
      </div>
      <div ref={listRef} className="pf-cert-list">
        {visible.map(c => (
          <a key={c.title} href={c.link} target="_blank" rel="noopener noreferrer" className="pf-cert">
            <span className="pf-cert-badge"><img src={c.icon} alt="" loading="lazy" /></span>
            <div style={{ minWidth: 0 }}>
              <div className="pf-cert-title">{c.title}</div>
              <div className="pf-cert-meta">
                <span><span style={{ width: c.bar }} /></span>
                <span>{c.org} · {c.hours}</span>
              </div>
            </div>
            <span className="pf-cert-xp">+{c.xp} XP</span>
          </a>
        ))}
      </div>
      {filtered.length > INITIAL_CERTS && (
        <button className="pf-btn-outline" onClick={() => setOpen(o => !o)}>
          {open ? t.less : t.more}
        </button>
      )}
    </div>
  );
}

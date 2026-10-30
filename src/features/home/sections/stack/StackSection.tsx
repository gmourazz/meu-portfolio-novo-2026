import { useMessages } from '@/i18n/useMessages';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { CertificatesCard } from '../certificates/CertificatesCard';
import { stackGroups } from '@/features/home/data';

export function StackSection() {
  const t = useMessages().stack;
  const total = stackGroups.reduce((n, g) => n + g.items.length, 0);
  return (
    <section id="stack" className="pf-stack">
      <div className="pf-wrap">
        <div data-reveal className="pf-card pf-card--soft pf-box">
          <div style={{ position: 'absolute', top: -120, right: -120, width: 360, height: 360, borderRadius: '50%', background: 'var(--holo)', filter: 'blur(70px)', opacity: 0.55, pointerEvents: 'none' }} />
          <div className="pf-box-head">
            <div>
              <PixelLabel size={9} tone="neon" tight>{t.eyebrow}</PixelLabel>
              <h2>{t.title}</h2>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, padding: '7px 12px', borderRadius: 999, background: '#fff' }}>(07) · {total} {t.items}</span>
          </div>
          <div className="pf-stack-groups">
            {stackGroups.map(g => (
              <div key={g.id}>
                <div className="pf-stack-title">{t.groups[g.id]}</div>
                <div className="pf-stack-grid">
                  {g.items.map(it => (
                    <div key={it.n} data-stack-chip className="pf-stack-chip">
                      <span data-stack-icon className="pf-stack-icon">
                        {it.icon ? <img src={it.icon} alt="" loading="lazy" /> : <span>{it.glyph}</span>}
                      </span>
                      <span>{t.names[it.n] ?? it.n}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <CertificatesCard />
      </div>
    </section>
  );
}

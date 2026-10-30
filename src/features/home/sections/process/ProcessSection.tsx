import { Check } from 'lucide-react';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { questIcons } from '@/features/home/data';

export function ProcessSection() {
  const t = useMessages().process;
  return (
    <section id="processo" className="pf-processo">
      <div className="pf-wrap">
        <div data-reveal className="pf-head">
          <SectionTitle top={t.title[0]} bottom={t.title[1]} />
          <p className="pf-muted" style={{ maxWidth: 360, fontSize: 16, lineHeight: 1.6, textWrap: 'pretty' }}>{t.body}</p>
        </div>
        <div className="pf-quests">
          {t.quests.map(([title, desc, items], i) => {
            const last = i === t.quests.length - 1;
            const Icon = questIcons[i];
            const n = String(i + 1).padStart(2, '0');
            return (
              <div key={n} data-reveal data-tilt className={`pf-card pf-quest ${last ? 'pf-card--neon' : 'pf-card--soft'}`}>
                <div className="pf-quest-top">
                  <span data-proc-icon className="pf-quest-icon"><Icon size={28} /></span>
                  <span className="pf-quest-line"><span data-proc-line /></span>
                  <span className="pf-quest-n">{n}</span>
                </div>
                <div>
                  <div className="pf-eyebrow">{t.step} {n}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="pf-quest-items">
                  {items.map(it => (
                    <div key={it}><span className="pf-check"><Check size={12} strokeWidth={3} /></span>{it}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

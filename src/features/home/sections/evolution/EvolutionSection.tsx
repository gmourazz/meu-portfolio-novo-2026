import { Plus } from 'lucide-react';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { SkillTree } from './SkillTree';
import { phaseIcons } from '@/features/home/data';

const COMPANIES = ['Algar Telecom', 'Anhanguera Educacional', '99Freelas', 'Ctributária'];

export function EvolutionSection() {
  const t = useMessages().evolution;
  return (
    <section id="experiencia" className="pf-exp">
      <div className="pf-wrap">
        <div data-reveal className="pf-exp-aside">
          <SectionTitle top={t.title[0]} bottom={t.title[1]} />
          <p>{t.body}</p>
          <div className="pf-mini">
            {t.mini.map(([v, k], i) => (
              <div key={k} className={i === t.mini.length - 1 ? 'is-ink' : undefined}><strong>{v}</strong><small>{k}</small></div>
            ))}
          </div>

          <SkillTree />
        </div>

        <div data-pf="pipe" className="pf-pipe">
          <div className="pf-pipe-line" />
          <div data-pf="pipeFill" className="pf-pipe-fill" />
          <div className="pf-pipe-list">
            {t.phases.map((e, i) => {
              const Icon = phaseIcons[i];
              return (
                <div key={e.label} data-reveal className={`pf-node ${i === t.phases.length - 1 ? 'is-current' : ''}`}>
                  <span className="pf-node-dot"><Icon size={24} /></span>
                  <div data-tilt className="pf-node-card">
                    <div className="pf-node-top">
                      <span className="pf-node-label">{e.label}</span>
                      <span className="pf-node-period">{e.period}</span>
                    </div>
                    <h3>{e.role}</h3>
                    <div className="pf-node-company">{COMPANIES[i]}</div>
                    <p>{e.desc}</p>
                    <div className="pf-node-tags">{e.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
              );
            })}
            <div data-reveal className="pf-node">
              <span data-pf="nextDot" className="pf-node-next"><Plus size={22} /></span>
              <a href="#contato" className="pf-next-link">
                <div>
                  <div className="pf-eyebrow" style={{ color: 'var(--neon-ink)', opacity: 1 }}>{t.next}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.03em', marginTop: 4 }}>{t.nextTitle}</div>
                </div>
                <span style={{ fontSize: 20, color: 'var(--neon)' }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

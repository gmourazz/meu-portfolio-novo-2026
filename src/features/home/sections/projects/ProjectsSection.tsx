import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { Link } from 'react-router';
import { homeProjects } from '@/features/home/data';

export function ProjectsSection() {
  const t = useMessages().projects;
  return (
    <section id="projetos" data-pf="hsec" className="pf-projetos">
      <div data-pf="sticky" className="pf-sticky">
        <div className="pf-head">
          <SectionTitle top={t.title[0]} bottom={t.title[1]} />
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
            <span className="pf-sub">{t.sub}</span>
            <span className="pf-mono">{t.hint}</span>
            <div className="pf-hbar"><div data-pf="hbar" /></div>
          </div>
        </div>

        <div data-pf="track" className="pf-track">
          {homeProjects.map((p, i) => (
            <a
              key={p.image}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              data-tilt
              className={`pf-card pf-proj ${i % 2 === 0 ? 'pf-card--ink' : 'pf-card--soft'}`}
            >
              <div className="pf-proj-shot">
                <img src={p.image} alt={`${t.shotAlt} ${p.title}`} loading="lazy" />
                <span className="pf-proj-type">{t.types[p.category] ?? p.category}</span>
              </div>
              <div className="pf-proj-body">
                <div className="pf-row" style={{ alignItems: 'flex-start', gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12, opacity: 0.6 }}>{String(i + 1).padStart(2, '0')} / {t.items[p.image].niche}</div>
                    <h3>{p.title}</h3>
                  </div>
                  <span className="pf-proj-arrow">↗</span>
                </div>
                <p>{t.items[p.image].desc}</p>
                <div className="pf-proj-tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </a>
          ))}
          <Link to="/projects" data-tilt className="pf-proj-all">
            <span className="pf-pixel" style={{ fontSize: 9 }}>{t.all}</span>
            <div>{t.allLink}</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { MarqueeStrip } from '@/shared/ui/MarqueeStrip';
import { ProjectsHeader } from '@/features/projects/components/ProjectsHeader';
import { ProjectsHero } from '@/features/projects/components/ProjectsHero';
import { ProjectFilterBar, type ProjectView } from '@/features/projects/components/ProjectFilterBar';
import { ProjectGrid } from '@/features/projects/components/ProjectGrid';
import { ProjectList } from '@/features/projects/components/ProjectList';
import { ProjectsCta } from '@/features/projects/components/ProjectsCta';
import { catalog, catalogTypes } from '@/features/projects/data';
import { usePageMotion } from '@/shared/motion/usePageMotion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { useLang } from '@/i18n/LanguageContext';
import { useMessages } from '@/i18n/useMessages';
import { useSeo } from '@/seo/useSeo';
import { projectsJsonLd } from '@/features/projects/seo';

const ProjectModal = lazy(() => import('@/features/projects/components/ProjectModal').then(m => ({ default: m.ProjectModal })));

const noop = () => {};
const TITLES = catalog.map(p => p.title);

export function ProjectsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { lang } = useLang();
  const messages = useMessages();
  const t = messages.allProjects;
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState<ProjectView>('grid');
  const [open, setOpen] = useState(-1);

  usePageMotion(rootRef, !reduced, noop, lang);
  useSeo('/projects', projectsJsonLd(lang, t.current));
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const items = filter === 'all' ? catalog : catalog.filter(p => p.type === filter);
  const filters = [{ id: 'all', label: t.all }, ...catalogTypes.map(id => ({ id, label: t.types[id] ?? id }))];

  const step = useCallback((d: number) => setOpen(i => (i + d + items.length) % items.length), [items.length]);
  const close = useCallback(() => setOpen(-1), []);

  return (
    <div ref={rootRef} className={`pf pj-static ${reduced ? '' : 'pf-motion'}`}>
      <a href="#conteudo" className="pf-skip">{messages.nav.skip}</a>
      <div data-pf="progress" className="pf-progress" />
      <ProjectsHeader />
      <main id="conteudo">
        <ProjectsHero />
        <ProjectFilterBar
          filters={filters}
          filter={filter}
          onFilter={id => { setFilter(id); setOpen(-1); }}
          view={view}
          onView={setView}
          labels={t}
        />

        <section className="pj-list-section">
          <div className="pf-wrap">
            {view === 'grid'
              ? <ProjectGrid items={items} onOpen={setOpen} animateKey={`${filter}|grid`} />
              : <ProjectList items={items} onOpen={setOpen} animateKey={`${filter}|list`} />}
          </div>
        </section>

        <MarqueeStrip words={TITLES} ariaLabel={t.marqueeAria} />
        <ProjectsCta />
      </main>

      {open >= 0 && (
        <Suspense fallback={null}>
          <ProjectModal list={items} index={open} onClose={close} onStep={step} />
        </Suspense>
      )}
    </div>
  );
}

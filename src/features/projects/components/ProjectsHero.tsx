import { SectionTitle } from '@/shared/ui/SectionTitle';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { useMessages } from '@/i18n/useMessages';

export function ProjectsHero() {
  const t = useMessages().allProjects;
  return (
    <section className="pj-hero">
      <div className="pj-hero-glow" />
      <div className="pf-hero-grid" />
      <div data-depth="0.3" className="pf-float" style={{ top: '34%', right: '8%' }}><div data-bob className="pf-orb" /></div>
      <div data-depth="0.5" className="pf-float" style={{ top: '58%', right: '34%' }}><div data-spin className="pf-ring" /></div>

      <div className="pf-wrap pf-rel">
        <div className="pf-hero-meta pf-mono" style={{ whiteSpace: 'normal' }}>
          <PixelLabel tone="neon">{t.stage}</PixelLabel>
          <span>{t.stack}</span>
        </div>
        <div className="pj-hero-row">
          <SectionTitle as="h1" top={t.title[0]} bottom={t.title[1]} className="pj-h1" />
        </div>
        <p className="pf-lead" style={{ marginTop: 36 }}>{t.introPre}<strong>{t.introStrong}</strong>{t.introPost}</p>
      </div>
    </section>
  );
}

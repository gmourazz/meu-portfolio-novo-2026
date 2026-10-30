import { Link } from 'react-router';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { useMessages } from '@/i18n/useMessages';

/** Chamada final da página de projetos, levando ao contato da home. */
export function ProjectsCta() {
  const t = useMessages().allProjects;
  return (
    <section className="pj-cta">
      <div className="pf-contato-panel" style={{ padding: 'clamp(60px,9vw,140px) clamp(24px,5vw,80px)' }}>
        <div className="pf-contato-glow" />
        <div className="pf-contato-inner">
          <PixelLabel size={10} tone="neon2">{t.ctaKicker}</PixelLabel>
          <SectionTitle top={t.ctaTitle[0]} bottom={t.ctaTitle[1]} light />
          <Link to="/#contato" data-magnet className="pf-wa">{t.ctaButton[0]}<br />{t.ctaButton[1]}</Link>
        </div>
      </div>
    </section>
  );
}

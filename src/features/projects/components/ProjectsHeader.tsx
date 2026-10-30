import { Link } from 'react-router';
import { LangSwitch } from '@/shared/ui/LangSwitch';
import { useMessages } from '@/i18n/useMessages';

/** Menu em pílula da página de projetos: volta ao portfólio, página atual e contato. */
export function ProjectsHeader() {
  const t = useMessages().allProjects;
  return (
    <header className="pf-header">
      <nav className="pf-nav">
        <Link to="/" data-magnet>{t.back}</Link>
        <span className="pj-here">{t.current}</span>
        <Link to="/#contato" data-magnet className="pf-nav-cta">{t.contact}</Link>
      </nav>
      <LangSwitch />
    </header>
  );
}

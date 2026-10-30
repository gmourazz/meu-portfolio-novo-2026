import { useMessages } from '@/i18n/useMessages';
import { LangSwitch } from '@/shared/ui/LangSwitch';

export function PillNav({ active }: { active: string }) {
  const t = useMessages();

  return (
    <header className="pf-header">
      <nav className="pf-nav" aria-label={t.nav.aria}>
        {t.nav.items.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : undefined}>{label}</a>
        ))}
        <a href="#contato" data-magnet className="pf-nav-cta">{t.nav.contact}</a>
      </nav>
      <LangSwitch />
    </header>
  );
}

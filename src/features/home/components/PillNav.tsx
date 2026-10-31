import { useRef, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { useMessages } from '@/i18n/useMessages';
import { useModal } from '@/shared/hooks/useModal';
import { LangSwitch } from '@/shared/ui/LangSwitch';

/** Menu em pílula no desktop; no celular vira botão "Menu" que abre um painel em tela cheia. */
export function PillNav({ active }: { active: string }) {
  const t = useMessages();
  const [open, setOpen] = useState(false);

  return (
    <header className="pf-header pf-header--home">
      <nav className="pf-nav" aria-label={t.nav.aria}>
        {t.nav.items.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : undefined}>{label}</a>
        ))}
        <a href="#contato" data-magnet className="pf-nav-cta">{t.nav.contact}</a>
      </nav>
      <button type="button" className="pf-menu-btn" aria-expanded={open} aria-controls="pf-menu" onClick={() => setOpen(true)}>
        <Menu size={18} aria-hidden /> {t.nav.menu}
      </button>
      <LangSwitch />
      {open && <MobileMenu active={active} onClose={() => setOpen(false)} />}
    </header>
  );
}

function MobileMenu({ active, onClose }: { active: string; onClose: () => void }) {
  const t = useMessages();
  const ref = useRef<HTMLDivElement>(null);
  useModal(ref, onClose);

  // Fecha primeiro (devolve a rolagem da página) e só então rola até a seção.
  const go = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    onClose();
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    });
  };

  return (
    <div ref={ref} id="pf-menu" className="pf-menu" role="dialog" aria-modal="true" aria-label={t.nav.aria}>
      <button type="button" className="pf-menu-close" aria-label={t.nav.menuClose} onClick={onClose}><X size={22} aria-hidden /></button>
      <nav>
        {t.nav.items.map(([id, label], i) => (
          <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : undefined}>
            <span>{String(i + 1).padStart(2, '0')}</span>{label}
          </a>
        ))}
      </nav>
      <a href="#contato" onClick={go('contato')} className="pf-menu-cta">{t.nav.contact} ↗</a>
    </div>
  );
}

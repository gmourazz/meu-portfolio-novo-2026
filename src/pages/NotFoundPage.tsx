import { useEffect } from 'react';
import { Link } from 'react-router';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { LangSwitch } from '@/shared/ui/LangSwitch';
import { useMessages } from '@/i18n/useMessages';

/** Endereço inexistente: avisa os buscadores (noindex) e leva de volta ao portfólio. */
export function NotFoundPage() {
  const t = useMessages().notFound;

  useEffect(() => {
    document.title = `${t.code} | Geovanna Moura`;
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, follow';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [t.code]);

  return (
    <div className="pf pj-static">
      <header className="pf-header"><LangSwitch /></header>
      <main id="conteudo" className="pf-notfound">
        <span className="pf-pixel" style={{ fontSize: 10, color: 'var(--neon)' }}>{t.code}</span>
        <SectionTitle as="h1" top={t.title[0]} bottom={t.title[1]} />
        <p className="pf-lead">{t.body}</p>
        <Link to="/" className="pf-case-cta">{t.cta} <span>→</span></Link>
      </main>
    </div>
  );
}

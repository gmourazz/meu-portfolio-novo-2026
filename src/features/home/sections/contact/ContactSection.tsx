import { lazy, Suspense, useState } from 'react';
import { CalendarDays, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { socials, WA_LINK } from '@/data/contact';

// O modal de agendamento só é baixado quando alguém vai usar (ao passar o mouse ou clicar)
const loadAgendar = () => import('@/features/scheduling/AgendarModal');
const AgendarModal = lazy(() => loadAgendar().then(m => ({ default: m.AgendarModal })));

const SOCIAL_ICONS = { 'E-mail': Mail, LinkedIn: Linkedin, GitHub: Github } as const;

export function ContactSection() {
  const t = useMessages().contact;
  const [agendarOpen, setAgendarOpen] = useState(false);

  return (
    <section id="contato" className="pf-contato">
      <div className="pf-contato-panel">
        <div className="pf-contato-glow" />
        <div className="pf-contato-inner">
          <span className="pf-mono" style={{ color: 'rgba(255,255,255,.6)' }}>{t.kicker}</span>
          <SectionTitle top={t.title[0]} bottom={t.title[1]} light />
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-magnet className="pf-wa"><MessageCircle size={34} strokeWidth={1.8} />{t.whatsapp}<span>→</span></a>
          <div className="pf-links">
            {socials.map(s => {
              const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS] ?? Mail;
              const mail = s.href.startsWith('mailto:');
              return (
                <a key={s.label} href={s.href} target={mail ? undefined : '_blank'} rel="noopener noreferrer" data-magnet>
                  <Icon size={18} />
                  {mail ? s.href.slice(7) : `${s.label} ↗`}
                </a>
              );
            })}
            <button type="button" data-magnet onClick={() => setAgendarOpen(true)} onPointerEnter={loadAgendar} onFocus={loadAgendar}><CalendarDays size={18} />{t.schedule}</button>
          </div>
        </div>
        <footer className="pf-footer">
          <span>{t.footer}</span>
          <a href="#inicio">{t.top}</a>
        </footer>
      </div>
      {agendarOpen && (
        <Suspense fallback={null}>
          <AgendarModal onClose={() => setAgendarOpen(false)} />
        </Suspense>
      )}
    </section>
  );
}

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { GameHud } from '@/features/home/components/GameHud';
import { PillNav } from '@/features/home/components/PillNav';
import {
  HeroSection, AboutSection, ManifestoSection, StorySection, MobileSection, ProjectsSection,
  CaseStudySection, ProcessSection, EvolutionSection, StackSection, ReviewsSection, ContactSection,
} from '@/features/home/sections';
import { MarqueeStrip } from '@/shared/ui/MarqueeStrip';
import { marqueeWords } from '@/features/home/data';
import { usePageMotion } from '@/shared/motion/usePageMotion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { useLang } from '@/i18n/LanguageContext';
import { useMessages } from '@/i18n/useMessages';
import { useSeo } from '@/seo/useSeo';

export function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { lang } = useLang();
  const { achievements, nav: { skip: skipLabel } } = useMessages();
  const [active, setActive] = useState('inicio');
  const unlockedRef = useRef(new Set<string>());
  const [unlocked, setUnlocked] = useState(0);
  const [toast, setToast] = useState<{ id: string; key: number } | null>(null);

  const onSection = useCallback((id: string) => {
    setActive(id);
    if (!(id in achievements) || unlockedRef.current.has(id)) return;
    unlockedRef.current.add(id);
    setUnlocked(unlockedRef.current.size);
    setToast({ id, key: Date.now() });
  }, [achievements]);

  usePageMotion(rootRef, !reduced, onSection, lang);

  useSeo('/');

  // Links vindos de outras páginas (ex.: /#contato) rolam até a seção depois que o layout assenta
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const go = () => document.querySelector(hash)?.scrollIntoView();
    go();
    const t = window.setTimeout(go, 900);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div ref={rootRef} className={`pf pj-static ${reduced ? '' : 'pf-motion'}`}>
      <a href="#conteudo" className="pf-skip">{skipLabel}</a>
      <GameHud unlocked={unlocked} toast={toast} />
      <PillNav active={active} />
      <main id="conteudo">
        <HeroSection />
        <MarqueeStrip words={marqueeWords} repeat={4} />
        <AboutSection />
        <ManifestoSection />
        <StorySection />
        <MobileSection />
        <ProjectsSection />
        <CaseStudySection />
        <ProcessSection />
        <EvolutionSection />
        <StackSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
}

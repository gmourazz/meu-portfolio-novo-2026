import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { PlayerCard } from './PlayerCard';
import { StoryTimeline } from './StoryTimeline';

export function StorySection() {
  const t = useMessages().story;
  return (
    <section id="historia" className="pf-historia">
      <div className="pf-wrap">
        <div data-reveal className="pf-head">
          <SectionTitle top={t.title[0]} bottom={t.title[1]} />
          <span className="pf-mono">{t.kicker}</span>
        </div>

        <div className="pf-two">
          <PlayerCard />
          <StoryTimeline />
        </div>
      </div>
    </section>
  );
}

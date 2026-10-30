import { useMessages } from '@/i18n/useMessages';

/** Linha do tempo pessoal: uma fase por card, a última em destaque. */
export function StoryTimeline() {
  const t = useMessages().story;
  return (
    <div className="pf-story">
      {t.stages.map(([stage, title, desc], i) => (
        <div key={i} data-tilt data-reveal className={`pf-card pf-story-card ${i === t.stages.length - 1 ? 'pf-card--neon' : 'pf-card--soft'}`}>
          <span className="pf-story-num">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <div className="pf-pixel pf-story-stage">{stage}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { reviews } from '@/features/home/data';

const SKINS: { bg: string; fg: string; dark?: boolean }[] = [
  { bg: 'var(--soft)', fg: 'var(--ink)' },
  { bg: 'var(--ink)', fg: '#fff', dark: true },
  { bg: 'var(--holo)', fg: 'var(--ink)' },
];

function ReviewRow({ items, offset, name }: { items: typeof reviews; offset: number; name: string }) {
  return (
    <div data-pf={name} className="pf-reviews-row">
      {[...items, ...items].map((r, k) => {
        const { bg, fg, dark } = SKINS[(k + offset) % 3];
        return (
          <figure key={k} className="pf-review" style={{ background: bg, color: fg }}>
            <blockquote>“{r.q}”</blockquote>
            <figcaption>
              <span><b>{r.n}</b><i> · {r.p}</i></span>
              <span className="pf-stars" style={dark ? { color: 'var(--neon2)' } : undefined}>★★★★★</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export function ReviewsSection() {
  const t = useMessages().feedbacks;
  return (
    <section id="feedbacks" className="pf-feedbacks">
      <div data-reveal className="pf-head">
        <SectionTitle top={t.title[0]} bottom={t.title[1]} />
        <span className="pf-mono">{t.kicker}</span>
      </div>
      <div data-pf="reviewsWrap" className="pf-reviews">
        <ReviewRow items={reviews} offset={0} name="reviews" />
        <ReviewRow items={[...reviews].reverse()} offset={1} name="reviews2" />
      </div>
    </section>
  );
}

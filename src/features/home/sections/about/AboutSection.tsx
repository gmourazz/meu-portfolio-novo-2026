import { Award, BookOpen, BrainCircuit, Cloud, CodeXml, GraduationCap, Rocket, Trophy } from 'lucide-react';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { chipsDark, chipsLight, skills } from '@/features/home/data';

function ChipRow({ items, name, dark }: { items: typeof chipsLight; name: string; dark?: boolean }) {
  return (
    <div data-pf={name} className={`pf-chips ${dark ? 'pf-chips--dark' : ''}`}>
      {[...items, ...items].map((c, i) => (
        <span key={i} className="pf-chip">
          <span data-chip-icon><img src={c.icon} alt="" loading="lazy" /></span>{c.n}
        </span>
      ))}
    </div>
  );
}

export function AboutSection() {
  const t = useMessages().about;
  return (
    <section id="sobre" className="pf-sobre">
      <div className="pf-wrap">
        <div data-reveal className="pf-head">
          <SectionTitle top={t.title[0]} bottom={t.title[1]} />
          <span className="pf-mono">{t.kicker}</span>
        </div>

        <div className="pf-bento">
          <div data-tilt data-reveal className="pf-card pf-card--ink pf-bento-cell pf-bento-intro pf-span2">
            <div className="pf-glow-blob" />
            <span className="pf-card-label pf-rel">geovanna.about()</span>
            <div className="pf-rel">
              <p>{t.introPre}<span>{t.introStrong}</span></p>
              <p>{t.introBody}</p>
            </div>
          </div>

          <div data-tilt data-reveal className="pf-card pf-card--holo pf-bento-cell">
            <span className="pf-card-label">{t.delivered}</span>
            <div className="pf-deco" style={{ top: -34, right: -34 }}><div data-spin className="pf-ring" style={{ width: 150 }} /></div>
            <div><div className="pf-big" data-count="55" data-suffix="+">55+</div><div style={{ fontSize: 14, marginTop: 8 }}>{t.deliveredSub}</div></div>
          </div>

          <div data-tilt data-reveal className="pf-card pf-card--soft pf-bento-cell">
            <div className="pf-deco" style={{ right: -22, bottom: -26 }}><div data-bob className="pf-orb" style={{ width: 104 }} /></div>
            <span className="pf-card-label">{t.rating}</span>
            <div>
              <div className="pf-big" data-count="5" data-decimals="1">5.0</div>
              <div className="pf-stars" style={{ marginTop: 12, fontSize: 18 }}>★★★★★</div>
            </div>
          </div>

          <div data-tilt data-reveal className="pf-card pf-card--soft pf-bento-cell pf-chips-cell pf-span2">
            <div className="pf-card-label" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 28px' }}>
              <span>{t.stack}</span><span>{t.stackCount}</span>
            </div>
            <div className="pf-chips-mask">
              <ChipRow items={chipsLight} name="chips" />
              <ChipRow items={chipsDark} name="chips2" dark />
            </div>
          </div>

          <div data-tilt data-reveal className="pf-card pf-card--soft pf-bento-cell">
            <span className="pf-card-label">{t.education}</span>
            <div className="pf-icons">
              <span data-bob><GraduationCap size={26} /></span>
              <span data-bob><BookOpen size={22} /></span>
              <span data-bob><CodeXml size={22} /></span>
              <span data-bob><Rocket size={22} /></span>
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.15 }}>{t.degree}</div>
              <div className="pf-muted" style={{ fontSize: 14, marginTop: 6 }}>{t.school}</div>
              <div className="pf-muted" style={{ fontSize: 14, marginTop: 2 }}>{t.extra}</div>
            </div>
          </div>

          <div data-tilt data-reveal className="pf-card pf-card--neon pf-bento-cell">
            <span className="pf-card-label">{t.certs}</span>
            <div className="pf-icons pf-icons--neon">
              <span data-bob><Trophy size={26} /></span>
              <span data-bob><Award size={22} /></span>
              <span data-bob><BrainCircuit size={22} /></span>
              <span data-bob><Cloud size={22} /></span>
            </div>
            <div><div className="pf-big" data-count="55" data-suffix="+">55+</div><div style={{ fontSize: 14, marginTop: 8, color: 'rgba(255,255,255,.95)' }}>{t.certsSub}</div></div>
          </div>

          <div data-tilt data-reveal data-pf="stats" className="pf-card pf-card--ink pf-bento-cell pf-stats pf-scan pf-span2">
            <div className="pf-row pf-rel">
              <PixelLabel size={10} tone="neon2">PLAYER STATS</PixelLabel>
              <span className="pf-card-label" style={{ fontSize: 12 }}>{t.statsClass}</span>
            </div>
            <div className="pf-rel" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {skills.map(([n, v]) => (
                <div key={n} className="pf-skill">
                  <span>{n}</span>
                  <span className="pf-skill-track"><span data-bar={v} /></span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,.6)', textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

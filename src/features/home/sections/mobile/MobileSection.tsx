import { GitBranch, ShieldCheck, Smartphone, Store } from 'lucide-react';
import { SectionTitle } from '@/shared/ui/SectionTitle';
import { useMessages } from '@/i18n/useMessages';
import { IconTile } from '@/shared/ui/IconTile';
import { PhoneMockups } from './PhoneMockups';
import { phoneScreens } from '@/features/home/data';

const FEAT_ICONS = [Smartphone, Store, ShieldCheck, GitBranch];

export function MobileSection() {
  const t = useMessages().mobile;
  return (
    <section id="mobile" className="pf-mobile">
      <div className="pf-panel">
        <div className="pf-glow-blob" style={{ top: '10%', right: '5%', width: 700, height: 700 }} />
        <div className="pf-panel-grid" />
        <div data-reveal className="pf-rel">
          <span className="pf-mono" style={{ color: 'rgba(255,255,255,.55)' }}>{t.kicker}</span>
          <SectionTitle top={t.title[0]} bottom={t.title[1]} light className="pf-mobile-title" />
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.66)', marginTop: 28, maxWidth: 460, textWrap: 'pretty' }}>{t.body}</p>
          <div className="pf-grid2" style={{ marginTop: 36, maxWidth: 460 }}>
            {t.feats.map(([title, desc], i) => {
              const Icon = FEAT_ICONS[i];
              return (
                <div key={title} className="pf-glass pf-feat">
                  <IconTile icon={Icon} size={20} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pf-phones">
          <PhoneMockups screens={phoneScreens} labels={t.screen} illustration={t.illustration} />
          <div data-depth="0.3" className="pf-float" style={{ top: '4%', right: '4%' }}>
            <div data-bob className="pf-float-pill" style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.18)', backdropFilter: 'blur(12px)' }}> iOS</div>
          </div>
          <div data-depth="0.4" className="pf-float" style={{ bottom: '8%', left: '2%' }}>
            <div data-bob className="pf-float-pill" style={{ background: 'var(--neon)', boxShadow: '0 0 30px var(--neon)' }}>React Native ✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}

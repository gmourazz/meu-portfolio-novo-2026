import { Car, Eye, Gamepad, Gamepad2, Guitar, Laptop, Star, Swords, Zap } from 'lucide-react';
import { useMessages } from '@/i18n/useMessages';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { IconTile } from '@/shared/ui/IconTile';

const GAME_ICONS = [Guitar, Car, Swords, Star, Eye, Zap];
const GEAR_ICONS = [Gamepad2, Gamepad, Guitar, Laptop];

/** Ficha de jogador: retrato, atributos, jogos favoritos e equipamentos. */
export function PlayerCard() {
  const t = useMessages().story;
  return (
    <div data-tilt data-reveal className="pf-card pf-card--ink pf-player pf-scan">
      <div className="pf-glow-blob" />
      <div className="pf-row pf-rel">
        <PixelLabel size={10} tone="neon2" tight>PLAYER CARD</PixelLabel>
        <span className="pf-badge">LVL 24</span>
      </div>
      <div className="pf-player-id pf-rel">
        <span className="pf-player-avatar"><span><img src="/eu.webp" alt="Geovanna" className="pf-portrait" loading="lazy" /></span></span>
        <div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1 }}>Geovanna Moura</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', marginTop: 6 }}>{t.cardRole}</div>
        </div>
      </div>
      <div className="pf-grid2 pf-rel">
        {t.info.map(([k, v]) => (
          <div key={k} className="pf-glass"><small>{k}</small><strong>{v}</strong></div>
        ))}
      </div>
      <p className="pf-rel" style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.72)', textWrap: 'pretty' }}>
        {t.bioPre}<span style={{ color: '#fff', fontWeight: 500 }}>{t.bioStrong}</span>{t.bioPost}
      </p>

      <div className="pf-games pf-rel">
        <div>
          <PixelLabel size={9} tone="neon2" tight>{t.favs}</PixelLabel>
          <div className="pf-games-list">
            {t.games.map(([name, kind], i) => {
              const Icon = GAME_ICONS[i];
              return (
                <div key={name} className="pf-game">
                  <IconTile icon={Icon} size={20} />
                  <div><strong>{name}</strong><small>{kind}</small></div>
                  <i aria-hidden />
                </div>
              );
            })}
          </div>
          <p className="pf-habit">{t.habit}</p>
        </div>
        <div>
          <PixelLabel size={9} tone="neon2" tight>{t.gearTitle}</PixelLabel>
          <div className="pf-gear">
            {t.gear.map((g, i) => {
              const Icon = GEAR_ICONS[i];
              return <span key={g}><Icon size={16} />{g}</span>;
            })}
          </div>
        </div>
      </div>
      <Gamepad2 aria-hidden className="pf-player-ghost" size={220} strokeWidth={1.2} />
    </div>
  );
}

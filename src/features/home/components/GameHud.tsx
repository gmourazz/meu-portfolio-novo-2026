import { useEffect, useRef } from 'react';
import { useMessages } from '@/i18n/useMessages';

type Props = { unlocked: number; toast: { id: string; key: number } | null };

/** Barra de progresso no topo, HUD de XP e toast de conquista desbloqueada. */
export function GameHud({ unlocked, toast }: Props) {
  const t = useMessages();
  const toastRef = useRef<HTMLDivElement>(null);
  const [title, xp] = toast ? t.achievements[toast.id] ?? ['', ''] : ['', ''];

  const toastKey = toast?.key;
  useEffect(() => {
    const el = toastRef.current;
    if (toastKey === undefined || !el || document.visibilityState === 'hidden') return;
    const anim = el.animate([
      { opacity: 0, transform: 'translateY(30px) scale(.9)' },
      { opacity: 1, transform: 'translateY(0) scale(1.03)', offset: 0.1 },
      { opacity: 1, transform: 'none', offset: 0.16 },
      { opacity: 1, transform: 'none', offset: 0.88 },
      { opacity: 0, transform: 'translateY(16px) scale(.96)' },
    ], { duration: 3200, easing: 'cubic-bezier(.16,1,.3,1)' });
    return () => anim.cancel();
  }, [toastKey]);

  return (
    <>
      <div data-pf="progress" className="pf-progress" />

      <div data-pf="hud" className="pf-hud" aria-hidden>
        <span className="pf-hud-lvl">24</span>
        <div className="pf-hud-xp">
          <div><span>XP</span><span style={{ color: 'var(--neon2)' }}>{unlocked}/{Object.keys(t.achievements).length} ★</span></div>
          <div className="pf-hud-bar"><div data-pf="xp" /></div>
        </div>
      </div>

      <div ref={toastRef} className="pf-toast" role="status" aria-live="polite">
        <span className="pf-toast-star">★</span>
        <div style={{ minWidth: 0 }}>
          <div className="pf-pixel" style={{ fontSize: 8, color: 'var(--neon2)' }}>{t.hud.unlocked}</div>
          <div style={{ fontSize: 15, fontWeight: 600, marginTop: 6 }}>{title}</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: 'rgba(255,255,255,.55)', marginTop: 2 }}>{xp}</div>
        </div>
      </div>
    </>
  );
}

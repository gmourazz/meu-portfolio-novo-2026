import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: number;
  /** Cor do rótulo: neon (escuro sobre claro) ou neon2 (claro sobre escuro). Sem valor, herda a cor do pai. */
  tone?: 'neon' | 'neon2';
  /** Remove o espaçamento entre letras padrão da fonte pixel. */
  tight?: boolean;
  style?: CSSProperties;
};

/** Rótulo em fonte pixel (Press Start 2P), usado nos títulos de "HUD" das seções. */
export function PixelLabel({ children, size = 9, tone, tight, style }: Props) {
  return (
    <span
      className="pf-pixel"
      style={{ fontSize: size, color: tone ? `var(--${tone === 'neon' ? 'neon-ink' : tone})` : undefined, letterSpacing: tight ? 0 : undefined, ...style }}
    >
      {children}
    </span>
  );
}

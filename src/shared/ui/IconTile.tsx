import type { LucideIcon } from 'lucide-react';

/** Quadradinho neon com um ícone dentro (cards de jogos, recursos, habilidades). */
export function IconTile({ icon: Icon, size = 20 }: { icon: LucideIcon; size?: number }) {
  return (
    <span className="pf-game-icon">
      <Icon size={size} />
    </span>
  );
}

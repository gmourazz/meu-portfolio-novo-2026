import { Check, Plus } from 'lucide-react';
import { useMessages } from '@/i18n/useMessages';
import { PixelLabel } from '@/shared/ui/PixelLabel';
import { IconTile } from '@/shared/ui/IconTile';
import { phaseIcons } from '@/features/home/data';

/** Quadro de habilidades desbloqueadas, uma por fase da carreira. */
export function SkillTree() {
  const t = useMessages().evolution;
  return (
    <div className="pf-card pf-card--ink pf-tree pf-scan">
      <div className="pf-glow-blob" />
      <div className="pf-row pf-rel">
        <PixelLabel size={9} tone="neon2" tight>{t.tree.title}</PixelLabel>
        <span className="pf-badge" style={{ fontSize: 9, padding: '6px 10px' }}>{t.tree.level}</span>
      </div>
      <div className="pf-tree-list pf-rel">
        {t.tree.items.map((label, i) => {
          const Icon = phaseIcons[i];
          return (
            <div key={label} className="pf-tree-row">
              <IconTile icon={Icon} size={18} />
              <span>{label}</span>
              <Check size={16} strokeWidth={3} className="pf-tree-ok" />
            </div>
          );
        })}
        <div className="pf-tree-row pf-tree-next">
          <IconTile icon={Plus} size={18} />
          <span>{t.tree.next}</span>
        </div>
      </div>
      <div className="pf-tree-bar pf-rel"><span style={{ width: '80%' }} /></div>
    </div>
  );
}

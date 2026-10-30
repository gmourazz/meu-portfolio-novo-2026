type Props = { top: string; bottom: string; light?: boolean; className?: string; as?: 'h1' | 'h2' };

/** Texto quebrado em letras (cada uma sobe com atraso — ver .pf-ch no CSS), agrupadas por palavra para só quebrar linha entre palavras. */
function Letters({ text, from }: { text: string; from: number }) {
  let n = from;
  return (
    <>
      {text.split(' ').map((word, w) => (
        <span key={w}>
          {w > 0 && ' '}
          <span className="pf-w">
            {Array.from(word).map((ch, c) => (
              <span key={c} className="pf-ch" style={{ ['--i' as string]: n++ }}>{ch}</span>
            ))}
          </span>
        </span>
      ))}
    </>
  );
}

/** Título em escada: `top` na primeira linha, `bottom` deslocado e em neon abaixo. */
export function SectionTitle({ top, bottom, light, className = '', as: Tag = 'h2' }: Props) {
  return (
    <Tag className={`pf-h2 ${light ? 'pf-h2--light' : ''} ${className}`} aria-label={`${top} ${bottom}`}>
      <span aria-hidden>
        <span className="pf-h2-a"><Letters text={top} from={0} /></span>
        <span className="pf-h2-b"><Letters text={bottom} from={top.length} /></span>
      </span>
    </Tag>
  );
}

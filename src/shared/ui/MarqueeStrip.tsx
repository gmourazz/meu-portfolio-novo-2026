type Props = {
  words: readonly string[];
  /** Quantas vezes a lista se repete para o loop não mostrar emenda. */
  repeat?: number;
  /** Se informado, o letreiro é lido por leitores de tela; senão fica oculto (decorativo). */
  ariaLabel?: string;
};

/** Faixa escura com palavras rolando na horizontal (animada pelo usePageMotion via data-pf="marquee"). */
export function MarqueeStrip({ words, repeat = 2, ariaLabel }: Props) {
  const items = Array.from({ length: repeat }, () => words).flat();
  return (
    <div className="pf-marquee" {...(ariaLabel ? { 'aria-label': ariaLabel } : { 'aria-hidden': true })}>
      <div data-pf="marquee" className="pf-marquee-track">
        {items.map((w, i) => <span key={i}>{w}<i /></span>)}
      </div>
    </div>
  );
}

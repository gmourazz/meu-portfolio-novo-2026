import { useEffect, useRef, type RefObject } from 'react';
import { combine, createScope } from './scope';
import { setupLoops } from './loops';
import { setupScroll } from './scroll';
import { setupPointer } from './pointer';
import { setupReveal, setupCounters, setupTitles, setupActiveSection } from './reveal';

/**
 * Camada de movimento de uma página inteira. Os efeitos encontram seus elementos por `data-pf="..."`
 * e outros atributos `data-*` dentro de `rootRef`, então os componentes só marcam o DOM e não conhecem animação.
 * Cada efeito vive em seu próprio módulo (loops, scroll, pointer, reveal) e devolve a função que o desfaz.
 */
export function usePageMotion(
  rootRef: RefObject<HTMLElement>,
  motion: boolean,
  onSection: (id: string) => void,
  /** Muda quando o idioma troca: o texto novo cria elementos novos, então os efeitos são remontados. */
  lang: string,
) {
  const onSectionRef = useRef(onSection);
  useEffect(() => { onSectionRef.current = onSection; });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const scope = createScope(root, motion);
    return combine(
      setupLoops(scope),
      setupScroll(scope),
      setupPointer(scope),
      setupReveal(scope),
      setupCounters(scope),
      setupTitles(scope),
      setupActiveSection(scope, id => onSectionRef.current(id)),
    );
  }, [rootRef, motion, lang]);
}

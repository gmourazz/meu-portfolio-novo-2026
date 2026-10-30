import { useMessages } from '@/i18n/useMessages';

export function ManifestoSection() {
  const t = useMessages().manifesto;
  const hi = new Set(t.highlight);
  return (
    <section data-pf="manifesto" className="pf-manifesto">
      <p>
        {t.text.split(' ').map((w, i) => (
          <span key={`${i}-${w}`} data-word className={hi.has(w) ? 'is-hi' : undefined}>{w}</span>
        ))}
      </p>
    </section>
  );
}

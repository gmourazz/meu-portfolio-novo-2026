import { useCycle } from '@/shared/hooks/useCycle';

function AppSkeleton({ variant, label }: { variant: 1 | 2; label: string }) {
  return (
    <div className={`pf-app pf-app--${variant}`} role="img" aria-label={label}>
      <div className="pf-app-top"><i /><b /></div>
      <div className="pf-app-hero"><span /><span /></div>
      <div className="pf-app-row"><i /><div><b /><b /></div></div>
      <div className="pf-app-row"><i /><div><b /><b /></div></div>
      <div className="pf-app-row"><i /><div><b /><b /></div></div>
      <div className="pf-app-tabs"><i /><i /><i /><i /></div>
    </div>
  );
}

function Slides({ srcs, label, on }: { srcs: string[]; label: string; on: number }) {
  return (
    <>
      {srcs.map((src, n) => <img key={src} src={src} alt={n === on ? label : ''} aria-hidden={n !== on} loading="lazy" className={`pf-slide ${n === on ? 'is-on' : ''}`} />)}
    </>
  );
}

function Phone({ srcs, label, variant, illustration }: { srcs: string[]; label: string; variant: 1 | 2; illustration: string }) {
  const on = useCycle(srcs.length, 3600);
  return (
    <div data-tilt className="pf-phone">
      <div className="pf-phone-screen">
        {srcs.length ? <Slides srcs={srcs} label={label} on={on} /> : <AppSkeleton variant={variant} label={illustration} />}
      </div>
    </div>
  );
}

function BarePhone({ srcs, label }: { srcs: string[]; label: string }) {
  const on = useCycle(srcs.length, 4200, 1800);
  return <div data-tilt className="pf-phone-bare"><Slides srcs={srcs} label={label} on={on} /></div>;
}

type MockupsProps = { screens: { ui: string[]; apps: string[] }; labels: readonly string[]; illustration: string };

/** Dois celulares sobrepostos: um com moldura em CSS (telas do app) e outro com a captura já emoldurada. */
export function PhoneMockups({ screens, labels, illustration }: MockupsProps) {
  return (
    <>
      <div data-depth="-0.08" style={{ position: 'absolute', transform: 'translateX(-30%) rotate(-8deg)' }}>
        <Phone srcs={screens.ui} label={labels[0]} variant={1} illustration={illustration} />
      </div>
      <div data-depth="0.08" style={{ position: 'absolute', transform: 'translateX(30%) translateY(30px) rotate(6deg)' }}>
        {screens.apps.length
          ? <BarePhone srcs={screens.apps} label={labels[1]} />
          : <Phone srcs={[]} label={labels[1]} variant={2} illustration={illustration} />}
      </div>
    </>
  );
}

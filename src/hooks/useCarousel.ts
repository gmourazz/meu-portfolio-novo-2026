import { useState, useEffect, useRef, useCallback } from 'react';
import { useMotionValue, animate as motionAnimate } from 'motion/react';

type UseCarouselOptions = {
  total: number;
  gap?: number;
  autoPlayInterval?: number;
};

export function useCarousel({ total, gap = 16, autoPlayInterval = 6000 }: UseCarouselOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardW, setCardW] = useState(0);
  const [cols, setCols] = useState(4);
  const [dotIdx, setDotIdx] = useState(0);
  const xMV = useMotionValue(0);
  const idxRef = useRef(0);
  const busyRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const c = w < 640 ? 1 : w < 1024 ? 2 : 4;
      setCols(c);
      setCardW((w - gap * (c - 1)) / c);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [gap]);

  const slide = useCallback(
    (toIdx: number) => {
      const sw = cardW + gap;
      motionAnimate(xMV, -(toIdx * sw), {
        duration: 0.72,
        ease: 'easeInOut' as const,
        onComplete: () => {
          const real = ((toIdx % total) + total) % total;
          if (toIdx !== real) {
            xMV.set(-(real * sw));
            idxRef.current = real;
          } else {
            idxRef.current = toIdx;
          }
          setDotIdx(real);
          busyRef.current = false;
        },
      });
    },
    [xMV, cardW, gap, total],
  );

  const goNext = useCallback(() => {
    if (busyRef.current || cardW === 0) return;
    busyRef.current = true;
    slide(idxRef.current + 1);
  }, [slide, cardW]);

  const goPrev = useCallback(() => {
    if (busyRef.current || cardW === 0) return;
    busyRef.current = true;
    if (idxRef.current === 0) {
      xMV.set(-(total * (cardW + gap)));
      idxRef.current = total;
    }
    slide(idxRef.current - 1);
  }, [slide, xMV, cardW, gap, total]);

  const goTo = useCallback(
    (idx: number) => {
      if (busyRef.current || cardW === 0 || idx === dotIdx) return;
      busyRef.current = true;
      idxRef.current = dotIdx;
      slide(idx);
    },
    [slide, cardW, dotIdx],
  );

  useEffect(() => {
    const t = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(t);
  }, [goNext, autoPlayInterval]);

  return { containerRef, cardW, cols, dotIdx, xMV, goNext, goPrev, goTo };
}

import { useState, useEffect } from 'react';

export function useElementVisibility(elementId: string): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [elementId]);

  return visible;
}

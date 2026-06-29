import { useState, useEffect } from 'react';
import type { NavItem } from '../types';

export function useActiveSection(items: NavItem[], initial = '#inicio'): string {
  const [activeSection, setActiveSection] = useState(initial);

  useEffect(() => {
    const ids = items.map(item => item.href.slice(1));
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return activeSection;
}

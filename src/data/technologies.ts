import type { SkillCategory, Highlight, Extra } from '../types';
import { Monitor, Palette, Database, Wrench, CheckCircle2, Zap, TrendingUp } from 'lucide-react';

export const categories: SkillCategory[] = [
  { label: 'Front-End',        icon: Monitor,  color: 'from-[#c8956a] to-[#d4a882]',   skills: ['React.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'Vite'] },
  { label: 'Estilização & UI', icon: Palette,  color: 'from-[#d4a882] to-[#e0bc9a]',   skills: ['Tailwind CSS', 'CSS3 / Sass', 'Framer Motion', 'Figma', 'shadcn/ui'] },
  { label: 'Back-end & Banco', icon: Database, color: 'from-[#a07850] to-[#c8956a]',   skills: ['Node.js', 'PostgreSQL', 'MySQL', 'REST APIs', 'Supabase'] },
  { label: 'Ferramentas',      icon: Wrench,   color: 'from-[#e0bc9a] to-[#eacfb4]',   skills: ['Git & GitHub', 'React Native', 'Python', 'Docker', 'Postman'] },
];

export const highlights: Highlight[] = [
  { icon: CheckCircle2, label: 'Clean Code',  value: '100%',   desc: 'Código limpo e documentado' },
  { icon: Zap,          label: 'Performance', value: '98/100', desc: 'Otimizado para Core Web Vitals' },
  { icon: TrendingUp,   label: 'SEO Ready',   value: 'A+',     desc: 'Estrutura otimizada para busca' },
];

export const extras: Extra[] = [
  { label: 'Mobile First',    value: 'Sempre' },
  { label: 'Acessibilidade',  value: 'WCAG 2.1' },
  { label: 'Cross-browser',   value: '100%' },
  { label: 'Responsivo',      value: 'Total' },
];

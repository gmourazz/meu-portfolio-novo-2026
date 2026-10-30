import type { LucideIcon } from 'lucide-react';
import { MessagesSquare, PenTool, CodeXml, Rocket, Headset, GraduationCap, Laptop, Smartphone } from 'lucide-react';
import { projects } from '@/data/projects';
import { certificates } from '@/data/certificates';
import { testimonials } from '@/data/testimonials';

// Dados estruturais da home (ícones, imagens, links, números). Os textos ficam em portfolioI18n.ts.

// Ícones de tecnologia (devicon, MIT) hospedados em public/icons/tech: sem depender de CDN de terceiros.
export const devicon = (name: string) => `/icons/tech/${name}-original.svg`;

export const marqueeWords = ['React Native', 'iOS', 'Android', 'React', 'TypeScript', 'Node.js'];

export const chipsLight = [
  ['react', 'React'], ['react', 'React Native'], ['typescript', 'TypeScript'], ['nodejs', 'Node.js'],
  ['postgresql', 'PostgreSQL'], ['tailwindcss', 'Tailwind'], ['supabase', 'Supabase'],
].map(([icon, n]) => ({ n, icon: devicon(icon) }));

export const chipsDark = [
  ['apple', 'iOS'], ['android', 'Android'], ['figma', 'Figma'], ['docker', 'Docker'], ['git', 'Git'], ['vitejs', 'Vite'],
].map(([icon, n]) => ({ n, icon: devicon(icon) }));

export const skills: [string, number][] = [['React', 95], ['React Native', 90], ['TypeScript', 90], ['UI / UX', 85], ['Node.js', 75]];

// Telas da seção Mobile. `ui` entra dentro da moldura de celular em CSS; `apps` já vêm com a moldura do iPhone.
// Listas vazias exibem a tela ilustrada no lugar.
export const phoneScreens = {
  ui: ['/mobile/food-splash.webp', '/mobile/food-home.webp', '/mobile/food-restaurant.webp', '/mobile/food-list.webp'],
  apps: ['/mobile/app-dashboard.webp', '/mobile/app-apuracao.webp'],
};

const find = (image: string) => projects.find(p => p.image === image)!;
const card = (image: string, tags: string[], title?: string) => {
  const p = find(image);
  return { image, link: p.link, category: p.category, title: title ?? p.title.split(' — ')[0], tags };
};

export const homeProjects = [
  card('/projetos/use-asio.webp', ['Next.js', 'Supabase', 'Mercado Pago']),
  card('/projetos/designergiselle.webp', ['React', 'TypeScript', 'UI/UX']),
  card('/projetos/reevi.webp', ['React', 'Supabase', 'Painel Admin']),
  card('/projetos/draraiane.webp', ['React', 'SEO', 'Ads']),
  card('/projetos/dramarcella.webp', ['React', 'SEO', 'Agendamento']),
  card('/projetos/plannervencedor.webp', ['React', 'Checkout', 'Conversão']),
  card('/projetos/mflaw.webp', ['React', 'Painel Admin']),
  card('/projetos/hmae.webp', ['React', 'Conversão', 'SEO']),
  { ...card('/projetos/mundoproitalia.webp', ['React', 'UI/UX', 'WhatsApp'], 'Mundo Pro Viagens'), category: 'Landing Pages' },
];

export const caseStudy = {
  url: 'https://useasio.com.br/',
  domain: 'useasio.com.br',
  tags: ['Next.js', 'TypeScript', 'Supabase', 'Mercado Pago', 'Melhor Envio'],
  shots: [1, 2, 3, 4, 5, 6].map(n => `/projetos/asio-case-${n}.webp`),
};

export const questIcons: LucideIcon[] = [MessagesSquare, PenTool, CodeXml, Rocket];
export const phaseIcons: LucideIcon[] = [Headset, GraduationCap, Laptop, Smartphone];

export const stackGroups: { id: 'mobile' | 'front' | 'back' | 'tools'; items: { n: string; icon?: string; glyph?: string }[] }[] = [
  { id: 'mobile', items: [{ n: 'React Native', icon: devicon('react') }, { n: 'iOS', icon: devicon('apple') }, { n: 'Android', icon: devicon('android') }, { n: 'CI/CD', icon: devicon('githubactions') }] },
  { id: 'front', items: [{ n: 'React', icon: devicon('react') }, { n: 'TypeScript', icon: devicon('typescript') }, { n: 'Vite', icon: devicon('vitejs') }, { n: 'Tailwind', icon: devicon('tailwindcss') }, { n: 'Framer Motion', icon: '/icons/tech/framer.svg' }] },
  { id: 'back', items: [{ n: 'Node.js', icon: devicon('nodejs') }, { n: 'PostgreSQL', icon: devicon('postgresql') }, { n: 'MySQL', icon: devicon('mysql') }, { n: 'Supabase', icon: devicon('supabase') }, { n: 'REST APIs', glyph: '{ }' }] },
  { id: 'tools', items: [{ n: 'Testes E2E', icon: devicon('cypressio') }, { n: 'Git', icon: devicon('git') }, { n: 'Docker', icon: devicon('docker') }, { n: 'Figma', icon: devicon('figma') }, { n: 'Postman', icon: devicon('postman') }] },
];

export const certTabs = ['all', 'data', 'ai', 'cloud'] as const;
export type CertTab = typeof certTabs[number];

function certCategory(title: string): Exclude<CertTab, 'all'> | null {
  if (/aws|nuvem|cloud|az-900/i.test(title)) return 'cloud';
  if (/machine learning|redes neurais|svm|genétic|bioinspirad|\bia\b|datasets/i.test(title)) return 'ai';
  if (/dados|python|etl|excel|sql/i.test(title)) return 'data';
  return null;
}

function certIcon(title: string, cat: CertTab | null): string {
  if (cat === 'cloud') return /az-900/i.test(title) ? devicon('azure') : /aws/i.test(title) ? devicon('amazonwebservices') : devicon('googlecloud');
  if (cat === 'ai') return devicon('tensorflow');
  if (cat === 'data') return devicon('python');
  return devicon('javascript');
}

const maxHours = Math.max(...certificates.map(c => parseFloat(c.hours)));

export const homeCertificates = certificates.map(c => {
  const hours = parseFloat(c.hours);
  const cat = certCategory(c.title);
  return {
    title: c.title, org: c.institution, hours: c.hours, link: c.link, cat,
    icon: certIcon(c.title, cat),
    xp: Math.round(hours * 10),
    bar: Math.max(8, Math.round(Math.sqrt(hours / maxHours) * 100)) + '%',
  };
});

export const reviews = testimonials.map(t => ({ n: t.name, q: t.text.replace(/ — /g, ', '), p: t.project }));

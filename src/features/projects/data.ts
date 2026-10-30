import { projects } from '@/data/projects';

export type CatalogItem = {
  id: string;
  title: string;
  /** Categoria original de projects.ts (chave para traduzir e filtrar) */
  type: string;
  niche: string;
  desc: string;
  tags: string[];
  image: string;
  link: string;
  n: string;
};

// "Mundo Pro — Itália" precisa manter o destino; nos demais, o que vem depois do traço é só a categoria.
const cleanTitle = (t: string) => (t.startsWith('Mundo Pro') ? t.replace(' — ', ' ') : t.split(' — ')[0]);

export const catalog: CatalogItem[] = projects.map((p, i) => ({
  id: p.image,
  title: cleanTitle(p.title),
  type: p.category,
  niche: p.metrics.find(m => m.label === 'Nicho')?.value ?? '',
  desc: p.description.replace(/ — /g, ', '),
  tags: p.tags.slice(0, 6),
  image: p.image,
  link: p.link,
  n: String(i + 1).padStart(2, '0'),
}));

export const catalogTypes = Array.from(new Set(catalog.map(p => p.type)));

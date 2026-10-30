import { catalog } from './data';
import { pageUrl } from '@/seo/useSeo';
import type { Lang } from '@/i18n/LanguageContext';

/** Dados estruturados da página de projetos: uma coleção com a lista dos projetos e seus endereços. */
export function projectsJsonLd(lang: Lang, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: pageUrl('/projects', lang),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: catalog.length,
      itemListElement: catalog.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: p.link })),
    },
  };
}

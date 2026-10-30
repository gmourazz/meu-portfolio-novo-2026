// Gera o bloco <head> de SEO a partir de src/seo/seo.json (fonte única, usada pelo Vite em dev/build e pelo postbuild).
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const seo = JSON.parse(readFileSync(fileURLToPath(new URL('../src/seo/seo.json', import.meta.url)), 'utf8'));
export const LANGS = ['pt', 'en', 'es'];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export const pageUrl = (route, lang = 'pt') => `${seo.siteUrl}${route}${lang === 'pt' ? '' : `?lang=${lang}`}`;

const graph = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${seo.siteUrl}/#website`,
      url: seo.siteUrl,
      name: seo.siteName,
      inLanguage: ['pt-BR', 'en', 'es'],
      publisher: { '@id': `${seo.siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${seo.siteUrl}/#profile`,
      url: seo.siteUrl,
      name: seo.routes['/'].title.pt,
      isPartOf: { '@id': `${seo.siteUrl}/#website` },
      mainEntity: { '@id': `${seo.siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${seo.siteUrl}/#person`,
      name: 'Geovanna Moura',
      jobTitle: 'Engenheira de Software',
      description: seo.routes['/'].description.pt,
      url: seo.siteUrl,
      image: `${seo.siteUrl}/eu.webp`,
      email: 'geovannamouradeveloper@gmail.com',
      sameAs: ['https://linkedin.com/in/geovanna-moura-23472b216', 'https://github.com/gmourazz'],
      worksFor: { '@type': 'Organization', name: 'Ctributária' },
      alumniOf: { '@type': 'EducationalOrganization', name: 'Anhanguera Educacional' },
      knowsAbout: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'UI/UX Design', 'Desenvolvimento Web', 'Desenvolvimento Mobile'],
    },
  ],
});

/** Bloco entre <!--seo:start--> e <!--seo:end--> para a rota e o idioma dados. */
export function renderHead(route = '/', lang = 'pt') {
  const page = seo.routes[route];
  const title = page.title[lang];
  const description = page.description[lang];
  const url = pageUrl(route, lang);
  const image = seo.siteUrl + seo.ogImage.path;
  const alternates = [...LANGS.map(l => [seo.htmlLang[l], pageUrl(route, l)]), ['x-default', pageUrl(route, 'pt')]]
    .map(([hl, href]) => `    <link rel="alternate" hreflang="${hl}" href="${href}" data-seo />`).join('\n');
  return `<!--seo:start-->
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
${alternates}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(seo.siteName)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="${seo.locales[lang]}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${seo.ogImage.width}" />
    <meta property="og:image:height" content="${seo.ogImage.height}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify(graph())}</script>
    <!--seo:end-->`;
}

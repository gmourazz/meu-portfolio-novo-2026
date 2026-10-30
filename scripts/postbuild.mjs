// Roda depois do `vite build`: gera páginas estáticas por rota (SEO e compartilhamento sem JavaScript),
// redirecionamentos das páginas antigas, 404.html e o sitemap.xml com data de atualização.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { seo, renderHead, pageUrl, LANGS } from './seo-head.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const read = f => readFileSync(join(dist, f), 'utf8');
const write = (f, content) => { writeFileSync(join(dist, f), content); console.log('  +', f); };
const BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

const home = read('index.html');
if (!BLOCK.test(home)) throw new Error('dist/index.html sem bloco de SEO: o plugin seo-head rodou?');

// 1) uma página HTML por rota (projects.html é servido em /projects pelo host)
for (const route of Object.keys(seo.routes)) {
  if (route === '/') continue;
  write(`${route.slice(1)}.html`, home.replace(BLOCK, renderHead(route, 'pt')));
}

// 2) 404 real: noindex, o app mostra a página "não encontrada"
write('404.html', home.replace(BLOCK, `<!--seo:start-->
    <title>404 | Geovanna Moura</title>
    <meta name="robots" content="noindex, follow" />
    <!--seo:end-->`));

// 3) páginas antigas: redirecionamento instantâneo para a seção equivalente da home
for (const [from, to] of Object.entries(seo.legacyRedirects)) {
  write(`${from.slice(1)}.html`, `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Geovanna Moura</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${seo.siteUrl}/" />
    <meta http-equiv="refresh" content="0; url=${to}" />
  </head>
  <body><a href="${to}">Geovanna Moura</a></body>
</html>
`);
}

// 4) sitemap com alternates de idioma
const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(seo.routes).map(([route, { sitemap }]) => {
  const alts = [...LANGS.map(l => [seo.htmlLang[l], pageUrl(route, l)]), ['x-default', pageUrl(route, 'pt')]]
    .map(([hl, href]) => `    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}" />`).join('\n');
  return `  <url>
    <loc>${pageUrl(route, 'pt')}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${sitemap.changefreq}</changefreq>
    <priority>${sitemap.priority}</priority>
${alts}
  </url>`;
}).join('\n');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`);

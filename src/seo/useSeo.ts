import { useEffect } from 'react';
import { useLang, type Lang } from '@/i18n/LanguageContext';
import seo from './seo.json';

export type SeoRoute = keyof typeof seo.routes;
const LANGS: Lang[] = ['pt', 'en', 'es'];

/** URL absoluta de uma rota no idioma dado. O português é o padrão e não leva `?lang=`. */
export function pageUrl(route: string, lang: Lang): string {
  const path = route === '/' ? '/' : route;
  return `${seo.siteUrl}${path}${lang === 'pt' ? '' : `?lang=${lang}`}`;
}

function upsert(selector: string, create: () => HTMLElement, set: (el: HTMLElement) => void) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  set(el);
}
const meta = (attr: 'name' | 'property', key: string, content: string) =>
  upsert(`meta[${attr}="${key}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m; }, el => el.setAttribute('content', content));

/**
 * Mantém title, description, canonical, Open Graph, Twitter, hreflang e `<html lang>` em dia
 * com a rota e o idioma. `jsonLd` (opcional) vira um bloco de dados estruturados exclusivo da página.
 */
export function useSeo(route: SeoRoute, jsonLd?: object) {
  const { lang } = useLang();
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const page = seo.routes[route];
    const title = page.title[lang];
    const description = page.description[lang];
    const url = pageUrl(route, lang);
    const image = seo.siteUrl + seo.ogImage.path;

    document.title = title;
    document.documentElement.lang = seo.htmlLang[lang];
    meta('name', 'description', description);
    meta('property', 'og:type', 'website');
    meta('property', 'og:site_name', seo.siteName);
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:url', url);
    meta('property', 'og:locale', seo.locales[lang]);
    meta('property', 'og:image', image);
    meta('property', 'og:image:width', String(seo.ogImage.width));
    meta('property', 'og:image:height', String(seo.ogImage.height));
    meta('name', 'twitter:card', 'summary_large_image');
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', description);
    meta('name', 'twitter:image', image);
    meta('name', 'robots', 'index, follow, max-image-preview:large');

    upsert('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l; }, el => el.setAttribute('href', url));

    // alternates de idioma: um por idioma + x-default (português)
    document.head.querySelectorAll('link[rel="alternate"][data-seo]').forEach(el => el.remove());
    const alternates: [string, string][] = [...LANGS.map(l => [seo.htmlLang[l], pageUrl(route, l)] as [string, string]), ['x-default', pageUrl(route, 'pt')]];
    for (const [hreflang, href] of alternates) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      link.dataset.seo = '';
      document.head.appendChild(link);
    }
  }, [route, lang]);

  useEffect(() => {
    document.head.querySelectorAll('script[data-seo-page]').forEach(el => el.remove());
    if (!jsonLdText) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoPage = '';
    script.textContent = jsonLdText;
    document.head.appendChild(script);
    return () => script.remove();
  }, [jsonLdText]);
}

# Arquitetura

Site estático (sem servidor) em React 18 + TypeScript + Vite. Rotas com `react-router`; CSS próprio escopado em `.pf`; ícones `lucide-react`. São só 5 dependências de produção.

## Camadas (as dependências só apontam para dentro)

```
src/
  app/        composição: provedores e rotas
  pages/      uma página por rota (só orquestram: hooks de página + seções)
  features/   uma pasta por funcionalidade
    home/       seções da home (hero, about, story, mobile, projects, case-study, process, evolution, stack, reviews, contact)
    projects/   catálogo, filtros, grade, lista e modal da página /projects
    scheduling/ modal de agendamento (Google Calendar)
  shared/     reaproveitável, sem regra de negócio
    ui/         SectionTitle, PixelLabel, IconTile, MarqueeStrip, LangSwitch
    hooks/      useModal, useMediaQuery, useCycle, useFollowPointer, useReducedMotion
    motion/     usePageMotion + um módulo por efeito (loops, scroll, pointer, reveal, particles)
    lib/        funções puras pequenas
  i18n/       LanguageContext, useMessages e os textos (um arquivo por idioma)
  seo/        seo.json (fonte única) e useSeo
  data/       dados puros (projetos, certificados, depoimentos, contato)
  services/   integrações externas (WhatsApp)
  styles/     base.css (reset), fonts.css, portfolio.css (home e projetos), scheduling.css
scripts/      seo-head.mjs (gera o <head>) e postbuild.mjs (páginas por rota, 404, sitemap)
```

Regras:

1. `data/` e `i18n/messages` não importam componentes.
2. `features/*` não importam umas das outras; o que for comum sobe para `shared/`.
3. Componentes de apresentação não mexem no DOM diretamente: animação e observers ficam em hooks (`shared/motion`). Os componentes só marcam elementos com `data-pf="..."`, `data-reveal`, `data-tilt`, etc.
4. Todo texto visível vem de `i18n/messages`. O tipo `Messages` é derivado do `pt.ts`.
5. Imports entre pastas usam o alias `@/` (= `src/`).

## Movimento

`usePageMotion(rootRef, motion, onSection, lang)` liga tudo de uma vez numa página. Cada efeito é um módulo que recebe um `Scope` (raiz + helpers) e devolve a função que o desfaz:

- `loops` marquees, flutuação, giro · `scroll` progresso/XP, parallax, manifesto, trilho horizontal · `pointer` tilt 3D, ímãs, confete · `reveal` entrada no scroll, contadores, títulos letra a letra, seção ativa.

Com `prefers-reduced-motion`, `motion` vira `false` e só o essencial roda (progresso, HUD, barras).

## SEO

- `src/seo/seo.json` é a fonte única de title/description por rota e idioma.
- No build, `scripts/seo-head.mjs` escreve o `<head>` (canonical, hreflang, Open Graph, Twitter, JSON-LD) em `index.html`; `scripts/postbuild.mjs` gera `projects.html`, `404.html`, redirecionamentos das páginas antigas e o `sitemap.xml` (com `lastmod` e alternates de idioma).
- Em runtime, `useSeo` mantém title, canonical, hreflang e `<html lang>` em dia ao trocar de rota/idioma; `/projects` ainda publica um JSON-LD `CollectionPage` com a lista de projetos.
- Idioma: `?lang=en|es` na URL > preferência salva > português. O idioma do navegador **não** é usado de propósito (buscadores precisam ver sempre o mesmo conteúdo em `/`).

## Performance

- Fontes self-hosted (`@fontsource`), só subconjuntos latin/latin-ext, com fontes "reserva" de métricas calibradas: troca de fonte sem mover o layout (CLS 0).
- Nenhum recurso de terceiros em tempo de execução (ícones de tecnologia em `public/icons/tech`).
- Code splitting: `/projects`, 404, modais e os textos de EN/ES são baixados só quando necessários.
- `source-assets/` guarda os originais PNG/JPG; só `.webp` vai para `public/`.
- Preloads de fonte/imagem foram testados e **pioraram** o primeiro desenho em rede lenta (competem com o JS); por isso não existem.

## Qualidade

`npm run check` = `tsc` + ESLint (TypeScript + regras de hooks) + build. Modais seguem o padrão de acessibilidade (`useModal`: foco preso, Esc, foco devolvido), há link "pular para o conteúdo", `<main>`, ordem de títulos válida e contraste AA nos textos (tokens `--neon-ink` e `--neon-deep`).

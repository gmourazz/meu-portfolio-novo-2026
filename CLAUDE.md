# CLAUDE.md

Guia para o Claude Code neste repositório.

## Comandos

```bash
npm run dev        # http://localhost:5173
npm run check      # tsc + eslint + build (rodar antes de entregar)
npm run build      # dist/ + páginas por rota (scripts/postbuild.mjs)
npm run lint
```

Não há suíte de testes unitários. Verificação de UI é feita comparando capturas e rodando checagens no navegador (ver docs/ARCHITECTURE.md).

## Arquitetura (resumo; detalhes em docs/ARCHITECTURE.md)

React 18 + TypeScript + Vite, `react-router`, CSS escopado em `.pf` (sem Tailwind), ícones `lucide-react`.

- `src/pages` só orquestra; seções da home em `src/features/home/sections/<nome>/`; página de projetos em `src/features/projects`.
- Textos: `src/i18n/messages/{pt,en,es}.ts`. Toda string visível vem daí (o tipo é derivado de `pt.ts`).
- Movimento: nunca mexer no DOM em componentes; usar atributos `data-*` e os módulos de `src/shared/motion`.
- SEO: `src/seo/seo.json` é a fonte única; rota nova precisa entrar em `App.tsx` **e** em `seo.json`.
- Alias `@/` aponta para `src/`.

## Convenções

- Resposta e comentários em português do Brasil; sem travessão (—) em textos do site.
- Contagem de projetos entregues: "55+".
- Imagens: `.webp` em `public/`; originais PNG/JPG em `source-assets/` (não publicados).
- Não reintroduzir recursos de terceiros em runtime (CDN de fontes/ícones).

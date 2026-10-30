# Portfólio · Geovanna Moura

Portfólio em React 18 + TypeScript + Vite, com visual "arcade" (HUD de XP, conquistas, cards 3D), três idiomas (PT, EN, ES) e SEO por rota.

## Comandos

```bash
npm install          # dependências (só 5 em produção)
npm run dev          # servidor local em http://localhost:5173
npm run check        # typecheck + lint + build (rode antes de publicar)
npm run build        # gera dist/ (vite build + scripts/postbuild.mjs)
npm run preview      # serve o dist/ para conferir o resultado final
```

## Publicar

Envie o **conteúdo** de `dist/` (não a pasta) para a hospedagem.

- **Hostinger / Apache:** o `.htaccess` vai junto (está em `public/`). Ele serve `/projects` como `projects.html`, devolve `404.html` com status 404 e configura cache e compressão.
- **Netlify / Vercel:** `netlify.toml` e `vercel.json` já estão prontos (URLs limpas, cabeçalhos de cache e segurança).

## Onde mexer

| Quero... | Arquivo |
|---|---|
| Trocar textos (PT/EN/ES) | `src/i18n/messages/{pt,en,es}.ts` (o tipo vem do `pt.ts`: se faltar chave, o `tsc` avisa) |
| Adicionar/editar um projeto | `src/data/projects.ts` (+ imagem `.webp` 1200 px em `public/projetos/`) e a descrição nos 3 idiomas em `messages` → `projects.items` |
| Certificados, depoimentos, contato | `src/data/certificates.ts`, `testimonials.ts`, `contact.ts` |
| Prints dos apps mobile | `phoneScreens` em `src/features/home/data.ts` + arquivos em `public/mobile/` |
| Título, descrição e imagem de compartilhamento | `src/seo/seo.json` e `public/og-image.jpg` |
| Nova rota | `src/app/App.tsx` **e** `src/seo/seo.json` (o build gera o HTML dela) |

Mais detalhes em [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

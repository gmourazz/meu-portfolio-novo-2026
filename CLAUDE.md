# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at localhost:5173
npm run build      # production build → dist/
npm run typecheck  # TypeScript type check (no emit)
```

No test suite. No linter configured.

## Architecture

React 18 + TypeScript + Vite + Tailwind CSS v4 single-page portfolio. Routing via `react-router` v7 (BrowserRouter). Animations via `motion/react` (Framer Motion v12). Icons from `lucide-react`.

### Folder structure under `src/app/`

```
components/
  layout/    → Header (fixed nav, mobile menu, active-section tracking)
  sections/  → one file per page section (Hero, About, Projects, Technologies, Certificates, Contact)
  shared/    → SpaceBackground, BackToTop, ProjectCard, AgendarModal
  ui/        → shadcn/ui primitives (Radix-based) — do not reorganise
data/
  projects.ts      → Project interface + projects array (featured flag controls homepage grid)
  certificates.ts  → Certificate[] (imports type from types/)
hooks/
  useIsMobile.ts   → window.innerWidth listener, accepts breakpoint param
types/
  index.ts         → Certificate type
utils/
  animations.ts    → fadeUp() — shared Framer Motion variant used across all sections
  calendar.ts      → buildGoogleCalendarUrl() — Google Calendar invite link builder
pages/
  AllProjectsPage.tsx
App.tsx            → route definitions + HomePage component
```

### Key conventions

- `fadeUp(delay?)` from `utils/animations` is used in every section for scroll-reveal. Import it instead of redefining inline.
- `useIsMobile(breakpoint)` from `hooks/useIsMobile` replaces any local `useState + useEffect + window.innerWidth` pattern.
- Static assets (images, PDFs, certificates) live in `public/` and are referenced with absolute paths (`/projetos/...`, `/certificados/...`).
- `public/.htaccess` rewrites all routes to `index.html` for Hostinger (Apache) deployment.
- The `@/` path alias maps to `src/`.
- `SpaceBackground` accepts a `variant` prop (`'a' | 'b' | 'c'`) and is purely decorative — each section picks a variant.

### Responsive breakpoints used in components

- Pills/mobile-only limits use `useIsMobile(640)` for sm and `useIsMobile(768)` for md.
- Certificates: 3 initial on mobile (<640px), 8 on desktop.
- Projects: 6 visible on mobile (<768px), all featured on desktop.
- Testimonials carousel (About): computes visible columns from container width — 1 col <640px, 2 cols <1024px, 4 cols desktop.

### Deployment

Upload contents of `dist/` (not the folder itself) to `public_html/` on Hostinger. The `.htaccess` file must be included for client-side routing to work.

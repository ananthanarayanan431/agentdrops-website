# agentdrops-website

AgentDrops website.

## Stack

| Area         | Tool                                                               |
| ------------ | ------------------------------------------------------------------ |
| Framework    | Astro 7 (fully static build)                                       |
| UI islands   | React 19                                                           |
| Styling      | Tailwind CSS v4 via `@tailwindcss/vite`, `clsx` + `tailwind-merge` |
| Content      | MDX, sitemap                                                       |
| Icons/motion | Lucide (`@lucide/astro`, `lucide-react`), GSAP, Lenis              |
| Language     | TypeScript (strict), `@/*` → `src/*`                               |
| Quality      | ESLint (flat config, astro + jsx-a11y), Prettier                   |
| Tests        | Vitest (unit), Playwright + axe-core (e2e, accessibility)          |
| Git hooks    | Husky + lint-staged                                                |
| Tooling      | pnpm 10, Node 24 (`.nvmrc`), Makefile, GitHub Actions CI           |
| Hosting      | Cloudflare Workers static assets (`wrangler.jsonc`)                |

## Getting started

```sh
pnpm install
pnpm dev        # http://localhost:4321
```

`make` starts the dev server; `make build` and `make clean` are also available.

## Scripts

| Script                        | Purpose                        |
| ----------------------------- | ------------------------------ |
| `pnpm dev`                    | Dev server                     |
| `pnpm build` / `pnpm preview` | Production build / serve it    |
| `pnpm check`                  | Astro + TypeScript diagnostics |
| `pnpm lint` / `pnpm format`   | ESLint / Prettier              |
| `pnpm test`                   | Vitest unit tests              |
| `pnpm test:e2e`               | Playwright end-to-end tests    |
| `pnpm check:links`            | Broken-link check on `dist/`   |

## Layout

```
.claude/                Agent personas, skills and reference checklists for Claude Code
.github/                CI workflow, PR template, CODEOWNERS
src/
  config/site.ts        Site URL, brand facts, navigation
  data/                 Page content as typed data
  components/
    layout/             Header, footer, overlays
    sections/           Shared page sections
    ui/                 Small reusable pieces (buttons, icons, links)
  layouts/              BaseLayout: head, SEO and the page shell
  lib/                  Helpers (`cn` for class merging)
  pages/                One file per route, plus 404
  scripts/              Client-side scripts
  styles/global.css     Tailwind entry and theme tokens
worker/index.ts         Cloudflare Worker for /api/* routes
tests/
  unit/                 Vitest
  e2e/                  Playwright, with axe accessibility checks
```

## Configuration

- Set the production domain in `SITE_URL` (`src/config/site.ts`); it drives the
  canonical URLs and the sitemap.
- Old addresses are forwarded by `redirects` in `astro.config.mjs`. The build
  writes them to `dist/_redirects`, so Cloudflare answers with a real 301.
- Cache headers live in `public/_headers`.

## Deployment

Cloudflare Workers Builds deploys the Worker `agentdrops-website`: build command
`pnpm build`, deploy command `npx wrangler deploy`, which serves `dist/` as
static assets (see `wrangler.jsonc`).

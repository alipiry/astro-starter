# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (>=10, Node >=22.13 — raised from 22.12 by ESLint 10's own engine requirement). Lockfile committed; use `--frozen-lockfile` in CI.

| Command                             | Purpose                             |
| ----------------------------------- | ----------------------------------- |
| `pnpm dev`                          | Dev server at `localhost:4321`      |
| `pnpm build`                        | Production build to `./dist/`       |
| `pnpm preview`                      | Preview built site                  |
| `pnpm clean`                        | Remove `dist/` and `.astro/`        |
| `pnpm type-check`                   | `astro check` (TS + `.astro` files) |
| `pnpm lint` / `pnpm lint:fix`       | ESLint on `.js,.ts,.astro`          |
| `pnpm format` / `pnpm format:check` | Prettier                            |
| `pnpm astro ...`                    | Raw Astro CLI                       |

No test runner configured. Husky `prepare` hook auto-installs on `pnpm install`.

Astro 7 adds agent-aware CLI: `astro dev --background` starts the dev server detached; manage it with `astro dev stop`, `astro dev status`, `astro dev logs [--follow]`. Prefer this over a foregrounded `pnpm dev` when running as an agent. See `AGENTS.md` for the full agent-facing doc set.

## Architecture

Astro 7 SSG starter. Single layout, file-based routing, zero client JS by default.

- **`astro.config.mjs`** — loads env via `vite/loadEnv` (NOT `import.meta.env`) so `SITE_URL` and `APP_ENV` work at config time. `site` falls back to `https://astro-starter.piry.dev`. Integrations: `@astrojs/sitemap`, `astro-robots-txt`. The `robots-txt` policy is **environment-gated**: `APP_ENV=production` → `allow: /`, otherwise → `disallow: /` (prevents staging indexing). Alias `@` → `./src` set via Vite config.
- **`src/layouts/Layout.astro`** — single source of truth for SEO. Uses `astro-seo` with full OpenGraph + Twitter cards + favicons + structured data. Edit site identity, social handles, OG image refs here, not per-page.
- **`src/pages/`** — Astro file-based routes. `index.astro` is the only page.
- **Env vars**: only `SITE_URL` and `APP_ENV`. `.env.example` is the contract — keep in sync when adding vars.

## Code Quality Wiring

- **ESLint flat config** (`eslint.config.mjs`): `js.recommended` + `tseslint.recommended` + `astro.recommended` + `jsx-a11y-recommended`. `simple-import-sort` enforces import/export order — let it auto-fix, don't hand-order imports. `eslint-comments` rules forbid unused/unpaired disables. `prettier/prettier` rule is **off** (Prettier runs separately via lint-staged). Ignores: `dist/`, `**/*.d.ts`, `.github/`.
- **Prettier** uses `prettier-plugin-astro`. Don't argue with the formatter.
- **Pre-commit (`lint-staged.config.js`)**: every staged `.ts/.tsx/.astro` triggers a **full repo `type-check`** (not per-file), then ESLint `--fix` + Prettier on touched files. Be aware: type errors anywhere in the repo block any commit touching TS/Astro files.
- **Commit messages**: enforced by `commitlint.config.js` + husky `commit-msg` hook (`npx commitlint --edit`). Conventional Commits `type(scope): subject`; scope is optional (warns, doesn't block) but must be one of the enum values if present — see `commitlint.config.js` for the allowed types/scopes.
- **CI** (`.github/workflows/`): `quality.yml` (typecheck → lint → format check → `pnpm audit`) runs first; `build.yml` runs only on `quality` success.

## Branching

`develop` is the integration branch (PRs target it, not `main`). Conventional Commits.

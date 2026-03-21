# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies. Contains a premium portfolio website for Neeraj Negi.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   ├── mockup-sandbox/     # Component preview server
│   └── portfolio/          # Neeraj Negi's portfolio website
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Portfolio Website (artifacts/portfolio)

A premium single-page portfolio for Neeraj Negi.

### Features
- **Dark Mode** (default): Deep charcoal (#0a0a0a) with neon cyan glow effects
- **Light Mode**: Soft off-white (#f8f9fa) with sapphire blue accents
- **Theme Toggle**: Animated Sun/Moon button with smooth transitions (next-themes)
- **Animated Background**: Canvas-based floating particles with connecting lines
- **Hero Section**: Typewriter animation, floating avatar, glowing CTA buttons
- **About Section**: Interest cards grid, skills badges, certificates list
- **Projects Section**: Bento Grid (top 2) + keen-slider for remaining projects
- **Experience Section**: Timeline layout with education/training entries
- **Contact Section**: Validated form with success state animation
- **Footer**: Social links

### Key Files
- `src/pages/Home.tsx` — Main page with ThemeProvider
- `src/components/` — All section components
- `src/data/portfolio-data.ts` — All content data (Neeraj's real CV data)
- `src/types/index.ts` — TypeScript interfaces
- `src/index.css` — Theme tokens (dark/light CSS variables)

### Tech Stack (Portfolio)
- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll-reveal animations)
- next-themes (dark/light mode)
- keen-slider (project slider)
- react-type-animation (typewriter effect)
- lucide-react (icons)

## Packages

### `artifacts/api-server` (`@workspace/api-server`)
Express 5 API server. Routes in `src/routes/`, uses `@workspace/api-zod` for validation.

### `lib/db` (`@workspace/db`)
Database layer using Drizzle ORM with PostgreSQL.

### `lib/api-spec` (`@workspace/api-spec`)
OpenAPI 3.1 spec + Orval codegen config.
Run codegen: `pnpm --filter @workspace/api-spec run codegen`

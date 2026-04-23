# ElectricVolution

Personal blog and portfolio around the Škoda Elroq 85 Sportline — built with Vite + React 19 + TypeScript + Bun.

**Live:** https://kohld.github.io/ev/

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Runtime | Bun |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 (HashRouter) |
| Markdown | marked + custom frontmatter parser |
| Hosting | GitHub Pages |
| Container | Docker + docker-compose |

## Features

- **Blog** — Markdown posts in `src/posts/`, auto-loaded via `import.meta.glob`
- **Tag filtering** — filter posts by tag, active tag highlighted
- **Reading time** — estimated per post from word count
- **Fahrzeug** — Elroq specs, blueprint sketch, charging providers
- Dark theme, responsive, no build-time CMS required

## Dev

```bash
make start        # start Docker dev server
make stop         # stop containers
make test         # run unit tests (bun test)
make type-check   # tsc --noEmit
make logs         # tail frontend logs
make shell        # exec into container
make clean        # remove containers, volumes, image
```

Dev server: http://localhost:5173/ev/

## Blog Posts

Add `.md` files to `src/posts/` with frontmatter:

```markdown
---
title: Post Title
date: 2026-04-21
description: Short description
tags: tag1, tag2
---

Content here.
```

## Data

- `src/data/vehicle.json` — Elroq specs
- `src/data/charging-providers.json` — charging networks

## Deploy

Push to `main` → GitHub Actions builds + deploys to GitHub Pages automatically.

## License

MIT © 2026 Dennes Kohl

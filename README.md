# Alpha Shift — Website

Shift Thinking. Shape Success. Built with [Astro](https://astro.build) — a fast, static, low-maintenance site.

## Run it

```bash
npm install      # once
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

Requires Node 18.20.8+, 20.3+, or 22+ (tested on Node 24).

## Editing content (no code needed)

All home-page copy lives in **`src/data/home.ts`**. Change the words there and the design
adapts around them. Fields ending in `Html` may use a little inline emphasis:

- `<em>…</em>` — the reflective serif-italic voice
- `<span class="o">…</span>` — an Alpha Shift orange highlight (use sparingly)

## Swapping the sketchnotes / images

The hand-drawn sketchnotes live in **`public/sketches/`**. Replace a file (keep the same
name) or drop in a new one and point `src/data/home.ts` at it. Line-art scanned on white
paper works best — the white drops out automatically over the warm paper background.

## Project structure

```
src/
  data/home.ts         ← editable copy (source of truth)
  layouts/Base.astro   ← <head>, fonts, global CSS
  styles/global.css    ← all styling and design tokens (CSS variables)
  components/
    Nav.astro
    Hero.astro         ← headline, possibility chips, dot-cluster
    Cluster.astro      ← the hero dot-cluster (data-driven SVG)
    PinnedPrint.astro  ← reusable "pinned sketchnote" card
  pages/index.astro    ← composes the page + client interactions
public/
  sketches/            ← sketchnote images
  favicon.svg
```

## Design notes

- Palette, type and spacing are defined once as CSS variables in `src/styles/global.css`.
- Motion is minimal and respects `prefers-reduced-motion`; content is never hidden without JS.
- The Chetan section is a typographic placeholder awaiting real founder photography.

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages, S3). Build with `npm run build`
and serve the `dist/` folder. Set the production domain in `astro.config.mjs` (`site`).

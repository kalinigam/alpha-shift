# Codex task — Alpha Shift v5: design-system check, font fixes, entrance animations

You are the QA/polish engineer for this Astro site. Claude builds sections; you verify and add polish. This site is about to go to a client, so be careful and tasteful.

## Scope & hard rules
- Work ONLY in: `src/pages/v5.astro`, `src/styles/global.css` (v5-relevant parts), and — only if a font/token fix requires it — `src/layouts/Base.astro`, `src/layouts/Internal.astro`, and the internal pages. **NEVER touch `src/pages/index.astro`** (locked design).
- The site is **base-pathed for GitHub Pages** (`astro.config.mjs` → `base: '/alpha-shift/'`). Do NOT add bare absolute paths like `/sketches/…`. Any new asset reference must use `` `${import.meta.env.BASE_URL}sketches/…` ``.
- A **dev server is already running on http://localhost:4321** — do NOT start another dev/preview server on port 4321 (it collides). To verify: run `npm run build` (must pass), and screenshot with the existing helpers in `.agents/` (e.g. `node .agents/shoot-balls.cjs <outPrefix>`, `node .agents/shoot-scenes.cjs <outPrefix> http://localhost:4321/v5/`). If you must preview a fresh build, use a DIFFERENT port (e.g. `npm run preview -- --port 4399`).
- Keep the design language: warm paper `#F7F5F0`, ink `#141311`, muted `#6F6A60`, and **ORANGE `#E8551A` as the ONLY loud UI accent** (pastels appear only inside the hand-drawn sketches/hero, never as UI chrome). Copy is **verbatim** from `src/data/*.ts` — do not reword any copy.
- Do NOT break these existing behaviours: the travelling-ball animation (`.balls` overlay + its rAF loop in the v5 `<script>`), the sketch scroll scene (`.sk`), the shiftcard circular period-wipe (`.shiftcard`), the horizontal act (`.mts`), the how-we-work orbit (`.hww`), and the sticky nav invert.

## Tasks
1. **Design-system check.** Audit against `src/styles/global.css` `:root` tokens and `brand-kit.html`. Fonts must be: Geist (`--sans`) for UI/headings, Instrument Serif *italic* (`--serif`) for serif emphasis, Geist Mono (`--mono`) for eyebrows/labels. Check for: wrong family/weight, silent font fallbacks (fonts not actually loading), mismatched type sizes vs the scale, off-token colors, inconsistent radii/spacing. **Fix any font problems you find** (that's an explicit ask). Report the rest.

2. **Entrance animations — fade-in + float-up.** Add a subtle reveal to MOST sections: opacity 0→1 and translateY ~18–22px→0, ~0.55s ease-out, triggered once when the section scrolls into view, staggering child elements where natural. Reuse/extend the existing `[data-rise]` + `.rise` IntersectionObserver already in the v5 `<script>` (don't invent a second system). Apply to: hero copy block, sketch, shiftcard, about, how-we-work, meet-chetan, closing, footer. **EXCLUDE the horizontal section `.mts`** entirely (it has its own pinned scroll timeline — leave it alone). Respect `prefers-reduced-motion: reduce` (no transforms; show content).

3. **Text animations on SELECTED texts only.** Pick ~3–5 high-impact spots (e.g. the big section `h2` headings) and give them a tasteful word-by-word or line-by-line reveal on entry. Do NOT animate body paragraphs, labels, or every heading — restraint matters (over-animation reads as AI-generated). Keep it consistent with the entrance timing.

## When done
- `npm run build` must pass.
- Screenshot the affected sections to confirm nothing is broken and the reveals look right.
- Print a concise report: (a) design-system findings, (b) exact font fixes made, (c) which sections got fade/float reveals, (d) which texts got text animations. Do NOT commit or push — Claude will review and push to the `v5` branch.

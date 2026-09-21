# Codex verification + debug brief — Alpha Shift (v5)

You are the QA/debug engineer for this Astro site. Claude authors the sections; you verify and fix bugs. Work ONLY on the v5 variant; do NOT change `src/pages/index.astro` (that's a locked design).

## Project
- Astro 5 site at repo root. Working page: `src/pages/v5.astro` (route `/v5/`). Shared styles: `src/styles/global.css`. Copy data: `src/data/*.ts`.
- The hero embeds `public/sketches/Thoughts-Animation-hero.html` (a 9MB canvas animation) in an iframe.

## How to run + verify (a browser is available — do NOT rely on file://)
- Build: `npm run build` (must succeed).
- Serve: `npm run preview` (http://localhost:4321) OR use the already-running dev server on :4321.
- Screenshot harness (puppeteer-core installed; Edge at `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`): see `.agents/shoot-scenes.cjs <outPrefix> <url>` and `.agents/shoot-card.cjs`. Run with `node .agents/<script>.cjs`.
- Scratchpad for screenshots: `C:/Users/asus/AppData/Local/Temp/claude/C--Users-asus-Desktop-lab-alpha/81c5cb80-1f98-4a79-9ab6-0bd76fe0c00c/scratchpad`

## What to check (the animations must be SMOOTH — this is the priority)
1. Hero: canvas animation loops, no Pause/Replay buttons, and it MUST stop when scrolled off-screen (parent posts `as-pause`/`as-play` to the iframe; iframe halts its rAF). Confirm the canvas stops redrawing when the hero is out of view.
2. Sketch scene (`.sketch`, `.flowcard`): flowing warm gradient behind the sketch; the two sketches crossfade; no scroll jank (the scroll handler is rAF-throttled). Gradient animation should pause when off-screen (`.flowcard.live`).
3. `.shiftcard`: pinned grey card, black "Make the shift." + a BLACK CIRCULAR period (`.pdot`) that grows (`.expander`) and wipes the screen to black, handing into the dark horizontal act. No misaligned pin, no persistent black overlay after the section.
4. `.mts` horizontal act: ghost words slide; readable line sits BELOW the strip; orange progress bar.
5. Nav inverts to white over dark sections; no layout shift when the 9MB iframe loads (ScrollTrigger.refresh is wired on load/resize).

## Rules
- Fix bugs in `src/pages/v5.astro` and `src/styles/global.css` (v5-scoped only) and the hero animation copy `public/sketches/Thoughts-Animation-hero.html` if needed. NEVER touch `src/pages/index.astro`.
- Keep the design: warm paper, ink, ORANGE as the only UI accent (pastels only inside sketches). Copy is verbatim from `src/data/*.ts` — do not reword.
- After fixing, re-run build + screenshots to confirm. Report a concise list of bugs found and fixes applied.

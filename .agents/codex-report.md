Implemented the v5 polish pass without touching `src/pages/index.astro`.

- Design system: Fonts, weights, type scale, spacing, and radii are consistent overall. Noted minor off-token neutral surfaces (`#fff` and custom shift-card greys); preserved them as intentional section treatments.
- Font fixes: None required. Browser verification confirmed Geist, Instrument Serif italic, and Geist Mono all load successfully without fallback.
- Fade/float reveals: Hero copy, sketch, shiftcard, about, how-we-work, meet-Chetan columns, closing, and footer. Updated to 20px / 0.55s ease-out with reduced-motion support.
- Text animations: Word reveals added to the hero H1, about heading, how-we-work heading, and closing heading.
- `.mts` remains untouched.
- `npm run build` passes.
- Fresh-build screenshots verified the affected sections, pinned scenes, navigation inversion, closing, and footer.
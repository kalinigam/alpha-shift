#!/usr/bin/env bash
set -e
REPO=kalinigam/alpha-shift

gh label create client-feedback --repo "$REPO" --color F59E0B --description "From client design review" 2>/dev/null || true
gh label create design --repo "$REPO" --color A855F7 --description "Visual/design work" 2>/dev/null || true
gh label create copy --repo "$REPO" --color 0EA5E9 --description "Copy / content" 2>/dev/null || true

mk() { gh issue create --repo "$REPO" --label "$1" --title "$2" --body "$3"; }

mk "client-feedback,enhancement" \
"Spheres should appear AFTER the hero animation completes (not at load)" \
"Client feedback #1: the 4 travelling spheres are already present when the hero loads; they should appear only AFTER the hero canvas animation finishes sorting into its cluster, then begin the scroll journey.

Currently the \`.balls\` overlay sits below the sorted stack from load (held until first scroll). Change: keep the overlay hidden until the hero animation's sort completes (~10-13s in \`public/sketches/Thoughts-Animation-hero.html\`; balls release ~2-5s), then fade the 4 spheres in below the cluster and let them travel on scroll.

Files: \`src/pages/v5.astro\` (the \`.balls\` overlay + travelling-balls IIFE; hero stop opacity/intro timing).

Done when: on load the hero shows the animation without the 4 overlay spheres; they fade in below the sorted cluster after it forms, then travel on scroll."

mk "client-feedback,copy" \
"Restore 2 missing hero lede lines" \
"Client feedback #3: after '...something needs to move.' the RHS lede should continue: 'You don't necessarily know what it is. And that's okay.' These are missing from the rendered hero.

The text already exists in \`src/data/home.ts\` as \`accentHtml\` (~line 53, with orange emphasis on 'And that's okay.') but is not part of \`hero.ledeHtml\` (~line 35). Append it, preserving the \`<span class=\"o\">\` orange emphasis. Verify against \`Copy/verbatim_copy.txt\`.

Files: \`src/data/home.ts\` (hero.ledeHtml); render at \`src/pages/v5.astro\` hero \`.lede\`.

Done when: the hero RHS shows the full lede including the 2 lines, matching the source copy."

mk "client-feedback,bug" \
"Sketchnotes show a white box on tablet (check mobile) - integrate with background" \
"Client feedback #5: the sketchnotes appear on a separate white box on iPad/tablet. Desktop is fine (mix-blend-mode: multiply blends into the paper). It's a responsive/breakpoint issue.

Investigate the tablet (and mobile) breakpoints of the sketch scene where the multiply blend or a container background breaks and the white JPEG shows. Integrate the sketchnote into the paper background at all widths.

Files: \`src/pages/v5.astro\` \`.sk\` / \`.art\` / \`.card img\` (mix-blend-mode + the responsive @media blocks); sketchnote JPEGs in \`public/sketches/\`.

Done when: sketchnotes blend into the background (no white box) on desktop, tablet, and mobile."

mk "client-feedback,copy" \
"Fix sketchnote <-> copy pairing" \
"Client feedback #6 & #7: in the sketch scene the copy shown is all for sketchnote 1; the copy 'Maybe it starts with a better question ... and that's where the shift begins' (currently on the Make-the-shift card) actually belongs to sketchnote 2.

Re-map so each sketchnote shows its correct copy per \`Copy/verbatim_copy.txt\`, and free the Make-the-shift card of the borrowed copy.

Files: \`src/pages/v5.astro\` sketch beats (\`[data-beat1]\`/\`[data-beat2]\`) + shiftcard sub; \`src/data/home.ts\` (look / shift.row). Cross-check \`Copy/verbatim_copy.txt\`.

Done when: sketchnote 1 and 2 each show their own source copy; the shift card copy is correct per source."

mk "client-feedback,design" \
"Recolor 'Make the shift' card to Slate + add --card token" \
"Client feedback: the card was the same grey (#D2CCC0) as the horizontal-section transition. Agreed replacement: Slate.

Set \`.shiftcard .card\` background to \`radial-gradient(130% 130% at 72% 24%, #DDDEDD 0%, #C7C9C8 82%)\`. Add a \`--card\` token in \`:root\` and reference it. (Note: issue #9 removes the horizontal color change, so the clash is independently resolved, but the client wanted a distinct, cleaner grey.)

Files: \`src/pages/v5.astro:278\` (.shiftcard .card); \`src/styles/global.css\` (:root).

Done when: the card is a neutral Slate grey; black heading/period + orange serif emphasis stay legible."

mk "client-feedback,design" \
"Make the shift: speed up the period wipe + try charcoal vs black" \
"Client feedback #8: the growing-period treatment is lovely but too slow - speed it up noticeably. Also try charcoal / dark grey instead of pure black for the period + 'Make the shift' heading, and compare.

Files: \`src/pages/v5.astro\` shiftcard period-wipe (\`[data-wipe]\` timeline / \`--wr\` clip-path animation) and \`.line\` / \`.pdot\` color.

Done when: the period wipe reads quick (not sluggish); a charcoal/dark-grey option is prepared to compare against black."

mk "client-feedback,design" \
"Remove the color change in the horizontal section (keep it black)" \
"Client feedback #9: the black->cream/grey transition isn't seamless, they didn't like the cream, and they question the color change. Decision: remove the color change entirely - the \`.mts\` horizontal section stays black start to finish.

Remove the black->grey interpolation (the \`--mtsbg\` tween). Keep the spotlight-word behaviour.

Files: \`src/pages/v5.astro\` mts scroll handler (\`black\`/\`grey\` arrays ~L604, \`--mtsbg\` set ~L637-640) and \`.mts\` background (~L301).

Done when: the horizontal section is solid black throughout; no grey/cream shift; word spotlight unchanged."

mk "client-feedback,design" \
"Rework the 'How we work' list treatment" \
"Client feedback #10: the numbered list feels flat ('creative juices stopped flowing'). They like the orbiting spheres + LHS text, and we need the booking CTA.

Give the 4 items a more creative/considered treatment (pull references via the inspo MCP first, per project convention). Keep the 'Let's explore' booking CTA, the sphere orbit, and the sticky LHS heading.

Files: \`src/pages/v5.astro\` \`.hww\` (\`.items .item\`, \`.no\`, \`.side\`).

Done when: the list has a distinctive treatment that fits the design system; CTA + orbit + LHS retained."

mk "client-feedback,enhancement" \
"Source & add Chetan's portrait" \
"Client feedback #11: keep the Meet-Chetan portrait (currently a 'Portrait - to come' placeholder). A real founder photo is needed.

Add Chetan's photo when available and render it in place of the placeholder; keep the section.

Files: \`src/pages/v5.astro\` \`.chetan2 .portrait\`; asset into \`public/\`.

Done when: a real portrait renders instead of the placeholder."

echo "ALL ISSUES CREATED"

const fs = require('fs');
const SCRATCH = 'C:/Users/asus/AppData/Local/Temp/claude/C--Users-asus-Desktop-lab-alpha/81c5cb80-1f98-4a79-9ab6-0bd76fe0c00c/scratchpad';
const b64 = (f) => 'data:image/png;base64,' + fs.readFileSync(`${SCRATCH}/${f}`).toString('base64');

const sections = [
  {
    n: '01', name: 'Hero', status: 'ok', statusLabel: 'Done',
    imgs: [{ src: b64('hf-t9s.png'), cap: 'The 4 balls (orange/yellow/sage/lavender) now sit in a clean row BELOW the sorted stack — distinct from the animation’s own balls. Held here until you scroll.' }],
    now: 'Balls rest below the grouped stack, held until the first scroll.',
    plan: 'Done per your note. On first scroll they set off toward the sketch.',
    decide: null,
  },
  {
    n: '02', name: 'Sketch', status: 'ok', statusLabel: 'Done',
    imgs: [{ src: b64('o-sketch.png'), cap: 'Row below the text area (left column).' }],
    now: 'Balls sit below the text area, hold a beat, then move on.',
    plan: 'Done — moved from the top to below the text as you asked.',
    decide: null,
  },
  {
    n: '03', name: 'Make the shift', status: 'ok', statusLabel: 'Keep',
    imgs: [{ src: b64('o-shift.png'), cap: 'Resting along the bottom edge of the grey card.' }],
    now: 'Balls settle at the bottom of the card, beat, then fade out into the run.',
    plan: 'Unchanged.',
    decide: null,
  },
  {
    n: '04', name: 'Horizontal run', status: 'ok', statusLabel: 'Keep',
    imgs: [{ src: b64('o-run.png'), cap: 'Nothing — balls fully hidden through the whole act.' }],
    now: 'Invisible for the entire horizontal section.',
    plan: 'Unchanged.',
    decide: null,
  },
  {
    n: '05', name: 'About', status: 'ok', statusLabel: 'Fixed',
    imgs: [{ src: b64('o-about.png'), cap: 'Row below the text — now dead-still.' }],
    now: 'Balls emerge below the text and hold still (the jiggle bug is gone).',
    plan: 'Fixed — removed the early drift.',
    decide: null,
  },
  {
    n: '06', name: 'How we work', status: 'decide', statusLabel: 'Your call',
    imgs: [{ src: b64('o-hww.png'), cap: 'Orbits the box top/left/right; hidden across the bottom. Box is taller than the screen, so it still reads a little sparse.' }],
    now: 'Kept the top/left/right orbit (bottom hidden).',
    plan: 'Left as-is for now.',
    decide: 'Still open from before: speed the orbit up a lot, cap it to the visible part of the box, or leave it? You didn’t answer this one.',
  },
  {
    n: '07', name: 'Meet Chetan', status: 'ok', statusLabel: 'Done',
    imgs: [{ src: b64('o-chetan.png'), cap: 'Row below the portrait image, clear of the CTA.' }],
    now: 'Balls settle in a row below the image.',
    plan: 'Done per your note (below the image).',
    decide: null,
  },
  {
    n: '08', name: 'Closing', status: 'ok', statusLabel: 'Done',
    imgs: [{ src: b64('o-closing.png'), cap: 'The 4 balls form a ring below the CTAs and spin continuously — a thinking / buffering loop. (Rotation shows in motion.)' }],
    now: 'Balls circle like a buffering spinner below the buttons.',
    plan: 'Done per your note (circle / buffering).',
    decide: null,
  },
  {
    n: '09', name: 'Footer', status: 'ok', statusLabel: 'Done',
    imgs: [{ src: b64('o-footer.png'), cap: 'Balls come to rest in a row at the bottom of the screen.' }],
    now: 'Balls settle at the bottom of the footer.',
    plan: 'Done per your note (bottom of the screen).',
    decide: null,
  },
];

const chip = (s) => {
  const map = { ok: ['Keep', 'ok'], fix: ['Fix', 'fix'], decide: ['Decide', 'decide'], change: ['Rework', 'change'] };
  return `<span class="chip chip--${s}">${map[s][0]}</span>`;
};

const card = (s) => `
  <article class="card" id="s${s.n}">
    <header class="card__head">
      <span class="num">${s.n}</span>
      <h2>${s.name}</h2>
      ${chip(s.status)}
    </header>
    ${s.imgs.length ? `<div class="shots">${s.imgs.map(im => `
      <figure><div class="shot"><img src="${im.src}" alt="${s.name} placement" loading="lazy"></div><figcaption>${im.cap}</figcaption></figure>`).join('')}</div>` : ''}
    <dl class="notes">
      <div><dt>Now</dt><dd>${s.now}</dd></div>
      <div><dt>Plan</dt><dd>${s.plan}</dd></div>
      ${s.decide ? `<div class="decide"><dt>Decide</dt><dd>${s.decide}</dd></div>` : ''}
    </dl>
  </article>`;

const html = `
<style>
  :root{
    --paper:#F7F5F0; --ink:#141311; --muted:#6F6A60; --line:#E5E2DB; --panel:#FFFFFF;
    --orange:#E8551A; --ok:#3F7D53; --amber:#B8791A;
    --sans:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
    --mono:ui-monospace,'SF Mono','Cascadia Mono','Roboto Mono',monospace;
  }
  @media (prefers-color-scheme: dark){
    :root{ --paper:#151412; --ink:#F2EFE9; --muted:#A29C90; --line:#2C2A26; --panel:#1E1C19;
      --orange:#FF6A2C; --ok:#6FB585; --amber:#D69B3E; }
  }
  :root[data-theme="light"]{ --paper:#F7F5F0; --ink:#141311; --muted:#6F6A60; --line:#E5E2DB; --panel:#FFFFFF; --orange:#E8551A; --ok:#3F7D53; --amber:#B8791A; }
  :root[data-theme="dark"]{ --paper:#151412; --ink:#F2EFE9; --muted:#A29C90; --line:#2C2A26; --panel:#1E1C19; --orange:#FF6A2C; --ok:#6FB585; --amber:#D69B3E; }

  *{box-sizing:border-box}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.55;
    -webkit-font-smoothing:antialiased}
  .wrap{max-width:940px;margin:0 auto;padding:clamp(28px,5vw,64px) clamp(18px,4vw,40px)}

  .lead{border-bottom:1px solid var(--line);padding-bottom:28px;margin-bottom:40px}
  .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange);margin:0 0 14px;display:flex;align-items:center;gap:8px}
  .eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--orange)}
  h1{font-size:clamp(1.9rem,4.4vw,2.9rem);line-height:1.05;letter-spacing:-.025em;margin:0 0 16px;text-wrap:balance;font-weight:650}
  .lead p{color:var(--muted);max-width:64ch;margin:0;font-size:1.05rem}
  .lead .legend{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:22px;font-family:var(--mono);font-size:12px;color:var(--muted)}
  .lead .legend span{display:inline-flex;align-items:center;gap:7px}
  .dot{width:9px;height:9px;border-radius:50%;display:inline-block}

  .cards{display:flex;flex-direction:column;gap:clamp(20px,3.4vw,34px)}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:clamp(18px,2.6vw,28px);
    scroll-margin-top:20px}
  .card__head{display:flex;align-items:center;gap:14px;margin-bottom:18px}
  .num{font-family:var(--mono);font-size:13px;color:var(--muted);letter-spacing:.05em}
  .card__head h2{font-size:1.3rem;margin:0;letter-spacing:-.02em;flex:1;font-weight:620}
  .chip{font-family:var(--mono);font-size:11px;letter-spacing:.09em;text-transform:uppercase;
    padding:4px 10px;border-radius:999px;border:1px solid currentColor;white-space:nowrap}
  .chip--ok{color:var(--ok)} .chip--fix{color:var(--amber)}
  .chip--decide{color:var(--orange)} .chip--change{color:var(--orange);background:color-mix(in srgb,var(--orange) 12%,transparent)}

  .shots{display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:20px}
  @media(min-width:720px){ .shots:has(figure + figure){grid-template-columns:1fr 1fr} }
  figure{margin:0}
  .shot{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper);overflow-x:auto}
  .shot img{display:block;width:100%;height:auto}
  figcaption{font-size:.86rem;color:var(--muted);margin-top:8px;line-height:1.45}

  .notes{display:flex;flex-direction:column;gap:12px;margin:0}
  .notes > div{display:grid;grid-template-columns:64px 1fr;gap:14px;align-items:baseline}
  @media(max-width:520px){ .notes > div{grid-template-columns:1fr;gap:3px} }
  dt{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:0}
  dd{margin:0;font-size:.98rem}
  .decide dt{color:var(--orange)}
  .decide dd{color:var(--ink);font-weight:500}

  .foot{margin-top:44px;padding-top:24px;border-top:1px solid var(--line);color:var(--muted);font-size:.94rem}
  .foot strong{color:var(--ink)}
</style>

<div class="wrap">
  <div class="lead">
    <p class="eyebrow">Alpha Shift · ball animation</p>
    <h1>Where every ball sits now — built to your notes</h1>
    <p>Your placements are all in: hero below the stack, sketch below the text, Chetan below the image, closing as a buffering spin, footer at the bottom. Beats added at every stop, the About jiggle is fixed, and the trajectory between stops is gentler. Scroll <strong>localhost:4321/v5/</strong> to feel the motion (spinner + beats don’t show in stills). One thing still needs your call — the <strong>How we work</strong> row.</p>
    <div class="legend">
      <span><i class="dot" style="background:var(--ok)"></i> Done / in place</span>
      <span><i class="dot" style="background:var(--orange)"></i> Needs your call</span>
    </div>
  </div>

  <div class="cards">
    ${sections.map(card).join('')}
  </div>

  <p class="foot">All nine stops are placed per your directions. Open item: <strong>How we work</strong> — the orbit still reads sparse because the box is taller than the screen; tell me whether to speed it up, cap it to the visible area, or leave it.</p>
</div>
`;

fs.writeFileSync(`${SCRATCH}/ball-plan.html`, html);
console.log('wrote ball-plan.html', (html.length / 1024 / 1024).toFixed(2) + 'MB');

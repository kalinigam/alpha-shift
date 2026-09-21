const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
  const p = await b.newPage();
  const URL = process.argv[3] || 'http://localhost:4321/alpha-shift/v5/';
  await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', (e) => errs.push('PAGEERROR: ' + e.message));
  await p.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));
  // report which key selectors resolve + hero copy visibility
  const info = await p.evaluate(() => {
    const sel = ['.hero-a', '[data-sketch]', '[data-shiftcard]', '[data-mts]', '.aboutcard', '.hww .box', '.chetan2', '.closing2', 'footer'];
    const missing = sel.filter((s) => !document.querySelector(s));
    const grid = document.querySelector('.hero-a .grid');
    const words = document.querySelectorAll('.hero-a h1 .text-word').length;
    return { missing, heroGridOpacity: grid ? getComputedStyle(grid).opacity : 'no-grid', heroWords: words };
  });
  console.log('missing selectors:', JSON.stringify(info.missing));
  console.log('hero grid opacity:', info.heroGridOpacity, '| hero h1 words:', info.heroWords);
  console.log('console errors:', errs.length ? JSON.stringify(errs.slice(0, 5)) : 'none');
  const shots = { hero: 0, about: null, closing: null, sketch: null };
  const ys = await p.evaluate(() => {
    const c = (s, f) => { const el = document.querySelector(s); if (!el) return null; const r = el.getBoundingClientRect(); return Math.round(r.top + scrollY + r.height * f - innerHeight / 2); };
    return { hero: 0, sketch: c('[data-sketch]', 0.28), about: c('.aboutcard', 0.5), closing: c('.closing2', 0.5) };
  });
  for (const [name, y] of Object.entries(ys)) {
    if (y === null) continue;
    await p.evaluate((v) => scrollTo(0, v), Math.max(0, y));
    await new Promise(r => setTimeout(r, 900));
    await p.screenshot({ path: `${OUT}-${name}.png` });
  }
  await b.close();
})();

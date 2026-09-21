const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2] || 'balls';
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await p.goto('http://localhost:4321/v5/', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));
  const secs = await p.evaluate(() => {
    const q = s => document.querySelector(s);
    const at = (el, f) => { const r = el.getBoundingClientRect(); return Math.round(r.top + window.scrollY + r.height * f - window.innerHeight / 2); };
    return {
      hero: at(q('.hero-a'), 0.72), sketch: at(q('[data-sketch]'), 0.5), shift: at(q('[data-shiftcard]'), 0.5),
      run: at(q('[data-mts]'), 0.5), about: at(q('.aboutcard'), 0.5), hww: at(q('.hww .box'), 0.5),
      chetan: at(q('.chetan2'), 0.5), closing: at(q('.closing2'), 0.5), footer: at(q('footer'), 0.5),
    };
  });
  for (const [name, y] of Object.entries(secs)) {
    await p.evaluate(v => window.scrollTo(0, v), Math.max(0, y));
    await new Promise(r => setTimeout(r, 700));
    await p.screenshot({ path: `${OUT}-${name}.png` });
  }
  console.log('done', JSON.stringify(secs));
  await b.close();
})();

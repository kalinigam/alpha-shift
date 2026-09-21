const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 760, deviceScaleFactor: 1 });
  await p.goto('http://localhost:4321/v5/', { waitUntil: 'networkidle0', timeout: 60000 });
  // stay at top; sample the hero animation across its cycle
  const start = Date.now();
  for (const s of [1, 3, 5, 7, 9, 11, 13, 15]) {
    while (Date.now() - start < s * 1000) { await new Promise(r => setTimeout(r, 50)); }
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.screenshot({ path: `${process.argv[2]}-t${s}s.png` });
  }
  await b.close(); console.log('ok');
})();

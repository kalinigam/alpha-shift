const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await p.goto('http://localhost:4321/v5/', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));
  for (const y of [820, 2900]) {
    await p.evaluate(v => window.scrollTo(0, v), y);
    await new Promise(r => setTimeout(r, 600));
    await p.screenshot({ path: `${process.argv[2]}-mid${y}.png` });
  }
  await b.close(); console.log('ok');
})();

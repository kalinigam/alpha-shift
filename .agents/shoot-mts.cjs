const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r=>setTimeout(r,3000));
  const info = await page.evaluate(() => {
    const el = document.querySelector('.mts');
    const r = el.getBoundingClientRect();
    return { top: r.top + window.scrollY, height: el.offsetHeight, vh: window.innerHeight };
  });
  const usable = info.height - info.vh; // scroll span where it's pinned
  const points = [0.05, 0.28, 0.5, 0.72, 0.95];
  for (let i=0;i<points.length;i++){
    const y = Math.round(info.top + usable*points[i]);
    await page.evaluate(v=>window.scrollTo(0,v), y);
    await new Promise(r=>setTimeout(r,500));
    await page.screenshot({ path: `${OUT}-${i}.png` });
  }
  console.log('mts top', Math.round(info.top), 'span', Math.round(usable));
  await browser.close();
})();

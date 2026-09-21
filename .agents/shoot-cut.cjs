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
    const el = document.querySelector('.shiftcut');
    const r = el.getBoundingClientRect();
    return { top: r.top + window.scrollY, height: el.offsetHeight, vh: window.innerHeight };
  });
  const usable = info.height - info.vh;
  const points = [0.06, 0.22, 0.45, 0.66, 0.82, 0.97];
  for (let i=0;i<points.length;i++){
    const y = Math.round(info.top + usable*points[i]);
    await page.evaluate(v=>window.scrollTo(0,v), y);
    await new Promise(r=>setTimeout(r,450));
    await page.screenshot({ path: `${OUT}-${i}_p${Math.round(points[i]*100)}.png` });
  }
  console.log('shiftcut top', Math.round(info.top), 'span', Math.round(usable));
  await browser.close();
})();

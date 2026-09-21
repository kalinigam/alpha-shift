const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args:['--no-sandbox','--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width:1440, height:900, deviceScaleFactor:1 });
  await p.goto('http://localhost:4321/v5/', { waitUntil:'networkidle0', timeout:60000 });
  await new Promise(r=>setTimeout(r,3000));
  const info = await p.evaluate(() => {
    const el = document.querySelector('.shiftcard');
    const r = el.getBoundingClientRect();
    return { top: r.top + window.scrollY, height: el.offsetHeight, vh: window.innerHeight };
  });
  const usable = info.height - info.vh;
  const points = [0.1, 0.4, 0.62, 0.78, 0.95];
  for (let i=0;i<points.length;i++){
    await p.evaluate(v=>window.scrollTo(0,v), Math.round(info.top + usable*points[i]));
    await new Promise(r=>setTimeout(r,450));
    await p.screenshot({ path: `${OUT}-${i}_p${Math.round(points[i]*100)}.png` });
  }
  console.log('shiftcard top', Math.round(info.top), 'height', info.height);
  await b.close();
})();

const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args:['--no-sandbox','--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width:1440, height:900, deviceScaleFactor:1 });
  await p.goto('http://localhost:4321/v5/', { waitUntil:'networkidle0', timeout:60000 });
  await new Promise(r=>setTimeout(r,4000));
  await p.screenshot({ path: OUT+'-top.png' });
  console.log('done');
  await b.close();
})();

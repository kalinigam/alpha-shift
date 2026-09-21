const puppeteer = require('puppeteer-core');
const path = require('path');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
const FILE = process.argv[3] || ('file:///' + path.resolve('dist/index.html').replace(/\\/g,'/'));
(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(FILE, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r=>setTimeout(r,3000)); // let preloader clear + ScrollTrigger init
  const H = await page.evaluate(()=>document.body.scrollHeight);
  const VH = 900;
  const steps = Math.min(20, Math.ceil(H/(VH*0.85)));
  for(let i=0;i<steps;i++){
    await page.evaluate(y=>window.scrollTo(0,y), Math.round(i*VH*0.85));
    await new Promise(r=>setTimeout(r,600));
    await page.screenshot({ path: `${OUT}-${String(i).padStart(2,'0')}.png` });
  }
  console.log('docHeight', H, 'shots', steps);
  await browser.close();
})();

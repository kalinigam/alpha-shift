const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = 'https://kalinigam.github.io/alpha-shift-home/';
const OUT = process.argv[2];
const START = parseInt(process.argv[3]||'3600',10);
const END = parseInt(process.argv[4]||'9000',10);
const STEP = parseInt(process.argv[5]||'350',10);
(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r=>setTimeout(r,2000));
  let i=0;
  for(let y=START;y<=END;y+=STEP,i++){
    await page.evaluate(v=>window.scrollTo(0,v), y);
    await new Promise(r=>setTimeout(r,500));
    await page.screenshot({ path: `${OUT}-${String(i).padStart(2,'0')}_y${y}.png` });
  }
  console.log('done', i, 'frames', START, '->', END);
  await browser.close();
})();

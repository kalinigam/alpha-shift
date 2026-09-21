const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args:['--no-sandbox','--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width:1440, height:900, deviceScaleFactor:1 });
  await p.goto('http://localhost:4321/sketch-variants/', { waitUntil:'networkidle0', timeout:60000 });
  await new Promise(r=>setTimeout(r,2500));
  const opts = await p.$$('.opt');
  for (let i=0;i<opts.length;i++){
    await opts[i].scrollIntoView();
    await new Promise(r=>setTimeout(r,900));
    await opts[i].screenshot({ path: `${OUT}-opt${i+1}.png` });
  }
  console.log('captured', opts.length, 'options');
  await b.close();
})();

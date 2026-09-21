const puppeteer = require('puppeteer-core');
const path = require('path');
const OUT = process.argv[2] || 'shot';
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const FILE = 'file:///' + path.resolve('homepage.html').replace(/\\/g,'/');

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(FILE, { waitUntil: 'networkidle0' });
  // reveal everything, finish typing, flatten horizontal act for a static capture
  await page.addStyleTag({ content: `
    .rise,.stagger>*,.worklist .wrow,[data-reveal]{opacity:1!important;transform:none!important}
    .print img,.ncard,.b2,.b4{opacity:1!important}
    .b2,.b4{transform:translateY(30px)!important}
    .hscroll{height:auto!important}
    .hscroll .pin{position:static!important;height:auto!important;display:block!important;padding:90px 0!important}
    .hscroll .htrack{flex-direction:column!important;transform:none!important;height:auto!important;gap:70px!important}
    .hscroll .hpanel{flex:none!important;height:auto!important;min-height:auto!important;padding:40px 8vw!important}
    .hscroll .hint{display:none!important}
    .caret{display:none!important}
    .spheres b{animation:none!important}
  `});
  await page.evaluate(() => {
    document.querySelectorAll('[data-reveal]').forEach(e=>e.classList.add('in'));
    document.querySelectorAll('img').forEach(i=>{ i.loading='eager'; i.src=i.src; });
    const at = document.getElementById('asktext');
    if (at) at.innerHTML = 'Something on your <span class="serif">mind</span>?';
    window.scrollTo(0,0);
  });
  await page.evaluate(async () => {
    await Promise.all(Array.from(document.images).map(img => img.complete ? 1 : new Promise(r=>{img.onload=img.onerror=r;})));
  });
  await new Promise(r=>setTimeout(r,500));
  await page.screenshot({ path: `${OUT}.png`, fullPage: true });
  for (const sel of ['.stage','.work','.chetan']) {
    const el = await page.$(sel);
    if (el) { await el.screenshot({ path: `${OUT}-${sel.replace(/\W/g,'')}.png` }); }
  }
  const h = await page.evaluate(()=>document.body.scrollHeight);
  console.log('captured', `${OUT}.png`, 'height', h);
  await browser.close();
})();

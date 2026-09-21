const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = 'https://kalinigam.github.io/alpha-shift-home/';
const OUT = process.argv[2];
(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r=>setTimeout(r,1500));

  const info = await page.evaluate(() => {
    const libs = { gsap: !!window.gsap, ScrollTrigger: !!(window.ScrollTrigger || (window.gsap && window.gsap.plugins)), lenis: !!(window.Lenis||window.lenis) };
    // section outline
    const out = [];
    document.querySelectorAll('body *').forEach(el=>{
      const tag = el.tagName.toLowerCase();
      if(['section','header','footer','main','article'].includes(tag) || (el.className && typeof el.className==='string' && /section|panel|hero|block|act|scene|pin|card/i.test(el.className))){
        const rect = el.getBoundingClientRect();
        out.push({tag, cls: (el.className||'').toString().slice(0,80), h: Math.round(el.offsetHeight), txt: (el.innerText||'').replace(/\s+/g,' ').slice(0,90)});
      }
    });
    return {libs, docHeight: document.body.scrollHeight, count: out.length, out: out.slice(0,60)};
  });
  require('fs').writeFileSync(OUT+'-outline.json', JSON.stringify(info,null,1));

  const H = info.docHeight, VH = 900;
  const steps = Math.min(14, Math.ceil(H/VH));
  for(let i=0;i<steps;i++){
    await page.evaluate(y=>window.scrollTo(0,y), i*VH);
    await new Promise(r=>setTimeout(r,700));
    await page.screenshot({ path: `${OUT}-${String(i).padStart(2,'0')}.png` });
  }
  console.log('libs', JSON.stringify(info.libs), 'docHeight', H, 'sections', info.count, 'shots', steps);
  await browser.close();
})();

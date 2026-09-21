const puppeteer = require('puppeteer-core');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
(async () => {
  const b = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args:['--no-sandbox','--hide-scrollbars'] });
  const p = await b.newPage();
  await p.setViewport({ width:1440, height:900, deviceScaleFactor:1 });
  await p.goto('http://localhost:4321/v5/', { waitUntil:'networkidle0', timeout:60000 });
  await new Promise(r=>setTimeout(r,3000));
  async function probe(label){
    const f = p.frames().find(fr => fr.url().includes('Thoughts-Animation'));
    if(!f){ console.log(label,'NO IFRAME'); return; }
    const info = await f.evaluate(()=>{
      const canvas=document.querySelector('#scene');
      const controls=document.querySelector('.controls');
      const pause=document.querySelector('#pause');
      return {
        canvasDisplay: canvas?getComputedStyle(canvas).display:'none',
        controlsDisplay: controls?getComputedStyle(controls).display:'gone',
        pauseText: pause?pause.textContent:'',
      };
    });
    console.log(label, JSON.stringify(info));
  }
  await probe('t=3s');
  await p.screenshot({ path: OUT+'-a.png' });
  // sample a canvas pixel hash to detect motion
  async function frameHash(){
    const f = p.frames().find(fr => fr.url().includes('Thoughts-Animation'));
    return await f.evaluate(()=>{ const c=document.querySelector('#scene'); const x=c.getContext('2d'); const d=x.getImageData(0,0,60,60).data; let s=0; for(let i=0;i<d.length;i+=97)s+=d[i]; return s; });
  }
  const h1=await frameHash(); await new Promise(r=>setTimeout(r,1500)); const h2=await frameHash();
  console.log('motion?', h1!==h2, h1, h2);
  await b.close();
})();

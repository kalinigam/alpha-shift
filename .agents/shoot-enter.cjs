const puppeteer=require('puppeteer-core');
const EDGE='C:'+String.fromCharCode(92)+'Program Files (x86)'+String.fromCharCode(92)+'Microsoft'+String.fromCharCode(92)+'Edge'+String.fromCharCode(92)+'Application'+String.fromCharCode(92)+'msedge.exe';
const OUT=process.argv[2];
(async()=>{const b=await puppeteer.launch({executablePath:EDGE,headless:'new',args:['--no-sandbox','--hide-scrollbars']});
const p=await b.newPage();await p.setViewport({width:1440,height:900});
await p.goto('http://localhost:4321/v5/',{waitUntil:'networkidle0'});await new Promise(r=>setTimeout(r,3000));
const info=await p.evaluate(()=>{const el=document.querySelector('[data-mts]');const r=el.getBoundingClientRect();return{top:r.top+window.scrollY,height:el.offsetHeight,vh:window.innerHeight};});
const usable=info.height-info.vh;
const pts=[['approach',info.top-250],['pin-start',info.top+2],['beat1',Math.round(info.top+usable*0.05)]];
for(const [n,y] of pts){await p.evaluate(v=>window.scrollTo(0,v),y);await new Promise(r=>setTimeout(r,500));await p.screenshot({path:OUT+'-'+n+'.png'});}
console.log('ok');await b.close();})();

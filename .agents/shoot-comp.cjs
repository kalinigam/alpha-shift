const puppeteer=require('puppeteer-core');
const EDGE='C:'+String.fromCharCode(92)+'Program Files (x86)'+String.fromCharCode(92)+'Microsoft'+String.fromCharCode(92)+'Edge'+String.fromCharCode(92)+'Application'+String.fromCharCode(92)+'msedge.exe';
const OUT=process.argv[2];
(async()=>{const b=await puppeteer.launch({executablePath:EDGE,headless:'new',args:['--no-sandbox','--hide-scrollbars']});
const p=await b.newPage();await p.setViewport({width:1440,height:900});
await p.goto('http://localhost:4321/v5/',{waitUntil:'networkidle0'});await new Promise(r=>setTimeout(r,3000));
const max=await p.evaluate(()=>document.documentElement.scrollHeight-window.innerHeight);
for(const [n,f] of [['a',0.12],['b',0.5],['c',0.86]]){
  await p.evaluate(y=>window.scrollTo(0,y),Math.round(max*f));
  await new Promise(r=>setTimeout(r,500));
  await p.screenshot({path:OUT+'-'+n+'.png'});
}
console.log('ok');await b.close();})();

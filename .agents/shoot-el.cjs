const puppeteer=require('puppeteer-core');
const EDGE='C:'+String.fromCharCode(92)+'Program Files (x86)'+String.fromCharCode(92)+'Microsoft'+String.fromCharCode(92)+'Edge'+String.fromCharCode(92)+'Application'+String.fromCharCode(92)+'msedge.exe';
const SEL=process.argv[2],OUT=process.argv[3];
(async()=>{const b=await puppeteer.launch({executablePath:EDGE,headless:'new',args:['--no-sandbox','--hide-scrollbars']});
const p=await b.newPage();await p.setViewport({width:1440,height:900});
await p.goto('http://localhost:4321/v5/',{waitUntil:'networkidle0'});await new Promise(r=>setTimeout(r,2500));
const el=await p.$(SEL);await el.scrollIntoView();await new Promise(r=>setTimeout(r,700));
await el.screenshot({path:OUT});console.log('ok');await b.close();})();

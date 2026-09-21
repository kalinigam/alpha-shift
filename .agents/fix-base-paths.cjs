const fs = require('fs');
const files = [
  'src/layouts/Base.astro',
  'src/layouts/Internal.astro',
  'src/pages/index.astro',
  'src/pages/meet-chetan.astro',
  'src/pages/programmes.astro',
  'src/pages/sketch-variants.astro',
  'src/pages/think.astro',
  'src/pages/v5.astro',
];
// (src|href)="/path"  ->  (src|href)={`${import.meta.env.BASE_URL}path`}
// skips fragments (#...), /_astro/ (Astro handles those), and already-expression attrs.
const re = /\b(src|href)="\/(?!_astro\/)([^"#][^"]*)"/g;
let total = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  let n = 0;
  s = s.replace(re, (m, attr, path) => { n++; return `${attr}={\`\${import.meta.env.BASE_URL}${path}\`}`; });
  if (n) { fs.writeFileSync(f, s); total += n; console.log(`${f}: ${n}`); }
}
console.log('total rewritten:', total);

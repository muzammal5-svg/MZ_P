const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

function getPages(dir) {
  let pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      pages = pages.concat(getPages(fullPath));
    } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
      pages.push(fullPath);
    }
  }
  return pages;
}

const pages = getPages(APP_DIR);
console.log(`Auditing ${pages.length} pages for H1 tags...`);

for (const p of pages) {
  const rel = path.relative(APP_DIR, p);
  const content = fs.readFileSync(p, 'utf8');
  // Match <h1 or <motion.h1
  const h1Matches = content.match(/<(?:motion\.)?h1[\s>]/g) || [];
  console.log(`[${rel}]: ${h1Matches.length} H1 tag(s)`);
}

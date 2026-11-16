const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT_DIR, 'app');

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

function countH1InContent(content) {
  const matches = content.match(/<(?:motion\.)?h1[\s>]/g) || [];
  return matches.length;
}

const pages = getPages(APP_DIR);
console.log(`Auditing ${pages.length} pages for H1 tags...`);

for (const p of pages) {
  const rel = path.relative(APP_DIR, p);
  let content = fs.readFileSync(p, 'utf8');
  let count = countH1InContent(content);

  // If 0, check referenced component imports
  if (count === 0) {
    if (content.includes('ServiceDetailView')) {
      const compContent = fs.readFileSync(path.join(ROOT_DIR, 'components', 'service-detail-view.tsx'), 'utf8');
      count += countH1InContent(compContent);
    }
    if (content.includes('MZwebSolutionsHero')) {
      const compContent = fs.readFileSync(path.join(ROOT_DIR, 'components', 'rsweblabs-hero.tsx'), 'utf8');
      count += countH1InContent(compContent);
    }
  }

  console.log(`[${rel}]: ${count} H1 tag(s)`);
}

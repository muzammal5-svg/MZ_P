const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SEARCH_DIRS = ['app', 'components', 'lib'];

function getAllFiles(dir, extFilter = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extFilter));
    } else if (extFilter.includes(path.extname(file))) {
      results.push(fullPath);
    }
  }
  return results;
}

const imageRegex = /['"`](\/[a-zA-Z0-9_\-\.\/ ]+\.(?:png|jpg|jpeg|svg|webp|gif|ico))['"`]/g;

let allCodeFiles = [];
for (const d of SEARCH_DIRS) {
  allCodeFiles = allCodeFiles.concat(getAllFiles(path.join(__dirname, '..', d)));
}

const referencedImages = new Set();
for (const f of allCodeFiles) {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    referencedImages.add(match[1]);
  }
}

console.log(`Found ${referencedImages.size} unique image references in codebase.`);

const missing = [];
const found = [];

for (const imgPath of referencedImages) {
  // Convert URL path to filesystem path in public/
  const cleanPath = imgPath.replace(/^\//, '').replace(/\//g, path.sep);
  const fullFsPath = path.join(PUBLIC_DIR, cleanPath);
  if (fs.existsSync(fullFsPath)) {
    found.push(imgPath);
  } else {
    missing.push({ ref: imgPath, expected: fullFsPath });
  }
}

console.log(`✅ Valid images: ${found.length}`);
if (missing.length > 0) {
  console.log(`❌ Missing images (${missing.length}):`);
  missing.forEach(m => console.log(`  - ${m.ref}`));
} else {
  console.log('🎉 ALL referenced images exist in public/ directory! Zero 404s.');
}

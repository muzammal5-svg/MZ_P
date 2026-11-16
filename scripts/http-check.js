const http = require('http');

const routes = [
  '/',
  '/services',
  '/services/wordpress',
  '/services/shopify',
  '/services/frontend',
  '/services/ai-automation',
  '/services/ai-chatbot',
  '/services/ebay-templates',
  '/portfolio',
  '/portfolio/daily-mom-journey',
  '/contact',
  '/blog',
  '/blog/wordpress-core-web-vitals-optimization-guide',
  '/sitemap.xml',
  '/robots.txt',
  '/this-page-does-not-exist-test-404'
];

async function checkRoute(port, path) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}${path}`, (res) => {
      resolve({ path, statusCode: res.statusCode });
    });
    req.on('error', (err) => {
      resolve({ path, error: err.message });
    });
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({ path, error: 'TIMEOUT' });
    });
  });
}

async function run() {
  console.log('Testing HTTP routes on port 3001...');
  for (const path of routes) {
    const res = await checkRoute(3001, path);
    if (res.error) {
      console.log(`❌ ${path}: Error ${res.error}`);
    } else {
      const expected = path.includes('test-404') ? 404 : 200;
      const statusIcon = res.statusCode === expected ? '✅' : '⚠️';
      console.log(`${statusIcon} ${path}: HTTP ${res.statusCode} (Expected: ${expected})`);
    }
  }
}

run();

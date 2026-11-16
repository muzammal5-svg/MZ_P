const http = require('http');

const urls = [
  '/services',
  '/services/wordpress',
  '/services/shopify',
  '/services/frontend',
  '/services/ai-automation',
  '/services/ai-chatbot',
  '/services/ebay-templates',
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3001${path}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const hasBreadcrumb = body.includes('BreadcrumbList');
        const hasFaq = path !== '/services' ? body.includes('FAQPage') : true;
        const h1Count = (body.match(/<h1[\s>]/g) || []).length;
        resolve({
          path,
          status: res.statusCode,
          h1Count,
          hasBreadcrumb,
          hasFaq,
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing services pages on http://localhost:3001 ...');
  for (const url of urls) {
    const res = await checkUrl(url);
    console.log(JSON.stringify(res));
  }
}

run();

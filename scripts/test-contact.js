const http = require('http');

function postJson(data, headers = {}) {
  return new Promise((resolve) => {
    const payload = JSON.stringify(data);
    const req = http.request(
      'http://localhost:3001/api/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
          ...headers,
        },
      },
      (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(body) });
          } catch {
            resolve({ status: res.statusCode, raw: body });
          }
        });
      }
    );
    req.on('error', (err) => resolve({ error: err.message }));
    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log('--- Testing Contact API ---');

  // Test 1: Invalid email / missing name
  const t1 = await postJson({ name: 'A', email: 'invalid', description: 'short' });
  console.log('Test 1 (validation error):', t1.status === 400 ? 'PASS (400)' : 'FAIL', t1.body?.error);

  // Test 2: Honeypot check
  const t2 = await postJson({ name: 'Bot Test', email: 'bot@spam.com', description: 'Buy my crypto now', honeypot: 'filled_by_bot' });
  console.log('Test 2 (honeypot trap):', t2.status === 200 && t2.body?.success ? 'PASS (200 honeypot)' : 'FAIL');

  // Test 3: Simulation header (simulated success)
  const t3 = await postJson(
    {
      name: 'Valid Client',
      email: 'client@example.com',
      service: 'WordPress Development',
      budget: '$500 - $1,500',
      timeline: '2 - 4 weeks',
      description: 'Looking to build a custom WordPress business website with Elementor.',
    },
    { 'x-simulate-email': 'true' }
  );
  console.log('Test 3 (simulation mode):', t3.status === 200 && t3.body?.success ? 'PASS (200 simulated)' : 'FAIL');

  // Test 4: Live without credentials (returns 503 fallback - NO FALSE SUCCESS)
  const t4 = await postJson({
    name: 'Real Client',
    email: 'client@realtest.com',
    service: 'Shopify Store',
    description: 'Looking for a custom Shopify store setup.',
  });
  console.log('Test 4 (no false success without credentials):', t4.status === 503 ? 'PASS (503 with fallback)' : `STATUS: ${t4.status}`, t4.body?.fallback?.whatsappUrl ? 'Has WhatsApp Fallback' : 'No Fallback');
}

run();

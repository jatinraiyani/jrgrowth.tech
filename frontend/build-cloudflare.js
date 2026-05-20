const fs = require('fs');
const path = require('path');

const openNextDir = path.join(__dirname, '.open-next');

// 1. Rename worker.js to _worker.js
const oldWorkerPath = path.join(openNextDir, 'worker.js');
const newWorkerPath = path.join(openNextDir, '_worker.js');

if (fs.existsSync(oldWorkerPath)) {
  fs.renameSync(oldWorkerPath, newWorkerPath);
  console.log('✓ Renamed worker.js to _worker.js');
} else if (fs.existsSync(newWorkerPath)) {
  console.log('✓ _worker.js already exists');
} else {
  console.error('Error: Neither worker.js nor _worker.js was found in .open-next');
  process.exit(1);
}

// 2. Copy assets from .open-next/assets to .open-next root
const assetsSrcDir = path.join(openNextDir, 'assets');
if (fs.existsSync(assetsSrcDir)) {
  fs.cpSync(assetsSrcDir, openNextDir, { recursive: true });
  console.log('✓ Copied assets from .open-next/assets to .open-next root');
} else {
  console.log('Warning: .open-next/assets directory not found');
}

// 3. Create _routes.json to exclude static files from Worker routing
const routesJsonPath = path.join(openNextDir, '_routes.json');
const routesConfig = {
  version: 1,
  include: ['/*'],
  exclude: [
    '/_next/static/*',
    '/assets/*',
    '/favicon.ico',
    '/next.svg',
    '/vercel.svg',
    '/globe.svg',
    '/file.svg',
    '/window.svg',
    '/robots.txt',
    '/sitemap.xml'
  ]
};

fs.writeFileSync(routesJsonPath, JSON.stringify(routesConfig, null, 2), 'utf8');
console.log('✓ Created _routes.json to route static assets through Cloudflare CDN');

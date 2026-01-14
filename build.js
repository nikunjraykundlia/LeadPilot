const { execSync } = require('child_process');
const fs = require('fs');

console.log('Starting build process...');

// Install dependencies without Chrome
console.log('Installing dependencies...');
try {
    execSync('npm install --omit=dev', { stdio: 'inherit' });
    console.log('Dependencies installed successfully');
} catch (error) {
    console.error('Failed to install dependencies:', error.message);
    process.exit(1);
}

// Skip system Chromium installation on Render (read-only filesystem)
if (process.platform !== 'win32') {
    console.log('📦 Production environment detected - using Puppeteer bundled Chromium');
    console.log('ℹ️  System packages not installed due to read-only filesystem');
    console.log('✅ Puppeteer will download its own Chromium binary');
}

console.log('Build completed successfully');

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

// For Render deployment - this will run on Linux
if (process.platform !== 'win32') {
    console.log('Installing system Chromium...');
    try {
        execSync('apt-get update', { stdio: 'inherit' });
        execSync('apt-get install -y chromium-browser', { stdio: 'inherit' });
        console.log('Chromium installed successfully');
    } catch (error) {
        console.error('Failed to install Chromium:', error.message);
        // Don't exit, as this might be already installed
    }
}

// Set environment variables
process.env.PUPPETEER_EXECUTABLE_PATH = '/usr/bin/chromium-browser';
process.env.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = 'true';
process.env.PUPPETEER_SKIP_DOWNLOAD = 'true';

console.log('Build completed successfully');

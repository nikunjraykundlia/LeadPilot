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
        
        // Verify Chromium installation
        const chromiumPath = '/usr/bin/chromium-browser';
        if (fs.existsSync(chromiumPath)) {
            console.log(`✅ Chromium verified at: ${chromiumPath}`);
        } else {
            console.error('❌ Chromium not found at expected path');
        }
    } catch (error) {
        console.error('Failed to install Chromium:', error.message);
        process.exit(1);
    }
}

console.log('Build completed successfully');

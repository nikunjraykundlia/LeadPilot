#!/bin/bash

# Install dependencies without Chrome
npm ci --only=production

# Install Chrome/Chromium for Puppeteer
apt-get update
apt-get install -y chromium-browser

# Set Puppeteer to use system Chromium
export PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

echo "Build completed successfully"

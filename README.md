# LeadPilot - Google Maps Scraper & Contact Extractor

A sophisticated Google Maps scraper that extracts comprehensive business information including contact details from websites and exports to Excel. Built with Node.js, Puppeteer, and modern web technologies.

## 🚀 Features

- 🗺️ **Advanced Google Maps Scraping**: Extract business listings with high accuracy using intelligent detection
- 📧 **Intelligent Contact Extraction**: Automatically extract emails, Facebook, and Instagram links from business websites
- 📊 **Professional Excel Export**: Generate formatted Excel files with all extracted data and timestamps
- 🔄 **Batch Processing**: Process multiple search queries simultaneously with progress tracking
- 📈 **Real-time Monitoring**: Live status updates, progress bars, and detailed processing information
- 🌐 **Deep Website Crawling**: Visit contact/about pages for comprehensive contact discovery
- 🛡️ **Advanced Anti-Detection**: Stealth mode with Puppeteer Extra for reliable scraping
- 📱 **Modern Web Interface**: Responsive UI with Tailwind CSS and real-time updates
- ⚡ **High Performance**: Optimized scraping with configurable limits and error handling
- 🎯 **Smart Data Validation**: Automatic data cleaning and validation before export

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Web Scraping**: Puppeteer Extra with Stealth Plugin
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Data Export**: ExcelJS for professional Excel generation
- **Process Management**: PM2 for production deployment
- **Real-time Updates**: Server-Sent Events (SSE)

## 📋 Prerequisites

- **Node.js**: Version 16.0.0 or higher
- **npm**: Comes with Node.js
- **Chrome/Chromium**: Required for Puppeteer (auto-installed)

## 🚀 Installation

```bash
# Clone the repository
git clone <repository-url>
cd Leadpilot-main

# Install dependencies
npm install

# Create required directories (auto-created on first run)
mkdir excel_files logs
```

## 💻 Usage

### Development Mode
```bash
npm run dev
```
- Runs with nodemon for auto-restart on file changes
- Ideal for development and testing

### Production Mode
```bash
npm start
```
- Direct Node.js execution
- Optimized for production environment

### PM2 Process Management
```bash
# Start with PM2
npm run pm2:start

# Stop PM2 process
npm run pm2:stop

# Restart PM2 process
npm run pm2:restart
```

### Quick Start (Windows)
```bash
# Use the provided batch script
./start_pm2.bat
```

The application will be available at `http://localhost:3000` 

## 🔌 API Endpoints

### Core Endpoints
- `GET /` - Main web interface with real-time dashboard
- `POST /api/scrape` - Start scraping process with keywords and count
- `GET /api/status` - Get current processing status and progress
- `GET /api/files` - List all generated Excel files
- `GET /api/download/:filename` - Download specific Excel file
- `DELETE /api/files/:filename` - Delete specific Excel file

### API Request Format
```json
POST /api/scrape
{
  "keywords": ["restaurants in New York", "cafes in London"],
  "count": 50
}
```

### API Response Format
```json
{
  "status": "processing|completed|idle",
  "progress": 75,
  "currentKeyword": "restaurants in New York",
  "processedCount": 35,
  "totalCount": 50,
  "message": "Processing business listings..."
}
```

## 🔄 Scraping Process

1. **Intelligent Google Maps Search**: Advanced detection and extraction of business listings
2. **Comprehensive Data Collection**: Extract name, phone, website, rating, reviews, and address
3. **Deep Website Analysis**: Visit business websites to find contact information
4. **Multi-Page Crawling**: Explore contact, about, and team pages (max 3 pages per site)
5. **Smart Data Validation**: Clean and validate extracted information
6. **Professional Excel Export**: Generate timestamped Excel files with organized data

## 📊 Data Extracted

### Primary Business Information
- **Business Name** - Official business title
- **Phone Number** - Primary contact number
- **Website URL** - Business website link
- **Rating & Reviews** - Google Maps rating and review count
- **Address** - Business location information
- **Google Maps Link** - Direct link to Google Maps listing

### Contact Information
- **Email Addresses** - All found email addresses
- **Facebook Profiles** - Business Facebook pages
- **Instagram Profiles** - Business Instagram accounts
- **Additional Social Media** - Other discovered social profiles

## 🚀 Deployment

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Deployment

#### PM2 (Recommended)
```bash
# Using provided script (Windows)
./start_pm2.bat

# Manual PM2 commands
npm run pm2:start    # Start the application
npm run pm2:stop     # Stop the application
npm run pm2:restart  # Restart the application
```

#### Direct Node.js
```bash
npm start
```

## 📦 Dependencies

### Core Dependencies
- **Express** (v5.1.0) - Web server framework and routing
- **Puppeteer** (v21.5.0) - Headless browser automation
- **Puppeteer Extra** (v3.3.6) - Enhanced Puppeteer functionality
- **Puppeteer Extra Plugin Stealth** (v2.11.2) - Anti-detection plugin
- **ExcelJS** (v4.4.0) - Professional Excel file generation
- **Body Parser** (v2.2.0) - Request parsing middleware

### Development Dependencies
- **PM2** (v5.3.0) - Process manager for production
- **Nodemon** (v3.0.1) - Auto-restart for development

## 🔒 Security & Anti-Detection

- **Stealth Mode**: Advanced Puppeteer stealth plugin
- **User Agent Rotation**: Randomized browser fingerprints
- **Request Throttling**: Controlled request timing
- **Header Randomization**: Variable HTTP headers
- **IP Rotation Support**: Configurable proxy integration
- **CAPTCHA Handling**: Automatic detection and handling

## 📄 License

MIT License - see LICENSE file for details

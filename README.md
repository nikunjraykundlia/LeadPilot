# LeadPilot - Google Maps Scraper & Contact Extractor

An enhanced Google Maps scraper that extracts business information including contact details from websites and exports to Excel.

## Features

- 🗺️ **Google Maps Scraping**: Extract business listings from Google Maps search results
- 📧 **Contact Extraction**: Automatically extract emails, Facebook, and Instagram links from business websites
- 📊 **Excel Export**: Generate formatted Excel files with all extracted data
- 🔄 **Multi-Keyword Support**: Process multiple search queries in batch
- 📈 **Real-time Progress**: Live status updates during scraping process
- 🌐 **Internal Page Crawling**: Visit contact/about pages for better contact discovery
- 🛡️ **Stealth Mode**: Advanced anti-detection capabilities for reliable scraping
- 📱 **Responsive UI**: Modern web interface for easy operation

## Installation

```bash
npm install
```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The application will be available at `http://localhost:3000` 

## API Endpoints

- `GET /` - Main web interface
- `POST /api/scrape` - Start scraping process
- `GET /api/status` - Get current processing status
- `GET /api/files` - List generated Excel files
- `GET /api/download/:filename` - Download Excel file
- `DELETE /api/files/:filename` - Delete Excel file

## Scraping Process

1. **Search Google Maps** for business listings based on keywords
2. **Extract Business Info**: Name, phone, website, rating, reviews
3. **Visit Websites** to find contact information
4. **Crawl Internal Pages** (contact, about, team) for additional contacts
5. **Generate Excel** with all collected data

## Data Extracted

- Business Name
- Phone Number
- Website URL
- Rating & Reviews
- Email Addresses
- Facebook Profiles
- Instagram Profiles
- Google Maps Link

## Deployment

### PM2 (using provided script)
```bash
./start_pm2.bat
```

### PM2 (manual)
```bash
npm run pm2:start    # Start the application
npm run pm2:stop     # Stop the application
npm run pm2:restart  # Restart the application
```

## Dependencies

- **Express** (v5.1.0) - Web server framework
- **Puppeteer** (v21.5.0) - Headless browser automation
- **Puppeteer Extra** (v3.3.6) - Enhanced Puppeteer functionality
- **Puppeteer Extra Plugin Stealth** (v2.11.2) - Anti-detection plugin
- **ExcelJS** (v4.4.0) - Excel file generation
- **Body Parser** (v2.2.0) - Request parsing middleware
- **PM2** (v5.3.0) - Process manager for production

## File Structure

```
├── server.js              # Main application server
├── package.json           # Dependencies and scripts
├── ecosystem.config.js    # PM2 configuration
├── build.js              # Build script
├── build.sh              # Shell build script
├── start_pm2.bat         # PM2 deployment script (Windows)
├── public/
│   └── index.html         # Web interface
├── excel_files/           # Generated Excel files (auto-created)
└── .env.render           # Environment variables (Render)
```

## Configuration

The application uses the following configuration files:
- `ecosystem.config.js` - PM2 process management settings
- `.env.render` - Environment variables for deployment

## Notes

- The application creates an `excel_files` directory for storing generated files
- Scraping respects rate limits to avoid being blocked
- Internal page crawling is limited to 3 pages per website for performance
- Generated Excel files include timestamps for easy organization
- Uses stealth technology to avoid detection by anti-bot systems
- Supports Node.js version 16.0.0 and above

## License

MIT License - see LICENSE file for details

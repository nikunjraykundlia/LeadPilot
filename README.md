# LeadPilot - Google Maps Scraper & Contact Extractor

An enhanced Google Maps scraper that extracts business information including contact details from websites and exports to Excel.

## Features

- 🗺️ **Google Maps Scraping**: Extract business listings from Google Maps search results
- 📧 **Contact Extraction**: Automatically extract emails, Facebook, and Instagram links from business websites
- 📊 **Excel Export**: Generate formatted Excel files with all extracted data
- 🔄 **Multi-Keyword Support**: Process multiple search queries in batch
- 📈 **Real-time Progress**: Live status updates during scraping process
- 🌐 **Internal Page Crawling**: Visit contact/about pages for better contact discovery

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

### Render
1. Connect your GitHub repository to Render
2. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Node Version**: 18 (LTS)
   - **Port**: 3000

### PM2 (using provided script)
```bash
./start_pm2.bat
```

## Dependencies

- **Express** - Web server framework
- **Puppeteer** - Headless browser automation
- **Puppeteer Extra** - Enhanced Puppeteer functionality
- **ExcelJS** - Excel file generation
- **Body Parser** - Request parsing middleware

## File Structure

```
├── server.js              # Main application server
├── package.json           # Dependencies and scripts
├── public/
│   └── index.html         # Web interface
├── excel_files/           # Generated Excel files (auto-created)
└── start_pm2.bat         # PM2 deployment script
```

## Notes

- The application creates an `excel_files` directory for storing generated files
- Scraping respects rate limits to avoid being blocked
- Internal page crawling is limited to 3 pages per website for performance
- Generated Excel files include timestamps for easy organization

## License

MIT License - see LICENSE file for details

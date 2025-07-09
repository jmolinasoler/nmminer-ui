# NM Miner Dashboard 🔧

A modern, real-time web dashboard for monitoring NM Miner devices. Built with Node.js, Express, and EJS following the MVC pattern.

## Features ✨

- **Real-time monitoring** - Auto-refreshes every 5 seconds
- **Responsive design** - Works on desktop and mobile devices
- **Connection status indicator** - Shows online/offline status
- **Clean MVC architecture** - Organized and maintainable code
- **Modern UI** - Dark theme with intuitive layout
- **Error handling** - Graceful handling of connection issues

## Dashboard Sections 📊

- **⚡ Mining Status** - Uptime, hash rate, and board type
- **🏊 Pool Information** - Pool details, shares, and validation
- **📊 Difficulty Stats** - Network and pool difficulty metrics
- **📡 System Info** - Signal strength and memory usage

## Prerequisites 📋

- Node.js (v14 or higher)
- npm or yarn
- Access to NM Miner device at `http://<ip address>/data`

## Installation 🚀

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nmminer-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure 📁

```
nmminer-ui/
├── controllers/
│   └── minerController.js      # Request handling logic
├── models/
│   └── minerModel.js          # Data fetching and processing
├── routes/
│   └── minerRoutes.js         # Route definitions
├── views/
│   └── dashboard.ejs          # HTML template
├── public/
│   ├── css/
│   │   └── dashboard.css      # Stylesheet
│   └── js/
│       └── dashboard.js       # Client-side JavaScript
├── app.js                     # Main application file
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## API Endpoints 🔌

- `GET /` - Main dashboard page
- `GET /api/data` - JSON API endpoint for miner data

## Configuration ⚙️

### Environment Variables
Create a `.env` file in the root directory to configure the application:

```bash
# Copy the example file
cp .env.example .env
```

Edit the `.env` file with your settings:

```env
# Miner Configuration
MINER_IP=192.168.0.61
MINER_PORT=80
MINER_ENDPOINT=/data
MINER_TIMEOUT=5000

# Server Configuration
PORT=3000

# UI Configuration
REFRESH_INTERVAL=5000
```

### Configuration Options

| Variable | Description | Default |
|----------|-------------|---------|
| `MINER_IP` | IP address of your NM Miner device | `192.168.0.61` |
| `MINER_PORT` | Port of the miner web interface | `80` |
| `MINER_ENDPOINT` | API endpoint for miner data | `/data` |
| `MINER_TIMEOUT` | Request timeout in milliseconds | `5000` |
| `PORT` | Server port for the dashboard | `3000` |
| `REFRESH_INTERVAL` | Auto-refresh interval in milliseconds | `5000` |

### Alternative Configuration Methods

**Via command line:**
```bash
MINER_IP=192.168.1.100 PORT=8080 npm start
```

**Via code (config/config.js):**
Edit the default values in `/config/config.js` if you prefer not to use environment variables.

## Data Format 📋

The dashboard expects JSON data in the following format:

```json
{
  "timeMining": "00d 18:09:07",
  "boardtype": "cyd 2.8",
  "hashRate": "1.0066MH/s",
  "pool": "pool.tazmining.ch:3343",
  "shares": "69/5308 (98.7%)",
  "netDiff": "117.0T",
  "poolDiff": "0.0035",
  "lastDiff": "0.0077",
  "bestDiff": "88.221",
  "valid": "0",
  "rssi": "-63dBm",
  "freeHeap": "63.211KB"
}
```

## Development 🛠️

### Running in Development Mode
```bash
npm run dev
```
This uses `nodemon` for automatic server restart on file changes.

### File Structure
- **Models** (`/models/`) - Handle data fetching and processing
- **Controllers** (`/controllers/`) - Handle HTTP requests and responses
- **Views** (`/views/`) - EJS templates for rendering HTML
- **Routes** (`/routes/`) - Define application endpoints
- **Public** (`/public/`) - Static assets (CSS, JavaScript, images)

## Troubleshooting 🔧

### Connection Issues
- Verify the miner device is accessible at the configured URL
- Check network connectivity to the miner
- Ensure the miner's `/data` endpoint is working

### Port Already in Use
```bash
# Kill process using port 3000
sudo lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=8080 npm start
```

### Missing Dependencies
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💬

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the console logs for error messages
3. Verify your miner device is responding correctly
4. Open an issue in the repository

---

// Load environment variables first
require('dotenv').config();

const express = require('express');
const path = require('path');
const config = require('./config/config');
const minerRoutes = require('./routes/minerRoutes');

const app = express();
const PORT = config.server.port;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Make config available to all views
app.locals.config = config;

// Routes
app.use('/', minerRoutes);

// Error handling middleware
app.use((req, res) => {
    res.status(404).render('dashboard', { 
        minerData: null, 
        error: 'Page not found' 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 NM Miner UI running on http://localhost:${PORT}`);
    console.log(`📡 Monitoring miner at: ${config.miner.url}`);
    console.log(`🔄 Refresh interval: ${config.ui.refreshInterval}ms`);
});
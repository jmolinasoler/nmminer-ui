const express = require('express');
const router = express.Router();
const config = require('../config/config');
const minerController = require('../controllers/minerController');

// Dashboard route
router.get('/', minerController.getDashboard);

// API route for AJAX updates
router.get('/api/data', minerController.getApiData);

// API route for configuration
router.get('/api/config', (req, res) => {
    res.json({
        refreshInterval: config.ui.refreshInterval,
        minerUrl: config.miner.url
    });
});

module.exports = router;
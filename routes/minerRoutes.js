const express = require('express');
const router = express.Router();
const minerController = require('../controllers/minerController');

// Dashboard route
router.get('/', minerController.getDashboard);

// API route for AJAX updates
router.get('/api/data', minerController.getApiData);

module.exports = router;
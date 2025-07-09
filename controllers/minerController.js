const minerModel = require('../models/minerModel');

class MinerController {
  async getDashboard(req, res) {
    try {
      const result = await minerModel.getMinerData();
      
      if (result.success) {
        const formattedData = {
          ...result.data,
          formattedShares: minerModel.formatShares(result.data.shares),
          formattedHashRate: minerModel.formatHashRate(result.data.hashRate),
          formattedUptime: minerModel.formatUptime(result.data.timeMining),
          lastUpdate: new Date().toLocaleString()
        };

        res.render('dashboard', { 
          minerData: formattedData,
          error: null 
        });
      } else {
        res.render('dashboard', { 
          minerData: null,
          error: result.error 
        });
      }
    } catch (error) {
      res.render('dashboard', { 
        minerData: null,
        error: 'Server error occurred' 
      });
    }
  }

  async getApiData(req, res) {
    try {
      const result = await minerModel.getMinerData();
      res.json(result);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: 'Server error occurred' 
      });
    }
  }
}

module.exports = new MinerController();
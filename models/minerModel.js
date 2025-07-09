const axios = require('axios');
const config = require('../config/config');

class MinerModel {
  constructor() {
    this.minerUrl = config.miner.url;
    this.timeout = config.miner.timeout;
  }

  async getMinerData() {
    try {
      const response = await axios.get(this.minerUrl, { 
        timeout: this.timeout 
      });
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error fetching miner data:', error.message);
      return {
        success: false,
        error: error.message,
        data: null
      };
    }
  }

  formatHashRate(hashRate) {
    return hashRate || 'N/A';
  }

  formatUptime(timeMining) {
    return timeMining || 'N/A';
  }

  formatShares(shares) {
    if (!shares) return 'N/A';
    const match = shares.match(/(\d+)\/(\d+)\s*\(([^)]+)\)/);
    if (match) {
      return {
        accepted: match[1],
        total: match[2],
        percentage: match[3]
      };
    }
    return { raw: shares };
  }

  // Get current configuration
  getConfig() {
    return {
      url: this.minerUrl,
      timeout: this.timeout
    };
  }
}

module.exports = new MinerModel();
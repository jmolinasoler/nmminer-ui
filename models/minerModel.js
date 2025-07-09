const axios = require('axios');

class MinerModel {
  constructor() {
    this.minerUrl = 'http://192.168.42.61/data';
  }

  async getMinerData() {
    try {
      const response = await axios.get(this.minerUrl, { timeout: 5000 });
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
}

module.exports = new MinerModel();
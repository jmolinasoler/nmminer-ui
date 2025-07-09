const config = {
  // Miner configuration
  miner: {
    ip: process.env.MINER_IP || '192.168.0.61',
    port: process.env.MINER_PORT || '80',
    endpoint: process.env.MINER_ENDPOINT || '/data',
    timeout: process.env.MINER_TIMEOUT || 5000
  },
  
  // Server configuration
  server: {
    port: process.env.PORT || 3000
  },
  
  // UI configuration
  ui: {
    refreshInterval: process.env.REFRESH_INTERVAL || 5000
  }
};

// Build the full miner URL
config.miner.url = `http://${config.miner.ip}:${config.miner.port}${config.miner.endpoint}`;

module.exports = config;
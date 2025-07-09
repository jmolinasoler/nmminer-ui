let isOnline = false;
let refreshInterval = 5000; // Default value, will be updated from server

async function updateData() {
    const dashboardContent = document.getElementById('dashboard-content');
    dashboardContent.classList.add('loading');

    try {
        const response = await fetch('/api/data');
        const result = await response.json();

        if (result.success && result.data) {
            isOnline = true;
            updateStatusIndicator(true);
            updateDashboardData(result.data);
        } else {
            isOnline = false;
            updateStatusIndicator(false);
            console.error('Failed to fetch data:', result.error);
        }
    } catch (error) {
        isOnline = false;
        updateStatusIndicator(false);
        console.error('Error fetching data:', error);
    } finally {
        dashboardContent.classList.remove('loading');
    }
}

function updateStatusIndicator(online) {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    if (online) {
        statusDot.className = 'status-indicator status-online';
        statusText.textContent = 'Connected';
    } else {
        statusDot.className = 'status-indicator status-offline';
        statusText.textContent = 'Disconnected';
    }
}

function updateDashboardData(data) {
    const fields = ['timeMining', 'hashRate', 'boardtype', 'pool', 'shares', 'valid', 
                  'netDiff', 'poolDiff', 'lastDiff', 'bestDiff', 'rssi', 'freeHeap'];
    
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element && data[field] !== undefined) {
            element.textContent = data[field];
        }
    });

    const lastUpdate = document.getElementById('lastUpdate');
    if (lastUpdate) {
        lastUpdate.textContent = `Last updated: ${new Date().toLocaleString()}`;
    }
}

// Get refresh interval from server config
async function getConfig() {
    try {
        const response = await fetch('/api/config');
        const config = await response.json();
        refreshInterval = config.refreshInterval || 5000;
    } catch (error) {
        console.error('Failed to get config, using default refresh interval');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Get configuration first
    await getConfig();
    
    // Update data every configured interval
    setInterval(updateData, refreshInterval);

    // Initial status check
    updateData();
    
    // Display current configuration
    const configInfo = document.getElementById('config-info');
    if (configInfo) {
        configInfo.textContent = `Refresh: ${refreshInterval/1000}s`;
    }
});
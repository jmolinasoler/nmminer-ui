const express = require('express');
const path = require('path');
const minerRoutes = require('./routes/minerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

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
});
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3000;

const logFilePath = path.resolve(__dirname, 'logs/resource-log.txt');

app.use(cors()); // Enable CORS for all routes
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/latest-log', (req, res) => {
    console.log('Attempting to read log file from:', logFilePath);
    fs.readFile(logFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading log file:', err);
            res.status(500).send('Error reading log file.');
        } else {
            console.log('Log data successfully read.');
            res.send(data.trim().split('\n').slice(-4).join('\n')); // Send last 4 lines
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

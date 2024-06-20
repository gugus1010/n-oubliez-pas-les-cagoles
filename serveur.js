// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Module pour gérer CORS
const app = express();
const port = 3000;

let responses = [];

app.use(bodyParser.json());
app.use(cors()); // Active CORS pour toutes les routes

app.post('/save-response', (req, res) => {
    const { artist, track } = req.body;
    if (artist && track) {
        responses.push({ artist, track });
        res.status(200).json({ message: 'Response saved successfully!' });
    } else {
        res.status(400).json({ message: 'Invalid request' });
    }
});

app.get('/leaderboard', (req, res) => {
    res.json(responses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let responses = [];

app.use(bodyParser.json());

app.post('/save-response', (req, res) => {
    const { id, artist, track } = req.body;
    if (id && artist && track) {
        responses.push({ id, artist, track });
        res.status(200).send('Response saved successfully!');
    } else {
        res.status(400).send('Invalid request');
    }
});

app.get('/leaderboard', (req, res) => {
    res.json(responses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
    
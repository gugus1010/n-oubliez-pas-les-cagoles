// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

let responses = [];

app.use(bodyParser.json());
app.use(cors()); // Active CORS pour toutes les routes

app.post('/save-response', (req, res) => {
    const { artist, track } = req.body;
    if (artist && track) {
        // Gestion de l'ID simulée pour le leaderboard
        const id = responses.length + 1;
        responses.push({ id, artist, track });
        res.status(200).json({ message: 'Réponse enregistrée avec succès !' });
    } else {
        res.status(400).json({ message: 'Requête invalide' });
    }
});

app.get('/leaderboard', (req, res) => {
    res.json(responses);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

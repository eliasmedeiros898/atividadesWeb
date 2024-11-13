const express = require('express');
const app = express();
app.use(express.json());

const animeController = require('./controllers/animeController');

// Rotas
app.get('/', (req, res) => {
  res.send('Bem-vindo ao CRUD de Animes!');
});

app.get('/animes', animeController.getAllAnimes);
app.get('/animes/:id', animeController.getAnimeById);
app.post('/animes', animeController.createAnime);
app.put('/animes/:id', animeController.updateAnime);
app.delete('/animes/:id', animeController.deleteAnime);

module.exports = app;

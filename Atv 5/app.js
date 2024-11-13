const express = require('express');
const app = express();
app.use(express.json());


let animes = [
  {
    id: 1,
    name: 'Naruto',
    genre: 'Ação',
    studio: 'Studio Pierrot'
  }
];


function generateId() {
  return animes.length ? animes[animes.length - 1].id + 1 : 1;
}


app.get('/animes', (req, res) => {
    res.json(animes);
  });

app.get('/animes/:id', (req, res) => {
    const { id } = req.params;
    const anime = animes.find(anime => anime.id == id);
    if (anime) {
        res.json(anime);
    } else {
        res.status(404).json({ message: 'Anime não encontrado' });
    }
});

app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;
  
    
    if (!name || !genre || !studio) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
  
    const newAnime = {
      id: generateId(),
      name,
      genre,
      studio
    };
    animes.push(newAnime);
    res.status(201).json(newAnime);
  });

app.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;

    // Validações
    if (!name || !genre || !studio) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const animeIndex = animes.findIndex(anime => anime.id == id);
    if (animeIndex !== -1) {
        animes[animeIndex] = { id: Number(id), name, genre, studio };
        res.json(animes[animeIndex]);
    } else {
        res.status(404).json({ message: 'Anime não encontrado' });
    }
});

app.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const animeIndex = animes.findIndex(anime => anime.id == id);
  
    if (animeIndex !== -1) {
      const removedAnime = animes.splice(animeIndex, 1);
      res.json({ message: 'Anime removido com sucesso', removedAnime });
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  });

module.exports = app;
const animeService = require('../services/animeService');

// Funções de controle
const getAllAnimes = (req, res) => {
  try {
    const animes = animeService.getAllAnimes();
    res.json(animes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAnimeById = (req, res) => {
  const { id } = req.params;
  try {
    const anime = animeService.getAnimeById(Number(id));
    if (anime) {
      res.json(anime);
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAnime = (req, res) => {
  const { name, genre, studio } = req.body;
  try {
    const newAnime = animeService.createAnime(name, genre, studio);
    res.status(201).json(newAnime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAnime = (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;
  try {
    const updatedAnime = animeService.updateAnime(Number(id), name, genre, studio);
    if (updatedAnime) {
      res.json(updatedAnime);
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAnime = (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnime = animeService.deleteAnime(Number(id));
    if (deletedAnime) {
      res.json({ message: 'Anime removido com sucesso', deletedAnime });
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime
};

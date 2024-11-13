const animeRepository = require('../repositories/animeRepository');

// Valida se os campos necessários estão presentes
const validateAnime = (name, genre, studio) => {
  if (!name || !genre || !studio) {
    throw new Error('Todos os campos são obrigatórios');
  }
};

// Funções de serviço
const getAllAnimes = () => {
  return animeRepository.getAllAnimes();
};

const getAnimeById = (id) => {
  return animeRepository.getAnimeById(id);
};

const createAnime = (name, genre, studio) => {
  validateAnime(name, genre, studio);
  return animeRepository.createAnime(name, genre, studio);
};

const updateAnime = (id, name, genre, studio) => {
  validateAnime(name, genre, studio);
  return animeRepository.updateAnime(id, name, genre, studio);
};

const deleteAnime = (id) => {
  return animeRepository.deleteAnime(id);
};

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime
};

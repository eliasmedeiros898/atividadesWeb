const Anime = require('../models/animeModel');

// Array de animes para simular o banco de dados
let animes = [
  new Anime(1, 'Naruto', 'Ação', 'Studio Pierrot')
];

// Função para gerar IDs automaticamente
function generateId() {
  return animes.length ? animes[animes.length - 1].id + 1 : 1;
}

// Funções CRUD
const getAllAnimes = () => {
  return animes;
};

const getAnimeById = (id) => {
  return animes.find(anime => anime.id === id);
};

const createAnime = (name, genre, studio) => {
  const id = generateId();
  const newAnime = new Anime(id, name, genre, studio);
  animes.push(newAnime);
  return newAnime;
};

const updateAnime = (id, name, genre, studio) => {
  const anime = getAnimeById(id);
  if (anime) {
    anime.name = name;
    anime.genre = genre;
    anime.studio = studio;
    return anime;
  }
  return null;
};

const deleteAnime = (id) => {
  const index = animes.findIndex(anime => anime.id === id);
  if (index !== -1) {
    return animes.splice(index, 1);
  }
  return null;
};

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime
};

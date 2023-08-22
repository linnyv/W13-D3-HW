const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true, set: function(name) {
    return `http://img.pokemondb.net/artwork/${name}.jpg`;
  } 
 },
});


const Pokemons = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemons;
var PokemonActions = require('../actions/pokemonActions');

var fetchAllPokemons = function () {
  $.ajax({
    url: 'api/pokemon',
    method: 'get',
    success: function(pokemons) {
      PokemonActions.receiveAllPokemons(pokemons);
    }
  });
};

var fetchOnePokemon = function (id) {
  $.ajax({
    url: 'api/pokemon/' + id,
    method: 'get',
    success: function(pokemon) {
      PokemonActions.receiveOnePokemon(pokemon);
    }

  })

};
;
var fetchObject = {
  fetchAllPokemons: fetchAllPokemons,
  fetchOnePokemon: fetchOnePokemon
};



module.exports = fetchObject;

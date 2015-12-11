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

var fetchOnePokemon = function () {

}
;
var fetchObject = {
  fetchAllPokemons: fetchAllPokemons
};



module.exports = fetchObject;

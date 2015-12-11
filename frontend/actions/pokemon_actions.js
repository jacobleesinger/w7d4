var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemon_constants');

var pokemonActions = {
  receiveAllPokemons: function(pokemons){
    var action = {
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    };


    Dispatcher.dispatch(action);
  },

  receiveOnePokemon: function(pokemon){

    var action = {
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    };
    Dispatcher.dispatch(action);
  }
};


module.exports = pokemonActions;

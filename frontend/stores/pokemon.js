var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var fetchObject = require('../utils/apiUtil');
var PokemonConstants = require('../constants/pokemonConstants');

var _pokemons = {};

var PokemonStore = new Store(Dispatcher);
window.PokemonStore = PokemonStore;

PokemonStore.all = function () {
  var pokemons = [];
  for(var key in _pokemons) {
    if (_pokemons.hasOwnProperty(key)) {
      var value = _pokemons[key];
      pokemons.push(value);
    }
  }
  // Object.keys(_pokemons).
  return pokemons;
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons();
      addAllPokemons(payload.pokemons);

      PokemonStore.__emitChange();

    break;
  }
};

PokemonStore.find = function(id){
  return _pokemons[id];
};

var addAllPokemons = function (pokemons) {
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });

  // PokemonStore.__emitChange();
};

var resetPokemons = function(){
  _pokemons = {};
  // PokemonStore.__emitChange();
};

module.exports = PokemonStore;

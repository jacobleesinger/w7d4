var React = require('react'),
    ReactDOM = require('react-dom'),
    fetchObject = require('./utils/apiUtil'),
    PokemonStore = require('./stores/pokemon'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/App'),
    PokemonDetail = require('./components/pokemons/pokemonDetail');



document.addEventListener("DOMContentLoaded", function() {


  var routes = (
    <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail} />
    </Route>
  );

  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );

  fetchObject.fetchAllPokemons();
  window.fetchObject = fetchObject;
  window.PokemonStore = PokemonStore;
});

var React = require('react'),
    ReactDOM = require('react-dom'),
    fetchObject = require('./utils/api_util'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app'),
    PokemonDetail = require('./components/pokemons/pokemon_detail');



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
});

var React = require('react'),
    PokemonsIndex = require('./pokemons/pokemonsIndex');

var App = React.createClass({

  render: function () {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <div>
            <PokemonsIndex />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;

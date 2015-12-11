var React = require('react'),
    PokemonsIndex = require('./pokemons/pokemons_index');

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

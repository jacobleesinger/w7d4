var React = require('react'),
    PokemonStore = require('../../stores/pokemon_store'),
    PokemonIndexItem = require('./pokemon_index_item');

var PokemonsIndex = React.createClass({
  getInitialState: function(){
    return({
      pokemons: []
    });
  },
  _onChange: function(){
    this.setState({
      pokemons: PokemonStore.all()
    });
  },
  componentDidMount: function(){
    this.PokemonToken = PokemonStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.PokemonToken.remove();
  },
  render: function(){
    return(
      <ul>
        {this.state.pokemons.map(function(pokemon){
          return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />;
        })}
      </ul>
    );
  }
});

module.exports = PokemonsIndex;

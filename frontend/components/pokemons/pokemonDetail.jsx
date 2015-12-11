var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    PokemonActions = require('../../actions/pokemonActions'),
    ApiUtil = require('../../utils/apiUtil');

var pokemonDetail = React.createClass({
  getInitialState: function(){
    return({
      pokemon: this.getStateFromStore()
    });
  },
  getStateFromStore: function(){
    var id = (this.props.params.pokemonId);
    return PokemonStore.find(id) || {};
  },
  _onChange: function(){
    this.setState({
      pokemon: this.getStateFromStore()
    });
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchOnePokemon(parseInt(newProps.params.pokemonId));
  },

  componentDidMount: function(){
    this.PokemonToken = PokemonStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.PokemonToken.remove();
  },
  componentWillReceiveProps: function(){
    ApiUtil.fetchOnePokemon(parseInt(this.props.params.pokemonId));
  },
  details: function (id) {
    if(Object.keys(this.state.pokemon).length === 0){
      return (<div></div>);
    } else {
      return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <ul>
                <li>Pokemon: {this.state.pokemon.name}</li>
                <li>Type: {this.state.pokemon.poke_type}</li>
                <li>Attack: {this.state.pokemon.attack}</li>
                <li>Defense: {this.state.pokemon.defense}</li>
                <li>Moves:
                  {this.state.pokemon.moves.map(function(move){
                      return (
                        <div>
                          {move}
                          <br />
                        </div>
                        );
                    })
                  }
                </li>
              </ul>
              <img src={this.state.pokemon.image_url} />

            </div>
          </div>

        </div>
      );
    }
  },

  render: function(){
    return(
      this.details(this.props.params.pokemonId)
    );
  }

});

module.exports = pokemonDetail;

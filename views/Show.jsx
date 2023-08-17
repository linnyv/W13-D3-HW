import React from 'react';
import pokemon from '../models/pokemon';

const styledH1 = {
  color: '#80dcb9',
  textAlign: 'center',
  fontWeight: 'bold',
  backgroundColor: '#8494ce',
};

export default class Show extends React.Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { id } = this.props;

    const selectedPokemon = pokemon[id]; 

    selectedPokemon.img += '.jpg';

    return (
      <div>
        <h1 style={styledH1}>Gotta Catch 'Em All</h1>

        <h2>{this.capitalizeFirstLetter(selectedPokemon.name)}</h2>

        <img src={selectedPokemon.img} alt={selectedPokemon.name} />
        
        <a href={`/pokemon`}>Back</a>
      </div>
    );
  }
}
import React from 'react';

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
    return (
      <div>
        <h1 style={styledH1}>Gotta Catch 'Em All</h1>

        <h2>{this.props.pokemon.name}</h2>

        <img src={this.props.pokemon.img} alt={this.props.pokemon.name} />
        
        <a href={`/pokemon`}>Back</a>
      </div>
    );
  }
}
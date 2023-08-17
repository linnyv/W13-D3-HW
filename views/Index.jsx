import React from 'react';
import pokemon from '../models/pokemon';

const styledH1 = {
  color: '#f1caf0',
  textAlign: 'center',
  fontWeight: 'bold',
  backgroundColor: '#c49bfa',
};

export default class Index extends React.Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div>
        <h1 style={styledH1}>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((p, index) => (
            <li key={index}>
              <a href={`/pokemon/${index}`}>
                {this.capitalizeFirstLetter(p.name)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
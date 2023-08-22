import React from 'react';

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
        <nav>
          <a href="/pokemon/new">Add a New Pokemon</a>
        </nav>
        <h1 style={styledH1}>See All The Pokemon!</h1>
        <ul>
          {this.props.pokemon?.map((pokemon, index) => (
            <li key={index}>
              <a href={`/pokemon/${pokemon._id}`}>
                {this.capitalizeFirstLetter(pokemon.name)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
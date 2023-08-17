const React = require('react');

const styledH1 = {
  color: '#f1caf0',
  textAlign: 'center',
  fontWeight: 'bold',
  backgroundColor: '#c49bfa',
};

class Index extends React.Component {
  render() {
    return (
      <h1 style={styledH1}>See All The Pokemon!</h1>
    );
  }
}

module.exports = Index;
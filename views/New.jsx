const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon page</h1>
        <form action="/pokemon/new" method="POST">
          Name: <input type="text" name="name" /><br/>
          Image: <input type="text" name="image" /><br/>
          <input type="submit" value="Add new Pokemon" />
        </form>
      </div>
    )
  }
}

module.exports = New;
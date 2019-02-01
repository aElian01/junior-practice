// not built out just an example!!! not rendered!

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      genre: ''
    };

    this.addMoiveHandler = this.addMoiveHandler.bind(this);
    this.getMoviesHandler = this.getMoviesHandler.bind(this);
  }



  genreHandler(event) {
    this.setState({
      genre: event.target.value
    })
  }

  titleHandler(event) {
    this.setState({
      title: event.target.value
    })
  }

  getMoviesHandler() {
    fetch('/api/movies')
  }

  addMoiveHandler() {
    fetch('/api/movies', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>


        <button onClick={this.addMoiveHandler}>Add Movies!</button>
      </div>
    )
  }



}



export default App;
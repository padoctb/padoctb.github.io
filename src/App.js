import React, { Component } from 'react';
import "./app.scss"

class App extends Component {

  state = {
    img: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={this.load} className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.img ? <img src={`https://image.tmdb.org/t/p/w500/${this.state.img}`}/> : null}
        </p>
      </div>
    );
  }

  load = () => {
    fetch("https://api.themoviedb.org/3/movie/550?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f")
    .then(res => res.json())
    .then(res => this.setState({
      img: res.poster_path
    }))
  }
}

export default App;

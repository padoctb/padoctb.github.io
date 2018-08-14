import React, {Component} from "react"
import {Route, Redirect} from "react-router-dom"
import MainBlock from "./../components/MainBlock"
import Movie from "./../components/Movie"

class App extends Component {

  render() {
    return(
      <React.Fragment>
        <Route exact path={`/movies`} render={({match}) => <Redirect to='/'/>}/>
        <Route exact path={`/movies/:movieId`} render={({match}) => this.getMovie(match)}/>
      </React.Fragment>
    )
  }

  getMovie(match) {
    return (
      <MainBlock title='Movie Details'>
        <Movie key={match.params.movieId} movieId={match.params.movieId}/>
      </MainBlock>)
  }
}

export default App
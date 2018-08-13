import React, {Component} from 'react'
import "./styles/app.scss"
import Header from "./components/Header"
import Search from "./components/Search"
import MainBlock from "./components/MainBlock"
import PreviewMoviesList from "./components/PreviewMoviesList"

class App extends Component {

  render() {
    console.log(window.store.getState())
    return(
      <React.Fragment>
        <Header/>

        <main className="main-wrapper">

          <MainBlock exact={false} path={`/`} title="Search">
            <Search/>
          </MainBlock>

          <MainBlock exact={true} path={`/`} title="Popular">
            <PreviewMoviesList category={'popular'}/>
          </MainBlock>

          <MainBlock exact={true} path={`/`} title="Top Rated">
            <PreviewMoviesList category={'top_rated'}/>
          </MainBlock>

          <MainBlock exact={true} path={`/`} title="Upcoming">
            <PreviewMoviesList category={'upcoming'}/>
          </MainBlock>

        </main>

      </React.Fragment>
    )
  }
}

export default App

// b6d2e3a714047dd33bb390fcbc6cdc5f
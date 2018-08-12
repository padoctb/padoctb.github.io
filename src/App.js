import React, {Component} from 'react'
import "./styles/app.scss"
import Header from "./components/Header"
import Search from "./components/Search"
import MainBlock from "./components/MainBlock"
import Loader from "./components/Loader"

class App extends Component {

  render() {
    return(
      <React.Fragment>
        <Header/>

        <main className="main-wrapper">

          <MainBlock title="Search">
            <Search/>
          </MainBlock>

          <MainBlock title="Popular">
            <Loader/>
          </MainBlock>

          <MainBlock title="Top Rated">
            <Loader/>
          </MainBlock>

          <MainBlock title="Upcoming">
            <Loader/>
          </MainBlock>

        </main>

      </React.Fragment>
    )
  }
}

export default App
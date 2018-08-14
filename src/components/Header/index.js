import React, {Component} from "react"
import "./style.scss"
import {Link} from 'react-router-dom'

class App extends Component {

  render() {
    return(
      <header className="main-header">
        <Link className="main-header__logo" to="/">
          <h2 className="main-header__title">Movie Searcher</h2>
          <div className="main-header__descr">Simple React Application</div>
        </Link>
      </header>
    )
  }
}

export default App
import React, {Component} from "react"
import "./style.scss"

class App extends Component {

  render() {
    return(
      <header className="main-header">
        <div className="main-header__logo">
          <h2 className="main-header__title">Movie Searcher</h2>
          <div className="main-header__descr">Simple React Application</div>
        </div>
      </header>
    )
  }
}

export default App
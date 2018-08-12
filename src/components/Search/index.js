import React, {Component} from "react"
import "./style.scss"

class App extends Component {

  state = {
    searchInputValue: ""
  }

  render() {
    return(
      <React.Fragment>
        {this.body}
      </React.Fragment>
    )
  }

  get body() {
    const {searchInputValue} = this.state

    const body = (
        <input
          className="search__input"
          type="text" 
          value={searchInputValue}
          placeholder="Search movies, actors..."
          onChange={(e) => this.changeSearchInputValue(e)}
          />
      )

    return body
  }

  changeSearchInputValue = (e) => {
    if(e.target.value.length >= 100) return;
    this.setState({
      searchInputValue: e.target.value
    })
  }
}

export default App
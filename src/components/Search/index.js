import React, {PureComponent} from "react"
import "./style.scss"
import MoviesListBlock from "./../MoviesListBlock/"
import MoviePreview from "./../MoviePreview/"
import Loader from "./../Loader"

class App extends PureComponent {

  state = {
    searchInputValue: "",
    getActive: false,
    searchResults: [],
    error: false
  }

  render() {
    return(
      <React.Fragment>
        {this.body}
      </React.Fragment>
    )
  }

  get body() {
    const {searchInputValue, searchResults, getActive, error} = this.state

    const searchRes = searchResults ? searchResults.map((elem, i) => {
      if(i >= 5) return null;
      return <li key={elem.id}><MoviePreview link={`/movies/${elem.id}`} posterWidth={220} movieData={elem}/></li>
    }) : []

    const body = (
        <React.Fragment>
          <input
            className="search__input"
            type="text" 
            value={searchInputValue}
            placeholder="Search movies..."
            onChange={(e) => this.changeSearchInputValue(e)}
            />
            {(searchInputValue.length > 3 && searchRes.length === 0 && !getActive && !error) ? <h3>Nothing found</h3> : null}
            {error ? <h3>Something went wrong</h3> : null}
            {getActive ? <Loader/> : null}
            {searchRes.length !== 0 ? <MoviesListBlock>{searchRes}</MoviesListBlock> : null}
        </React.Fragment>
      )

    return body
  }

  componentDidUpdate(prevProps, prevState) {
    
    //оптимиз. запросов
    if(this.state.searchInputValue.length >= 3 && !this.state.getActive && this.state.searchInputValue.length !== prevState.searchInputValue.length) {
      this.setState({
        getActive: true
      })

      setTimeout(() => {
        if(this.state.searchInputValue.length < 3) this.setState({getActive: false})
        if(this.state.searchInputValue.length >= 3) {
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US&page=1&include_adult=false&query=${this.state.searchInputValue}`)
            .then(res => {
              if(res.ok) return res.json()
              throw new Error('Network response was not ok.')
            })
            .then(res => {

              this.setState({getActive: false})

              if(this.state.error) this.setState({error: false})
              if(this.state.searchInputValue.length >= 3) this.setState({searchResults: res.results})
            })
            .catch(error => {
              console.log(error)
              this.setState({error: true})
            })
        }
        
      }, 2000)
    }
    else {
      if(this.state.searchInputValue.length !== prevState.searchInputValue.length) {
        this.setState({searchResults: []})
      }
    }
  }


  changeSearchInputValue = (e) => {
    if(e.target.value.length >= 100) return;
    this.setState({
      searchInputValue: e.target.value
    })
  }
}

export default App
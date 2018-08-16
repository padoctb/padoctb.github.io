import React, {PureComponent} from "react"
import "./style.scss"
import {connect} from 'react-redux'
import MoviesListBlock from "./../MoviesListBlock/"
import MoviePreview from "./../MoviePreview/"
import PropTypes from 'prop-types'

class FavoritesList extends PureComponent {

  static propTypes = {
    favoritesMovies: PropTypes.object.isRequired
  } 

  render() {
    return(
      <React.Fragment>
        {this.body}
      </React.Fragment>
    )
  }

  get body() {

    const {favoritesMovies} = this.props

    if(Object.keys(favoritesMovies).length === 0) return <span className="favorites__empty">Your favorite list is empty.</span>;

    const body = Object.values(favoritesMovies).map((elem, i) => {
      return <li key={elem.id}><MoviePreview link={`/movies/${elem.id}`} posterWidth={220} movieData={elem}/></li>
    })

    return (
      <React.Fragment>
        <MoviesListBlock>
          {body}
        </MoviesListBlock>
      </React.Fragment>
    )
  }
}

export default connect(store => {
  return {
    favoritesMovies: store.favoritesMovies
  }
})(FavoritesList)
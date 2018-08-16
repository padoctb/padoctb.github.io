import React, {PureComponent} from "react"
import PropTypes from 'prop-types'
import './style.scss'
import Loader from './../Loader'
import {connect} from 'react-redux'
import {
  getPreviewMoviesList,
  getPreviewMoviesLoadedStatus
} from './../../selectors'
import {loadPreviewMoviesList} from './../../action_creators'
import MoviePreview from "./../MoviePreview"
import MoviesListBlock from "./../MoviesListBlock"
import {Link} from 'react-router-dom'

class PreviewMoviesList extends PureComponent {

  static propTypes = {
    category: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    getPreviewMoviesList: PropTypes.func
  } 

  render() {
    return(
      <div className="movies-list-preview__wrapper">
        {this.body}
      </div>
    )
  }

  get body() {
    const {movies, loaded} = this.props

    if(!loaded) return <Loader/>;

    const body = movies.map((elem, i) => {
      if(i >= 10) return null;
      return <li key={elem.id}><MoviePreview link={`/movies/${elem.id}`} posterWidth={220} movieData={elem}/></li>
    })

    return (
    <MoviesListBlock>
      {body}
      <div className="movies-list-preview__more-btn-wrapper">
        <Link className="movies-list-preview__more-btn" to={`/category/${this.props.category}/1`}>View more</Link>
      </div>
    </MoviesListBlock>)
  }

  componentDidMount() {
    const {loaded, category} = this.props

    if(!loaded) this.props.loadPreviewMoviesList(category)
  }
}

export default connect((store, ownProps) => {
  return {
    movies: getPreviewMoviesList(store, ownProps),
    loaded: getPreviewMoviesLoadedStatus(store, ownProps)
  }
}, {
  loadPreviewMoviesList
})(PreviewMoviesList)
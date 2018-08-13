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
import PreviewMoviesBlock from "./../PreviewMoviesBlock"
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
      if(i >= 10) return;
      return <li key={elem}><Link className='preview-movies-item' to={`/movies/${elem.id}`}><MoviePreview posterWidth={220} movieData={elem}/></Link></li>
    })

    return <PreviewMoviesBlock>{body}</PreviewMoviesBlock>  
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
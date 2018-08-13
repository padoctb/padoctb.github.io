import React, {Component} from "react"
import PropTypes from 'prop-types'
import "./style.scss"

class MoviePreview extends Component {

  static propTypes = {
    movieData: PropTypes.object.isRequired
  } 

  render() {
    const {vote_average, title, poster_path} = this.props.movieData
    const {posterWidth} = this.props

    return(
      <React.Fragment>
        <img height={posterWidth} alt='preview_img' src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
        <h3 className='preview-movies-item__title'>{title}</h3>
        <span className='preview-movies-item__vote-average'>Vote Average: <b>{vote_average}</b></span>
      </React.Fragment>
    )
  }
}

export default MoviePreview
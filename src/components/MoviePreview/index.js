import React, {Component} from "react"
import PropTypes from 'prop-types'
import "./style.scss"
import {Link} from 'react-router-dom'

class MoviePreview extends Component {

  static propTypes = {
    movieData: PropTypes.object.isRequired
  } 

  render() {
    const {vote_average, title, poster_path} = this.props.movieData
    const {posterWidth, link} = this.props

    return(
      <React.Fragment>
        <Link className='preview-movies-item' to={link}>
          <img height={posterWidth} alt='preview_img' src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
          <h3 className='preview-movies-item__title'>{title}</h3>
          <span className='preview-movies-item__vote-average'>Vote Average: <b>{vote_average}</b></span>
        </Link>
      </React.Fragment>
    )
  }
}

export default MoviePreview
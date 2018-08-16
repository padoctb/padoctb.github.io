import React, {Component} from "react"
import PropTypes from 'prop-types'
import "./style.scss"
import {loadMovieDetails, changeFavorites} from "./../../action_creators"
import {connect} from "react-redux"
import {getMovieDetails, movieInFavorites} from "./../../selectors"
import Loader from "./../Loader"
import MoviePreview from "./../MoviePreview"
import MoviesListBlock from "./../MoviesListBlock"

class Movie extends Component {

  static propTypes = {
    movieId: PropTypes.string.isRequired,
    movieDetails: PropTypes.object,
    movieInFavorites: PropTypes.bool.isRequired
  } 

  render() {
    return(
      <React.Fragment>
        {this.body}
      </React.Fragment>
    )
  }

  get body() {
    const {movieDetails, movieInFavorites} = this.props

    if(!movieDetails || !movieDetails.title) return <Loader/>;

    const recommendList = movieDetails.recommend ? movieDetails.recommend.map((elem, i) => {
      if(i >= 5) return null;
      return <li key={elem.id}><MoviePreview link={`/movies/${elem.id}`} posterWidth={220} movieData={elem}/></li>
    }) : null

    const genres = movieDetails.genres ? movieDetails.genres.map((elem, i, arr) => {
      let comma = ++i === arr.length ? '' : ', '
      return <span key={elem.id}>{elem.name + comma}</span>
    }) : null

    return(
      <React.Fragment>
        <div className="movie-details__wrapper">
          <img className="movie-details__poster" width='300' alt='movie__poster' src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}/>
          <div className="movie-details__details-container">

          <button onClick={this.changeFavorites} className={movieInFavorites ? 
            "movie-details__add-favorites-btn movie-details__add-favorites-btn--active" 
            : "movie-details__add-favorites-btn"}>
            {movieInFavorites ? 'Remove from favorites' : 'Add to favorites'}
          </button>

            <div className="movie-details__title">
              <h2>{movieDetails.title}</h2>
              <span className="movie-details__release-title">{movieDetails.release_date.slice(0,4)}</span>
            </div>

            <div className="movie-details__detail">
              <h4 className="movie-details__detail-title">
                Tagline:
              </h4>
              <span>{movieDetails.tagline ? movieDetails.tagline : 'No information'}</span>
            </div>

            <div className="movie-details__detail">
              <h4 className="movie-details__detail-title">
                Description:
              </h4>
              <span>{movieDetails.overview ? movieDetails.overview : 'No information'}</span>
            </div>

            <div className="movie-details__detail">
              <h4 className="movie-details__detail-title">
                Genres:
              </h4>
              <span>{genres ? genres : 'No information'}</span>
            </div>

            <div className="movie-details__detail">
              <h4 className="movie-details__detail-title">
                Budget:
              </h4>
              <span>{movieDetails.budget ? movieDetails.budget + "$" : 'No information'}</span>
            </div>

            <div className="movie-details__detail">
              <h4 className="movie-details__detail-title">
                Release Date:
              </h4>
              <span>{movieDetails.release_date ? movieDetails.release_date : 'No information'}</span>
            </div>

            {movieDetails.homepage ? 
              <div className="movie-details__detail">
              <h4 className="movie-details__detail-title">
                Homepage:
              </h4>
              <a href={movieDetails.homepage}>{movieDetails.homepage.split('/')[2]}</a>
            </div> : null}
          </div>
        </div>
          <div className="movie-details__recommend">
            <h2 className="movie-details__recommend-title">Recommended Movies:</h2>
            <MoviesListBlock>
              {recommendList ? recommendList : <Loader/>}
            </MoviesListBlock>
          </div>
      </React.Fragment>
      )
  }

  changeFavorites = () => {
    const {poster_path, id, title, vote_average} = this.props.movieDetails.toObject()

    this.props.changeFavorites({poster_path, id, title, vote_average})
  }

  componentDidMount() {
    if(!this.props.movieDetails) this.props.loadMovieDetails(this.props.movieId)
  }
}

export default connect((store, ownProps) => {
  return {
    movieDetails: getMovieDetails(store, ownProps),
    movieInFavorites: movieInFavorites(store, ownProps)
  }
}, {
  loadMovieDetails,
  changeFavorites
})(Movie)
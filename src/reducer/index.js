import {combineReducers} from 'redux'
import indexPreviewMovieList from './indexPreviewMovieList.js'
import categoryMoviesList from './categoryMoviesList.js'
import movieDetail from "./movieDetail.js"
import favoritesMovies from "./favoritesMovies.js"

export default combineReducers({
  indexPreviewMovieList,
  categoryMoviesList,
  movieDetail,
  favoritesMovies
})
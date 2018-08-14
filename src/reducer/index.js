import {combineReducers} from 'redux'
import indexPreviewMovieList from './indexPreviewMovieList.js'
import categoryMoviesList from './categoryMoviesList.js'
import movieDetail from "./movieDetail.js"

export default combineReducers({
  indexPreviewMovieList,
  categoryMoviesList,
  movieDetail
})
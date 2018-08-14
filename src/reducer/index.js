import {combineReducers} from 'redux'
import indexPreviewMovieList from './indexPreviewMovieList.js'
import categoryMoviesList from './categoryMoviesList.js'

export default combineReducers({
  indexPreviewMovieList,
  categoryMoviesList
})
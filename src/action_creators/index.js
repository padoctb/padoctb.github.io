import {
  PREVIEW_MOVIES_LOADED,
  PREVIEW_MOVIES_ERROR
} from './../constants'

export function loadPreviewMoviesList(category) {

  return (dispatch, getState) => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US&page=1`)
      .then(res => res.json())
      .then(res => dispatch({
        type: PREVIEW_MOVIES_LOADED,
        payload: category,
        response: res.results
      }))
      .catch(error => dispatch({
        type: PREVIEW_MOVIES_ERROR,
        payload: error
      }))
  }
}
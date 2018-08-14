import {
  PREVIEW_MOVIES,
  LOADED,
  ERROR,
  CATEGORY_MOVIES,
  LOAD_START
} from './../constants'

export function loadPreviewMoviesList(category) {

  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US&page=1`)
      .then(res => res.json())
      .then(res => dispatch({
        type: PREVIEW_MOVIES + LOADED,
        payload: category,
        response: res.results
      }))
      .catch(error => dispatch({
        type: PREVIEW_MOVIES + ERROR,
        payload: error
      }))
  }
}

export function loadCategoryMoviesList(category, page) {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_MOVIES + LOAD_START,
      payload: category
    })

    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US&page=${page}`)
      .then(res => res.json())
      .then(res => dispatch({
        type: CATEGORY_MOVIES + LOADED,
        payload: {
          page,
          category
        },
        response: res
      }))
  }
}
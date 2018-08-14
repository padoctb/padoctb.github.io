import {
  PREVIEW_MOVIES,
  LOADED,
  ERROR,
  CATEGORY_MOVIES,
  LOAD_START,
  MOVIE,
  MOVIE__RECOMMEND
} from './../constants'
import history from './../history'
import isNumeric from "./../tools/misc/isNumeric"

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

export function loadCategoryMoviesList(category, page, totalPages) {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_MOVIES + LOAD_START,
      payload: category
    })

    //catch incorrect url
    if(+page < 1) return history.push(`/category/${category}/1`);
    if(!isNumeric(+page)) return history.push(`/category/${category}/1`); 

    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US&page=${page}`)
      .then(res => res.json())
      .then(res => {
        if(+page > res.total_pages) return history.push(`/category/${category}/${res.total_pages}`);
        dispatch({
        type: CATEGORY_MOVIES + LOADED,
        payload: {
          page,
          category
        },
        response: res
      })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function loadMovieDetails(movieId) {
  return (dispatch) => {
    dispatch({
      type: MOVIE + LOAD_START,
      payload: movieId
    })

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US`)
      .then(res => res.json())
      .then(res => dispatch({
        type: MOVIE + LOADED,
        payload: movieId,
        response: res
      }))
      .then(res => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=b6d2e3a714047dd33bb390fcbc6cdc5f&language=en-US&page=1`)
          .then(res => res.json())
          .then(res => dispatch({
            type: MOVIE__RECOMMEND + LOADED,
            payload: movieId,
            response: res
          }))
      })
      .catch(error => console.log(error))
  }
}
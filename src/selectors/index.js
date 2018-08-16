export const getPreviewMoviesList = (store, {category}) => {
  return store.indexPreviewMovieList[category].entities.valueSeq().toArray()
}
export const getPreviewMoviesLoadedStatus = (store, {category}) => store.indexPreviewMovieList[category].loaded


export const getCategoryMoviesList = (store, {categoryLoad, page}) => {
  if(store.categoryMoviesList.get(categoryLoad)) {
    return store.categoryMoviesList.get(categoryLoad).entities.get(page)
  }
}
export const getCategoryMoviesTotalPages = (store, {categoryLoad}) => {
  if(store.categoryMoviesList.get(categoryLoad)) {
    return store.categoryMoviesList.get(categoryLoad).totalPages
  }
}

export const getMovieDetails = (store, {movieId}) => {
  if(!store.movieDetail.get(movieId)) return;
  return store.movieDetail.get(movieId)
}

export const movieInFavorites = (store, {movieId}) => {
  return Object.keys(store.favoritesMovies).indexOf(movieId) >= 0 ? true : false
}

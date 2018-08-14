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

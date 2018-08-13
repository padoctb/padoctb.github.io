export const getPreviewMoviesList = (store, {category}) => {
  return store.indexPreviewMovieList[category].entities.valueSeq().toArray()
}
export const getPreviewMoviesLoadedStatus = (store, {category}) => store.indexPreviewMovieList[category].loaded

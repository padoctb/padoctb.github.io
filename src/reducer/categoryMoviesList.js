import {Record, Map} from 'immutable'
import setIdKeyObj from "./../tools/misc/setIdKeyObj.js"
import {PreviewMovie} from './indexPreviewMovieList.js'
import {
  CATEGORY_MOVIES,
  LOADED,
  LOAD_START
} from './../constants'

const CategoryData = Record({
  entities: new Map({}),
  totalPages: 0
})

const CategoriesList = new Map({})

export default (prevState = CategoriesList, action) => {
  const {type, payload, response} = action

  switch (type) {
    case CATEGORY_MOVIES + LOAD_START:
      if(prevState.get(payload) !== undefined) return prevState;
      return prevState.set(payload, CategoryData({}))

    case CATEGORY_MOVIES + LOADED:
      return prevState
      .setIn([payload.category, 'entities', payload.page], setIdKeyObj(response.results, PreviewMovie))
      .setIn([payload.category, 'totalPages'], response.total_pages)

    default:
      return prevState
  }
}
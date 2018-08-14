import {Record} from 'immutable'
import setIdKeyObj from "./../tools/misc/setIdKeyObj.js"
import {
  PREVIEW_MOVIES,
  LOADED,
  ERROR
} from './../constants'

export const PreviewMovie = Record({
  id: null,
  vote_average: 0,
  title: null,
  poster_path: null
})

const PreviewMoviesInfo = Record({
  entities: setIdKeyObj([], PreviewMovie),
  loaded: null,
  error: null
})

const PreviewsList = new Record({
  popular: new PreviewMoviesInfo({}),
  top_rated: new PreviewMoviesInfo({}),
  upcoming: new PreviewMoviesInfo({})
})

export default (prevState = new PreviewsList({}), action) => {
  const {type, payload, response} = action

  switch (type) {
    case PREVIEW_MOVIES + LOADED:
      return prevState
        .setIn([payload, 'entities'], setIdKeyObj(response, PreviewMovie))
        .setIn([payload, 'loaded'], true)
        
    case PREVIEW_MOVIES + ERROR:
      return prevState.setIn([payload, 'error'], payload)

    default:
      return prevState
  }
}
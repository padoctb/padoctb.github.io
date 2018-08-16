import {Map, Record} from "immutable"
import {
  MOVIE,
  LOADED,
  LOAD_START,
  MOVIE__RECOMMEND
} from './../constants'

const MovieRecord = Record({
  poster_path: null,
  overview: null,
  title: null,
  homepage: null,
  budget: 0,
  tagline: null,
  vote_average: 0,
  release_date: null,
  genres: [],
  id: null,
  recommend: []
})

export default (prevState = new Map({}), action) => {
  const {type, payload, response} = action

  switch (type) {
    case MOVIE + LOAD_START:
      if(!!prevState.get(payload)) return prevState;
      return prevState.set(payload, new MovieRecord({}))

    case MOVIE__RECOMMEND + LOADED:
      return prevState.setIn([payload, 'recommend'], response.results)

    case MOVIE + LOADED:
      return prevState.set(payload, new MovieRecord(response))

    default:
      return prevState
  }
}
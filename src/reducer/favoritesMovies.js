import {CHANGE_FAVORITES} from "./../constants"

export default (prevState = {...localStorage}, action) => {
  const {type, payload} = action

  switch (type) {

    case CHANGE_FAVORITES:
      let favoritesList = JSON.parse(localStorage.favoritesMovies);

      if(Object.keys(favoritesList).indexOf(payload.id.toString()) >= 0) { // if movieId in localhost
        delete favoritesList[payload.id]
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesList))
      }
      else {
        favoritesList[payload.id] = payload
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesList))
      }

      return {...JSON.parse(localStorage.favoritesMovies)}

    default:
      if(!localStorage.favoritesMovies) localStorage.setItem('favoritesMovies', JSON.stringify({}));
      return {...JSON.parse(localStorage.favoritesMovies)}
  }
}
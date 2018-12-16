const initialState = {
  favourites: []
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVOURITE_MOVIES':
      return Object.assign({}, state, {
        favourites: action.favouriteMovies
      })
    default:
      return state
  }
}

export default favouritesReducer

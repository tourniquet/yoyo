const initialState = {
  favourites: []
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FAVOURITE_MOVIES':
      return Object.assign({}, state, {
        favourites: action.favouriteMovies
      })
    default:
      return state
  }
}

export default favouriteReducer

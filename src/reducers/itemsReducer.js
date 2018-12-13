const initialState = {
  movies: ''
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return Object.assign({}, state, {
        movies: action.value.results
      })
    case 'SWITCH_FAVOURITE_STATUS':
      return Object.assign({}, state, {
        movies: state.movies.map(movie =>
          (movie.id === Number(action.id)) ? {...movie, favourite: !movie.favourite} : movie
        )
      })
    default:
      return state
  }
}

export default itemsReducer

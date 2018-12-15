const initialState = {
  movies: []
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return Object.assign({}, state, {
        movies: action.results
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

export default moviesReducer

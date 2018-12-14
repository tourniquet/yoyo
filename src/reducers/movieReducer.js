const initialState = {
  movie: {}
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_DATA':
      return Object.assign({}, state, {
        movie: action.movie
      })
    default:
      return state
  }
}

export default movieReducer

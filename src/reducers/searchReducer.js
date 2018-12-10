const initialState = {
  query: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY':
      return Object.assign({}, state, {
        query: action.value
      })
    default:
      return state
  }
}

export default searchReducer

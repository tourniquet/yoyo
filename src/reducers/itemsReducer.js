const initialState = {
  items: ''
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return Object.assign({}, state, {
        items: action.value.results
      })
    default:
      return state
  }
}

export default itemsReducer

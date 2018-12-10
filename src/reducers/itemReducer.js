const initialState = {
  item: ''
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASSIGN_ITEM_DATA':
      return Object.assign({}, state, {
        item: action.value
      })
    default:
      return state
  }
}

export default itemReducer

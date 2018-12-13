const initialState = {
  items: ''
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return Object.assign({}, state, {
        items: action.value.results
      })
    case 'SWITCH_FAVOURITE_STATUS':
      return Object.assign({}, state, {
        items: state.items.map(item =>
          (item.id === Number(action.id)) ? {...item, favourite: !item.favourite} : item
        )
      })
    default:
      return state
  }
}

export default itemsReducer

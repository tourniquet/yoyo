import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import Search from './Pages/Search/'

// reducers
import itemReducer from './reducers/itemReducer'
import searchReducer from './reducers/searchReducer'

const combineReducer = combineReducers({
  itemReducer,
  searchReducer
})

const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () =>
  <Provider store={store}>
    <div>
      <Search />
    </div>
  </Provider>

render(
  <App />,
  document.querySelector('#container')
)

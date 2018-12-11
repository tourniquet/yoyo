import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Search from './Pages/Search/'

// reducers
import itemsReducer from './reducers/itemsReducer'
import searchReducer from './reducers/searchReducer'

const combineReducer = combineReducers({
  itemsReducer,
  searchReducer
})

const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () =>
  <Provider store={store}>
    <Switch>
      <Route path='/' component={Search} />
    </Switch>
  </Provider>

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#container')
)

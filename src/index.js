import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Favourites from './Pages/Favourites/'
import MoviePage from './Pages/Movie/'
import Search from './Pages/Search/'

// reducers
import favouritesReducer from './reducers/favouritesReducer'
import moviesReducer from './reducers/moviesReducer'
import movieReducer from './reducers/movieReducer'
import searchReducer from './reducers/searchReducer'

const combineReducer = combineReducers({
  favouritesReducer,
  movieReducer,
  moviesReducer,
  searchReducer
})

const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () =>
  <Provider store={store}>
    <Switch>
      <Route path='/' exact component={Search} />
      <Route path='/favourites' component={Favourites} />
      <Route path='/movie/:id(\d+)' component={MoviePage} />
    </Switch>
  </Provider>

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#container')
)

import React from 'react'
import { connect } from 'react-redux'

// components
import ToggleFavourite from '../../Components/ToggleFavourite'

const mapStateToProps = state => ({
  favourites: state.favouritesReducer.favourites,
  movies: state.moviesReducer.movies,
  query: state.searchReducer.query
})

const Search = ({ dispatch, movies, query }) => {
  const setQuery = el => ({
    type: 'SEARCH_QUERY',
    value: el.target.value
  })

  const requestData = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4cb1eeab94f45affe2536f2c684a5c9e&query=${query}`

    window.fetch(url)
      .then(res => res.json())
      .then(result => dispatch(fetchMovies(result)))
      .catch(error => console.error(error))
  }

  const fetchMovies = data => ({
    type: 'FETCH_MOVIES',
    results: data.results
  })

  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol class='breadcrumb'>
          <li class='breadcrumb-item active'>
            Home
          </li>
          <li
            class='breadcrumb-item'
            aria-current='page'
          >
            <a href='/favourites'>Favourites</a>
          </li>
        </ol>
      </nav>

      <div className='input-group mb-3'>
        <input
          className='form-control'
          onChange={event => dispatch(setQuery(event))}
          onKeyDown={event => (event.keyCode === 13 && event.target.value) ? requestData() : null}
          placeholder='Movie title'
          type='search'
          value={query}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            onClick={requestData}
            type='button'
          >
            Search
          </button>
        </div>
      </div>

      <ul className='list-group list-group-flush'>
        { movies &&
          movies.map(movie => (
            <li
              className='list-group-item'
              key={movie.id}
            >
              <ToggleFavourite movie={movie} />

              <a href={`/movie/${movie.id}`}>
                {movie.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Search)

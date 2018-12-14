import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// components
import Button from '../../components/Button/'

const StyledListItem = styled.li`
  list-style-type: none;
`

const mapStateToProps = state => ({
  query: state.searchReducer.query,
  movies: state.itemsReducer.movies
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
      .then(result => dispatch(setItem(result)))
      .catch(error => console.error(error))
  }

  const setItem = data => ({
    type: 'FETCH_ITEMS',
    value: data
  })

  const switchFavouriteStatus = movie => {
    const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'))
    if (!favouriteMovies) window.localStorage.setItem('favourites', JSON.stringify([]))

    if (favouriteMovies) {
      const existingMovie = favouriteMovies.filter(item => item.id === movie.id)

      if (!existingMovie.length) {
        favouriteMovies.push(movie)
        window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies))
      }

      if (existingMovie.length) {
        const newFavouriteMoviesList = favouriteMovies.filter(item => item.id !== existingMovie[0].id)
        window.localStorage.setItem('favourites', JSON.stringify(newFavouriteMoviesList))
      }
    } else {
      window.localStorage.setItem('favourites', JSON.stringify([movie]))
    }
  }

  return (
    <div>
      <input
        type='search'
        value={query}
        onChange={event => dispatch(setQuery(event))}
        onKeyDown={event => (event.keyCode === 13 && event.target.value) ? requestData() : null}
      />

      <Button
        onClick={requestData}
      >
        Search
      </Button>

      <ul>
        { movies &&
          movies.map(movie => (
            <StyledListItem
              key={movie.id}
            >
              <Button
                onClick={() => switchFavouriteStatus(movie)}
              >
                S
              </Button>
              <h4>
                {movie.title}
              </h4>
            </StyledListItem>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Search)

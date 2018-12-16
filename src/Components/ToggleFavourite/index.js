import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  favourites: state.favouritesReducer.favourites
})

const ToggleFavourite = ({ className, dispatch, glyph, movie }) => {
  const dispatchAction = favouriteMovies => ({
    type: 'SET_FAVOURITE_MOVIES',
    favouriteMovies
  })

  const toggleFavouriteStatus = movie => {
    const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'))
    // if the webpage is accessed for the first time, we need to create a new record in localStorage
    if (!favouriteMovies) window.localStorage.setItem('favourites', JSON.stringify([]))

    if (favouriteMovies) {
      // checking if movie is already in favourites list
      const existingMovie = favouriteMovies.filter(item => item.id === movie.id)

      if (!existingMovie.length) {
        favouriteMovies.push(movie)
        window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies))

        // using this dispatch to update and rerender view after a movie is added to favourites list
        dispatch(dispatchAction(favouriteMovies))
      }

      if (existingMovie.length) {
        // if movie is already in favourite list, then we remove it
        const newFavouriteMoviesList = favouriteMovies.filter(item => item.id !== existingMovie[0].id)
        window.localStorage.setItem('favourites', JSON.stringify(newFavouriteMoviesList))

        dispatch(dispatchAction(newFavouriteMoviesList))
      }
    } else {
      window.localStorage.setItem('favourites', JSON.stringify([movie]))
    }
  }

  return (
    <span
      className={`oi ${className}`}
      data-glyph={glyph}
      onClick={() => toggleFavouriteStatus(movie)}
    />
  )
}

export default connect(mapStateToProps)(ToggleFavourite)

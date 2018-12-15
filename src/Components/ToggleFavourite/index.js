import React from 'react'

const ToggleFavourite = ({ movie }) => {
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
    <span
      class='oi'
      data-glyph='x'
      onClick={() => switchFavouriteStatus(movie)}
    />
  )
}

export default ToggleFavourite

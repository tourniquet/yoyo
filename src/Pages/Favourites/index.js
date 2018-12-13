import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  favourites: state.favouriteReducer.favourites
})

class Favourites extends Component {
  getFavouritesMoviesFromLocalStorage () {
    const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'))

    if (!favouriteMovies) window.localStorage.setItem('favourites', JSON.stringify([]))

    return {
      type: 'GET_FAVOURITE_MOVIES',
      favouriteMovies
    }
  }

  componentDidMount () {
    this.props.dispatch(this.getFavouritesMoviesFromLocalStorage())
  }

  render () {
    return (
      <ul>
        { this.props.favourites &&
          this.props.favourites.map(movie =>
            <li key={movie.id}>
              <a
                href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=4cb1eeab94f45affe2536f2c684a5c9e`}
              >
                {movie.title}
              </a>
            </li>
          )
        }
      </ul>
    )
  }
}

export default connect(mapStateToProps)(Favourites)

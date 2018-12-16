import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import ToggleFavourite from '../../Components/ToggleFavourite'

const mapStateToProps = state => ({
  favourites: state.favouritesReducer.favourites
})

class Favourites extends Component {
  getFavouritesMoviesFromLocalStorage () {
    const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'))

    if (!favouriteMovies) window.localStorage.setItem('favourites', JSON.stringify([]))

    return {
      type: 'SET_FAVOURITE_MOVIES',
      favouriteMovies
    }
  }

  componentDidMount () {
    this.props.dispatch(this.getFavouritesMoviesFromLocalStorage())
  }

  render () {
    const { favourites } = this.props

    return (
      <div>
        <nav aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item active'>
              <a href='/'>Home</a>
            </li>
            <li
              class='breadcrumb-item active'
              aria-current='page'
            >
              Favourites
            </li>
          </ol>
        </nav>

        <ul className='list-group list-group-flush'>
          { favourites &&
            favourites.map(movie =>
              <li
                className='list-group-item'
                key={movie.id}
              >
                <ToggleFavourite
                  className='favourite'
                  glyph='x'
                  movie={movie}
                />

                <a href={`/movie/${movie.id}`}>
                  {movie.title}
                </a>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Favourites)

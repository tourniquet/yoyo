import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  items: state.favouriteReducer.items
})

class Favourites extends Component {
  getFavouritesMoviesFromLocalStorage () {
    const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'))

    if (!favouriteMovies) window.localStorage.setItem('some', JSON.stringify([]))

    return {
      action.type: ''
    }

    console.log(favouriteMovies)
    // const movie = {id, title}

    // if (favouriteMovies.length) {
    // favouriteMovies.push(movie)
    // window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies))
    // }
  }

  componentDidMount () {
    this.getFavouritesMoviesFromLocalStorage()
  }

  render () {
    return (
      <div>
        Hello, world!
      </div>
    )
  }
}

export default connect(mapStateToProps)(Favourites)

import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  items: state.favouriteReducer.items
})

class Favourites extends Component {
  getFavouritesMoviesFromLocalStorage () {

  }

  componentDidMount () {

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

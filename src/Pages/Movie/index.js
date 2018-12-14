import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  movie: state.movieReducer.movie
})

class MoviePage extends Component {
  getMovieData () {
    const id = this.props.match.params.id
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4cb1eeab94f45affe2536f2c684a5c9e`

    window.fetch(url)
      .then(res => res.json())
      .then(movie => {
        this.props.dispatch({
          type: 'FETCH_MOVIE_DATA',
          movie
        })
      })
      .catch(error => console.error(error))
  }

  componentDidMount () {
    this.getMovieData()
  }

  render () {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MoviePage)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Image = styled.img`
  float: left;
  margin-right: 10px;
`

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
    const { movie } = this.props

    return (
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>{movie.title}</h1>
          <p className='lead'>
            { movie.poster_path &&
              <Image src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
            }
            {movie.overview}
          </p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MoviePage)

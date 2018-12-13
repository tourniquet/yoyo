import React from 'react'
import fetch from 'node-fetch'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// components
import Button from '../../components/Button/'

const StyledListItem = styled.li`
  list-style-type: none;
`

const mapStateToProps = state => ({
  query: state.searchReducer.query,
  items: state.itemsReducer.items
})

const Search = ({ dispatch, items, query }) => {
  const setQuery = el => ({
    type: 'SEARCH_QUERY',
    value: el.target.value
  })

  const requestData = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4cb1eeab94f45affe2536f2c684a5c9e&query=${query}`

    fetch(url)
      .then(res => res.json())
      .then(result => dispatch(setItem(result)))
      .catch(error => console.error(error))
  }

  const setItem = data => ({
    type: 'FETCH_ITEMS',
    value: data
  })

  const switchFavouriteStatus = (id, title) => {
    const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites')) || []
    const movie = {id, title}

    if (favouriteMovies.length) {
      favouriteMovies.push(movie)
      window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies))
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
        { items &&
          items.map(item => (
            <StyledListItem
              key={item.id}
            >
              <Button
                onClick={() => switchFavouriteStatus(item.id, item.title)}
              >
                S
              </Button>
              <h4>
                <Link
                  to={{ pathname: `/item/${item}` }}
                >
                  {item.title}
                </Link>
              </h4>
            </StyledListItem>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Search)

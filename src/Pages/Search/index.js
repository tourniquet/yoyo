import React from 'react'
import fetch from 'node-fetch'
import { connect } from 'react-redux'

// components
import Button from '../../components/Button/'

const mapStateToProps = state => ({
  query: state.searchReducer.query,
  item: state.itemReducer.item
})

const Search = ({ dispatch, query }) => {
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
    type: 'ASSIGN_ITEM_DATA',
    value: data
  })

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={event => dispatch(setQuery(event))}
      />

      <Button
        onClick={requestData}
      >
        Search
      </Button>
    </div>
  )
}

export default connect(mapStateToProps)(Search)

import React from 'react'
import fetch from 'node-fetch'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// components
import Button from '../../components/Button/'

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

      <ul>
        { items &&
          items.map(item => (
            <li
              key={item.id}
            >
              <h4>
                <Link
                  to={{ pathname: `/item/${item}` }}
                >
                  {item.title}
                </Link>
              </h4>

              <p className='overview'>
                {item.overview}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Search)

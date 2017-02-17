import React from 'react'
import { Provider } from 'react-redux'
import { Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match exactly pattern='/' component={Landing} />
        <Match
          pattern='/search'
          component={(props) => <Search shows={preload.shows} {...props} />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props.params.id === show.imdbID)

            return <Details show={shows[0]} {...props} />
            }}
        />
      </div>
    </Provider>
  )
}

export default App

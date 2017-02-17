import React from 'react'
import { connect } from 'react-redux'

const { arrayOf, shape, string } = React.PropTypes

import ShowCard from './ShowCard'
import Header from './Header'

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => <ShowCard key={show.imdbID} {...show} />
          )}
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)

import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm, clearSearchTerm } from './actionCreators'

const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  },
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
  },
  handleClick (e) {
    this.props.dispatch(clearSearchTerm)
  },
  render: function () {
    return (
      <div className='landing'>
        <h1>sVideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            value={this.props.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='Search'
          />
          <Link to='/search' onClick={this.handleClick}>or Browse All</Link>
        </form>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    clearSearchTerm: state.clearSearchTerm
  }
}

export default connect(mapStateToProps)(Landing)

import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const Landing = React.createClass({
  render: function () {
    return (
      <div className='landing'>
        <h1>sVideo</h1>
        <input
          value={this.props.searchTerm}
          type='text'
          placeholder='Search'
        />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)

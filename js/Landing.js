import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render: function () {
    return (
      <div className='landing'>
        <h1>sVideo</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

export default Landing

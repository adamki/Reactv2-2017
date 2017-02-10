import React from 'react'

const Landing = React.createClass({
  render: function () {
    return (
      <div className='landing'>
        <h1>sVideo</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
      </div>
    )
  }
})

export default Landing

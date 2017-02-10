import React from 'react'

var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      h1({style: {color: this.props.color}}, `Here is a Team Member: ${this.props.title}`)
    )
  }
})

export default MyTitle

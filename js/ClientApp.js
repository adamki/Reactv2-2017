import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='Jarod' color='peru' />
        <MyTitle title='Steven' color='tomato' />
        <MyTitle title='Josh' color='mediumaquamarine' />
        <MyTitle title='Adam' color='rebeccapurple' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

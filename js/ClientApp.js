import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null, [
        MyTitleFactory({title: 'Jarod', color: 'peru'}),
        MyTitleFactory({title: 'Steven', color: 'tomato'}),
        MyTitleFactory({title: 'Josh', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'Adam', color: 'rebeccapurple'})
      ]
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

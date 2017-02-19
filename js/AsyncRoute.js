import React from 'react'
const { object } = React.PropTypes

const AsyncRoute = React.createClass({
  propTypes: {
    props: object,
    loadingPromise: object
  },
  getInitialState () {
    return {
      loaded: false
    }
  },
  componentDidMount () {
    this.props.loadingPromise.then((module) => {
      console.log(this.props.loadingPromise, module)
      this.component = module.default
      this.setState({ loaded: true })
    })
  },
  render: function () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <h1>Loading ... </h1>
    }
  }
})

export default AsyncRoute

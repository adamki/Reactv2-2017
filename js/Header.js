import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  }
  render () {
    let utilSpace

    if (this.props.showSearch) {
      utilSpace = (
        <input
          type='text'
          placeholder='search'
          value={this.props.searchTerm}
          onChange={this.handleSearchTermChange}
        />
      )
    } else {
      utilSpace = (
          <h2>
            <Link to='/search'>
              Back
            </Link>
          </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            sVideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const {func, bool, string} = React.PropTypes

Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)

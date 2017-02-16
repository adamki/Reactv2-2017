import * as types from './actions'

const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.DEFAULT_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer

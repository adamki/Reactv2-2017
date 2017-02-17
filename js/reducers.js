import * as types from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const clearSearchTerm = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const addOMDBdata = (state, action) => {
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case types.CLEAR_SEARCH_TERM:
      return clearSearchTerm(state, action)
    case types.ADD_OMDB_DATA:
      return addOMDBdata(state, action)
    default:
      return state
  }
}

export default rootReducer

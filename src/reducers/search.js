import { ITEMS_SEARCH } from '../actions'
import { dispatch } from '../store'

export default function(state = {searchString: ''}, action) {
  switch (action.type) {
    case ITEMS_SEARCH:
      return {...state, searchString: action.searchString}
    default:
      return state
  }
}

export function search(searchString) {
  return {
    type: ITEMS_SEARCH,
    searchString
  }
}

export const boundSearch = searchString => dispatch(search(searchString))

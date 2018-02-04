import { combineReducers } from 'redux'
import searchReducer from './search'
import itemsReducer from './items'


export default combineReducers({
  search: searchReducer,
  items: itemsReducer
})
import { combineReducers } from 'redux'
import { isChangeReducer } from '../action/OpenModal'
import { handleItemReducer } from '../action/OpenItem'
import { handleURLReducer } from '../action/PokemonURL'
export default combineReducers({
  isChangeReducer,
  handleItemReducer,
  handleURLReducer,
  // itemer :handleItemReducer.item
})
import { combineReducers } from 'redux'
import { isChangeReducer } from '../action/OpenModal'
import { handleItemReducer } from '../action/OpenItem'
import { handleURLReducer } from '../action/PokemonURL'
import { handleValueReducer } from '../action/ValueInput'
export default combineReducers({
  isChangeReducer,
  handleItemReducer,
  handleURLReducer,
  handleValueReducer,
  // itemer :handleItemReducer.item
})
import { connect } from 'react-redux'
import Pokemon from '../component/Pokemon'
import { changeAction } from '../action/OpenModal'
import { getValueAction } from '../action/OpenItem'
import { getURLAction } from '../action/PokemonURL'

const mapStateToProps = (state) => {
  const { isChangeReducer, handleItemReducer, handleURLReducer } = state
  return {
    isChange: isChangeReducer,
    item: handleItemReducer.item,
    url: handleURLReducer.url
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    change: function () {
      const action = changeAction()
      dispatch(action)
    },
    getItem: function (item) {
      const action = getValueAction(item)
      dispatch(action)
    },
    getURL: function (url) {
      const action = getURLAction(url)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
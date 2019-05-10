const ITEM_OPEN = 'action/ITEM'


const initialState ={
  item:[],
}
export const getValueAction = (item) => {
  return{
    type : ITEM_OPEN,
    payload : {
      item,
    }
  }
}
export function handleItemReducer(state = initialState,action){
  switch(action.type){
    case ITEM_OPEN:{
      const { payload } = action
      const newState = {...state}
      newState.item = payload.item;
      return newState
    }
    default:return state
  }
}
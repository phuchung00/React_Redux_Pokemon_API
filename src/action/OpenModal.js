const MODAL_ACTION = 'action/MODAL'

export const isChange = false
export const changeAction = ()=>{
  return {
    type: MODAL_ACTION
  }
}
export const isChangeReducer = (state = isChange, action)=>{
  switch(action.type){
    case MODAL_ACTION:{
      const newState = !state
      return newState
    } 
    default :return state
  }
}
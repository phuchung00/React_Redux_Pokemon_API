const GET_INPUT = "action/GET_INPUT"
const initialState = {
  value:'',
  lavue:[]
}
export const getInputAction = (value) => {
  return {
    type:GET_INPUT,
    payload:{
      value,
    }
  }
}
export function handleValueReducer ( state = initialState, action ) {
  switch(action.type){
    case GET_INPUT:{
      const newState = { ...state }
      const { payload } = action
      newState.value = payload.value
      return newState
    }
    default: return state
  }
}
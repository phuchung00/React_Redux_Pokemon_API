const POKEMON_URL = 'action/POKEMON'
const initialState={
  url:[]
}
export const getURLAction = (url)=>{
  return {
    type: POKEMON_URL,
    payload:{
      url,
    }
  }
}
export function handleURLReducer (state= initialState,action){
  switch(action.type){
    case POKEMON_URL:{
      const { payload } = action
      const newState = {...state}
      newState.url = payload.url
      console.log("Sda")
      return newState
    }
    default:return state
  }
}
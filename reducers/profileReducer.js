import { ADD_PLAYERS } from '../actions/'

const profileReducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {
      case ADD_PLAYERS:
        console.log("REDUCER:")
        console.log(action.payload)
        console.log("   END    ")
        return [...action.payload]
  
      default:
        return state
    }
  }
  
  export default profileReducer
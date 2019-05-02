import { ADD_PLAYERS } from '../actions/'

const profileReducer = (state = [], action) => {
    switch(action.type) {
      case ADD_PLAYERS:
        const { players } = action.payload
        return [...players]
  
      default:
        return state
    }
  }
  
  export default profileReducer
export const ADD_PLAYERS = "ADD_PLAYERS"
export const PLAY_CARD = "PLAY_CARD"

export const addPlayers = (players) => {
    return {
      type: ADD_PLAYERS,
      payload: players // array of {player, team} objects
    }
}

export const playCard = () => {
  return {
    type: PLAY_CARD,
    payload: _ 
  }
}
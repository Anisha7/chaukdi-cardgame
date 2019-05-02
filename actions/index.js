export const ADD_PLAYERS = "ADD_PLAYERS"

export const addPlayers = (players) => {
    return {
      type: ADD_PLAYERS,
      payload: players // array of {player, team} objects
    }
}

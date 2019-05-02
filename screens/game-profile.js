import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux'
import { addPlayers } from '../actions'
import {generateDeck, getHandCards} from '../public/'

class TeamInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setTeamName } = this.props 
    return (
      <TextInput
        style={styles.input}
        onChangeText={(name) => setTeamName(name)}
        placeholder="Enter Team Name"
      />
    );
  }
}

class PlayerInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setPlayerName } = this.props
    return (
      <TextInput
        style={styles.input}
        onChangeText={(name) => setPlayerName(name) }
        placeholder="Enter player name"
      />
    );
  }
}

// profile setup for game
class GameProfileScreen extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        team1 : '',
        player1: '',
        player2: '',
        team2: '',
        player3: '',
        player4: '',
      }
    }
    
    makePlayersArray() {
      const { team1, player1, player2, team2, player3, player4 } = this.state
      let deck = generateDeck()
      const hand1 = getHandCards(deck)
      const hand2 = getHandCards(deck)
      const hand3 = getHandCards(deck)
      const hand4 = getHandCards(deck)
      const players = [
        {player1, team1, hand1},
        {player2, team1, hand2},
        {player3, team2, hand3},
        {player4, team2, hand4}
      ]

      return players
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View styles={styles.container}>
                <Text>Profile</Text>
                {/* team 1 */}
                <Text>Team 1</Text>
                <TeamInput setTeamName={(name) => this.setState({team1: name})}/>
                <PlayerInput setPlayerName={(name) => this.setState({player1: name})}/>
                <PlayerInput setPlayerName={(name) => this.setState({player2: name})}/>

                {/*  team 2  */}
                <Text>Team 2</Text>
                <TeamInput setTeamName={(name) => this.setState({team2: name})}/>
                <PlayerInput setPlayerName={(name) => this.setState({player3: name})}/>
                <PlayerInput setPlayerName={(name) => this.setState({player4: name})}/>

                {/* button to navigate, pass in form values as props */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {
                      // update store values, call action
                      const players = this.makePlayersArray()
                      this.props.addPlayers(players)
                      navigate('Game', this.state)}
                    }
                >
                    <Text style={styles.buttonText}> START GAME </Text>
                </TouchableHighlight>
            </View>
        )
    }
}  

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = () => {
  return {
    addPlayers
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: 20,
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    buttonText: {
      fontSize: 24
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(GameProfileScreen)
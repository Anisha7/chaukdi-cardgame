import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux'
import { addPlayers } from '../actions'

class TeamInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setTeamName, i } = this.props 
    return (
      <TextInput
        style={styles.input}
        onChangeText={(name) => setTeamName(name, i)}
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
    const { setPlayerName, i, team } = this.props
    return (
      <TextInput
        style={styles.input}
        onChangeText={(name) => setPlayerName(name, team, i) }
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
        teams: [''],
        players: ['','','','']
      }
    }
    
    setTeamName(name, i) {
      this.state.teams[i] = name
    }

    setPlayerName(name, team, i) {
      this.state.players[i] = {name, team}
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View styles={styles.container}>
                <Text>Profile</Text>
                {/* team 1 */}
                <Text>Team 1</Text>
                <TeamInput setTeamName={(name, i) => this.setTeamName(name, i)} i={0}/>
                <PlayerInput setPlayerName={(name, team, i) => this.setPlayerName(name, team, i)} team={this.state.team[0]} i={0}/>
                <PlayerInput setPlayerName={(name, team, i) => this.setPlayerName(name, team, i)} team={this.state.team[0]} i={1}/>

                {/*  team 2  */}
                <Text>Team 2</Text>
                <TeamInput setTeamName={(name, i) => this.setTeamName(name, i)} i={1}/>
                <PlayerInput setPlayerName={(name, team, i) => this.setPlayerName(name, team, i)} team={this.state.team[1]} i={2}/>
                <PlayerInput setPlayerName={(name, team, i) => this.setPlayerName(name, team, i)} team={this.state.team[1]} i={3}/>

                {/* button to navigate, pass in form values as props */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {
                      // update store values, call action
                      addPlayers(this.state.players)
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
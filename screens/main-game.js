// tracks and pulls together all data and stack screens for the game play

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'

import {generateDeck, getHandCards} from '../public/'

class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            turn: '',
            currentPlay: [],
            team1Score: 0,
            team2Score: 0,
        }
    }

    render() {
        // access store players array
        console.log("IN GAME:")
        console.log(this.props.players)

        return (
            <View>
                {/* display player name/team and the card they played */}

                {/* who's turn is it in the middle, with a button to play turn */}
                {/* button should lead to 'player-hand' screen */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Mapping props: ")
    console.log(state)
    return {
      players: state // array {player, team}
    }
}

const mapDispatchToProps = () => {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(GameScreen)
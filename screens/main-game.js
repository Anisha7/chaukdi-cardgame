// tracks and pulls together all data and stack screens for the game play

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
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

    playerCards() {
        const { players } = this.props

        return players.map(({ name, player, team, hand }) => {

            const h = hand.join()

            return ( <View>
                        <Text>{player}. {name}</Text>
                        <Text>TEAM: {team}</Text>
                        <Text>CARDS: {h}</Text>
                    </View>)
        })
        // console.log(stuff)
        // return stuff
    }

    render() {
        // access store players array
        console.log("IN GAME:")
        // console.log(this.props.players)
        const { navigate } = this.props.navigation
        if (this.state.turn == '') {
            this.state.turn = this.props.players.filter(({player}) => player == 1)[0].name
        }

        return (
            <View>
                {/* display player name/team and the card they played */}
                {this.playerCards()}
                {/* who's turn is it in the middle, with a button to play turn */}
                <Text> It's {this.state.turn}'s turn </Text>
                {/* button should lead to 'player-hand' screen */}
                <Button 
                    title="Play Turn"
                    // onpress isnt right??
                    // <3
                    onPress={() => navigate('PlayerHand', { turn: this.state.turn })}

                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Mapping props: ")
    console.log(state)
    return {
      players: state.profile // array {player, team}
    }
}

const mapDispatchToProps = () => {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(GameScreen)
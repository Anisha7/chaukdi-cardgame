// tracks and pulls together all data and stack screens for the game play

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {generateDeck, getHandCards} from '../public/'

class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1: {hand: [], curr: ''},
            player2: {hand: [], curr: ''},
            player3: {hand: [], curr: ''},
            player4: {hand: [], curr: ''}
        }
        this.init()
    }

    init() {
        let deck = generateDeck()
        let hand = getHandCards(deck)
        this.setState({player1: hand})
        hand = getHandCards(deck)
        this.setState({player3: hand})
        hand = getHandCards(deck)
        this.setState({player2: hand})
        hand = getHandCards(deck)
        this.setState({player4: hand})
        console.log(deck) // should be empty
    }

    render() {
        return (
            <View>
                {/* display player name/team and the card they played */}

                {/* who's turn is it in the middle, with a button to play turn */}
                {/* button should lead to 'player-hand' screen */}
            </View>
        )
    }
}

export default GameScreen
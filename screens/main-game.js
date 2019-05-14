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
            turnIndex: 1,
        }
        
    }

    playerCards() {
        const { players } = this.props

        return players.map(({ name, player, team, hand }) => {

            // const h = hand.join()

            return ( <View key={name}>
                        <Text>{player}. {name}</Text>
                        <Text>TEAM: {team}</Text>
                        {/* <Text>CARDS: {h}</Text> */}
                    </View>)
        })
        // console.log(stuff)
        // return stuff
    }

    setCard(players) {
        // which card was selected: change turn
        const selectedCard = this.props.navigation.getParam('selectedCard', null)
        console.log(selectedCard)
        // ADD TO IF: SELECTED CARD IS NOT ALREADY IN CURRENT PLAY
        if (selectedCard !== null && this.state.currentPlay.includes(selectedCard) !== true) {
            this.state.currentPlay.push(selectedCard) // works
            // update turn index
            console.log("HERE")
            if (this.state.turnIndex == 4) {
                console.log("PAST INDEX LIMIT")
                this.setState({turnIndex: 1})
            } else {
                console.log("UPDATING TURN INDEX")
                let newIndex = this.state.turnIndex + 1
                // this.setState({turnIndex: newIndex}) // not working
                this.state.turnIndex = newIndex
                console.log(this.state.turnIndex)
            }
            let item = players.filter(({player}) => player == this.state.turnIndex)[0]
            console.log(item[0])
            this.setState({turn: item.name})
        }
    }

    render() {
        // access store players array
        console.log("IN GAME:")
        // console.log(this.props.players)
        const { navigate } = this.props.navigation
        const { players } = this.props
        if (this.state.turn == '') {
            // this.state.turn = players.filter(({player}) => player == 1)[0].name
            let item = players.filter(({player}) => player == this.state.turnIndex)[0]
            console.log(item[0])
            this.setState({turn: item.name})

        }

        this.setCard(players)
        
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

                <Text> CURRENT PLAY </Text>
                <Text> {this.state.currentPlay.join()}</Text>
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
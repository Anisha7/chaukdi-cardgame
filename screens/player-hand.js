import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'

class PlayerHand extends Component {
    constructor(props) {
        super(props)
        // pass in player name as props or in constructor?
    }

    getData() {
        console.log("Getting data")
        const turn = this.props.navigation.getParam('turn', 'turn missing')
        const { players } = this.props
        const data = players.filter(({ name }) => {
           return name == turn
        })
        console.log("Here: ", data)
        // get player's cards, name, team
        return data[0]
    }

    createCardForm() {
        // create a form that allows player to pick a card
        return
    }

    render(){
        console.log("PLAYER HAND PAGE")
        const data = this.getData()
        console.log(data)
        const { name, player, team, hand } = data
        console.log(name, player, team, hand)
        // this.props.navigation.state.params // {hand:'turn...'}
        // render page for particular player
        // allow player to choose a card
        return (
            <View>
                <Text>Player {player}: {name}</Text>
                <Text>TEAM: {team}</Text>
                <Text>{hand.join()}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps())(PlayerHand)
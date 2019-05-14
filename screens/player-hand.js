import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image } from 'react-native';
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

    cardObjectList(hand) {

        let cards = hand.map((item) => {
            let path = '../assets/cards/'.concat(item).concat('.png')
            console.log(path)
            return (
                <Image key={item} source={{src: path}} style={{width: 200, height: 200, borderWidth: 2, borderColor: 'black'}}/>
            )
        })
        return cards
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
            <View styles={styles.container}>
                <Text>Player {player}: {name}</Text>
                <Text>TEAM: {team}</Text>
                <Text>{hand.join()}</Text>
                <ScrollView
                    style={{height: 500}}
                    horizontal={true} // add for horizontal scroll
                >
                    {/* add the 13 cards in hand here */}
                    
                    {this.cardObjectList(hand)}
                    {/* <Image source={require('../assets/cards/2C.png')} style={{width: 200, height: 200}}/> */}
                
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

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
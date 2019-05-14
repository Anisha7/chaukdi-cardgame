import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,  
    ScrollView, 
    Image, 
    TouchableHighlight 
} from 'react-native';
import { connect } from 'react-redux'
import { images } from '../public/images'

class PlayerHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCard: null,
        }
    }

    getData() {
        const turn = this.props.navigation.getParam('turn', 'turn missing')
        const { players } = this.props
        const data = players.filter(({ name }) => {
           return name == turn
        })
        // get player's cards, name, team
        return data[0]
    }

    cardObjectList(hand) {
        let cards = hand.map((item) => {
            let path = '../assets/cards/'.concat(item).concat('.png')
            console.log(path)
            borderColor = 'black'
            if (item == this.state.selectedCard) {
                borderColor = 'yellow'
            }
            return (
                <TouchableHighlight
                    style={{
                        alignSelf: 'center',
                        height: 200,
                        width: 150,
                        borderWidth: 3,
                        borderColor: borderColor,
                        marginRight: 10,
                    }
                    }
                    onPress={() => this.setState({selectedCard: item})}
                    key = {item}
                    >
                        <Image key={item} 
                            source={images[item]} 
                            style={{
                                alignSelf: 'center',
                                height: 200,
                                width: 150,
                            }}
                            resizeMode="stretch"
                        />
                </TouchableHighlight>
            )
        })
        return cards
    }

    render(){
        const { navigate } = this.props.navigation
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
                    style={{height: 300}}
                    horizontal={true} // add for horizontal scroll
                >
                    {/* the 13 cards in hand here */}
                    
                    {this.cardObjectList(hand)}
                    
                </ScrollView>

                {/* button to play card */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {
                      // send played card to game screen
                      navigate('Game', {selectedCard: this.state.selectedCard})
                    }}
                >
                    <Text style={styles.buttonText}> Play Card </Text>
                </TouchableHighlight>

                {/* View Game Screen Again */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {
                      // send played card to game screen
                      navigate('Game', {selectedCard: null})
                    }}
                >
                    <Text style={styles.buttonText}> View Current Game Play </Text>
                </TouchableHighlight>
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
    picker: {
        alignSelf: 'center',
        height: 150, 
        width: 100,
        margin: 20,
    },
    button: {
        padding: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    buttonText: {
        fontSize: 24
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
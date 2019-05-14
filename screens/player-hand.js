import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Picker, 
    ScrollView, 
    Image, 
    ImageBackground, 
    TouchableHighlight 
} from 'react-native';
import { connect } from 'react-redux'

class PlayerHand extends Component {
    constructor(props) {
        super(props)
        // pass in player name as props or in constructor?
        this.state = {
            selectedCard: null,
        }
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

    createCardForm(hand) {
        // create a form that allows player to pick a card
        return hand.map((item) => {
            return (
                // MITCHELL HELP PLEASE
                // <ImageBackground key={item} source={{uri:'../assets/cards/'.concat(item).concat('.png')}} style={{width: 100, height: 50}}>
                <Picker.Item key={item} label={item} value={item} />
                // </ImageBackground>
            )
        })
    }

    cardObjectList(hand) {

        let cards = hand.map((item) => {
            let path = '../assets/cards/'.concat(item).concat('.png')
            console.log(path)
            return (
                <Image key={item} 
                       source={{uri: path}} 
                       style={{
                        alignSelf: 'center',
                        height: 100,
                        width: 100,
                        borderWidth: 1
                    }}
                      resizeMode="stretch"
                />
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
                    style={{height: 100}}
                    horizontal={true} // add for horizontal scroll
                >
                    {/* add the 13 cards in hand here */}
                    
                    {this.cardObjectList(hand)}
                    {/* <Image source={require('../assets/cards/2C.png')} style={{width: 200, height: 200}}/> */}

                </ScrollView>
                {/* form for picking a card */}
                <Picker
                    selectedValue={this.state.selectedCard}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedCard: itemValue})
                    }>
                    {this.createCardForm(hand)}
                </Picker>

                {/* button to play card */}
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {
                      // send played card to game screen
                    }}
                >
                    <Text style={styles.buttonText}> Play Card </Text>
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
        height: 50, 
        width: 100,
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
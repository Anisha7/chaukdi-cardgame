import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


// the how to play screen
class RulesScreen extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View styles={styles.container}>
                <Text  styles={styles.title}>Rules of the Game</Text>

                <Text styles={styles.text}>1.  There are 4 players, with 2 teams of 2 players each. Pass the device around to play your turn! </Text>
                <Text styles={styles.text}>2. Each player will have 13 cards in their hand</Text>
                <Text styles={styles.text}>3. On each turn, each person deals one card of the type that has been played OR a power card if they do not have it. The player that plays first decides what type of card this play will be.</Text>
                <Text styles={styles.text}>4. Power card: a power card is chosen by the first player, decided by the roll of a dice on the first game, and on who won previously for the following games.</Text>
                <Text styles={styles.text}>5. The highest card in each play wins the set. The player with the most winning sets at the end of the game wins! </Text>
                <Text styles={styles.text}>6. FUTURE: Points per win and special wins for getting to the win threshold without losing any set (7 sets), Even more points for getting all 13 sets, option to move to next game when 7 sets are reached/throw hand.</Text>
                <Text styles={styles.text}>7. You can surrender the game as well!</Text>
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
      margin: 20,
      
    },
    title: {
      alignSelf: 'center',
      fontSize: 25,
    },
    text: {
      padding: 10,
      fontSize: 20,
      marginLeft: 20,
      marginRight: 20,
    }
  });

  export default RulesScreen;

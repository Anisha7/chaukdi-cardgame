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
                <Text>Rules of the Game</Text>

                <Text>1. </Text>
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
    }
  });

  export default RulesScreen;

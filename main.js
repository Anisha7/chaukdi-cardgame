import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/home-screen';
import GameProfileScreen from './screens/game-profile';
import RulesScreen from './screens/rules';
import GameScreen from './screens/main-game';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: GameProfileScreen },
    Rules: { screen: RulesScreen},
    Game: { screen: GameScreen}
  })

export default createAppContainer(MainNavigator)
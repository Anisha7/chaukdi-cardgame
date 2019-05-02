import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './main'

// import HomeScreen from './screens/home-screen';
// import GameProfileScreen from './screens/game-profile';
// import RulesScreen from './screens/rules';
// import GameScreen from './screens/main-game';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App;
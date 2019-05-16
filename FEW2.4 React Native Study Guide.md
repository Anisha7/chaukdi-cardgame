# FEW2.4 React Native Study Guide

## *Javascript General*
	1. Map: array.map((item) => return modified item)
	2. Filter: array.filter((item) => check if item meets specification)
	3. Reduce: array.reduce((acc, item) => {acc+item}, optional start acc value it item is not int)

## *Native Applications General*
Use cases for native apps vs web apps
	1. Native apps are built for specific devices. This allows for specific functionalities and use of advanced technologies such as GPS. They are effective for game engines, texts, social media, and other on-the-go/simple apps.
	2. Web apps are built to work for all platforms, and thus are restricted to features that would work all-around.  They are also useful when a lot of data/information needs to be displayed, which could be tough to see on a small screen. Some examples would be portfolio sites, shopping platforms, and other data-heavy apps.

## *Electron*
[FEW-2.4-Native-Development-with-JavaScript/Lesson-03.md at master · Make-School-Courses/FEW-2.4-Native-Development-with-JavaScript · GitHub](https://github.com/Make-School-Courses/FEW-2.4-Native-Development-with-JavaScript/blob/master/Lessons/Lesson-03.md)
	* npx create-react-app my-app
	* cd my-app
	* yarn add electron electron-builder —dev
	* yarn add wait-on concurrently —dev
	* yarn add electron-is-dev
	* Add public/electron.js (check link)
	* Add info scripts and root in package.json (check link)
	* Test dev mode: yarn electron-dev								
	* Build your app for production: yarn electron-pack

## *React Native*
	* expo init project-name
	* npm install

## *Write components*
	* Class
`Class classname extends Component { constructor(props){} }`
	* Functions
`const funcname = (object) => { return <TagName />}`

## *Redux*
	* Actions — payloads of information that sends data from application to store
	* Action creators — functions that create actions
	* Reducers — define how actions affect application state
	* Store — tracks application state, allows access to applications state, allows application state to be updated.

## *React Redux*
	* Provider — makes redux store available to any react components nested within `<Provider store={store}> </Provider` AND wrapped in the `connect()` function.
	* Create Connected components
		* connect()() — connects a react component to the redux store, such that it can access and/or make changes to the application state. 
`import { connect } from ‘react-redux’`
`export default connect(mapStateToProps, mapDispatchToProps())(ComponentName)`
		* mapStateToProps() — allows component to access application state ( data in the store ).
`const mapStateToProps = (state) => { players: state.players }`
where players is defined in the reducer, and thus, can be accessed through state.players. 
		* mapActionsToProps() — allows component to change state using defined actions. 
`const mapDispatchToProps = () => {addPlayers}`
where addPlayers is an action defined in actions file.

## *Implement Native Components*
	* ScrollView
`<ScrollView style={{height: 300}} horizontal={true} > --content for scrolling goes here-- </ScrollView>`
Note: add horizontal property for a horizontal scroll. Vertical scroll occurs by default.
	* FlatList
`<FlatList  data={data_array} renderItem={({item}) => <Component item={item} />} keyExtractor={(item, index) => '${index}-${item.key}}'/>`
		* Data contains an array of objects.
		* renderItem specifies how the items in the array should be displayed.
		* keyExtractor assigns a key to each component/item added to FlatList. 

## *React Navigation*
	* Stack Navigator — creates a stack of all screens that your app navigates between. Navigation’s navigate method can then be used on buttons in pages to switch to a different page.
`import { createStackNavigator, createAppContainer } from ‘react-navigation’;`

`const MainNavigator = createStackNavigator({ Home: { screen: component } })` 
 the object created inside this consists of all the screens, with a name that will be used when calling navigate and the path (component) to render when called.

`export default createAppContainer(MainNavigator)` 
 connects all the screens to our App.

	* Tab Navigator — creates tab buttons (like a footer) at the bottom (or top, if we choose?) of our app, which stay consistent throughout the app.
`import { createBottomTabNavigator, createAppContainer } from ‘react-navigation’;`
`const TabNavigator = *createBottomTabNavigator*({ tabName: component });`
 connects component pages created to tab names/buttons, such that when tab is clicked, it can render that page.
`export default *createAppContainer*(TabNavigator);`
 connects tab navigator to our App.

## *Layout Element with Flex*
`const styles = StyleSheet.create({`
  `container: {`
    ` flex: 1,`
     `backgroundColor: ‘#fff',`
     `alignItems: ‘center’,’ `
	`justifyContent: ‘center’,’  },`
 `list: {`
    `flex: 1,`
    `width: ‘1’0%’`
`’ }`
`});`

## *Animation*
 Behind the scenes: changing values over time
* Animated — a built in Component used to handle animating other components. This is used for discreet animations, single elements that move or change. Uses simple start_stop methods for time-based animation execution. (Focused on input_output)
* LayoutAnimation — Automatically animates views to their new positions when the next layout happens



#test
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/Screens/Home'
import Search from './src/Screens/Search'
import City from './src/Screens/City'

const App = createStackNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Search },
    City: { screen: City }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(App)

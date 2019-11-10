/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const HomeScreenNavigator = createStackNavigator(
  {
    HomeScreen,
    ResultsShowScreen,
  },
  {
    headerMode: 'none',
  },
);

const Navigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreenNavigator,
      navigationOptions: {
        drawerLabel: 'HomeScreen',
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    backBehavior: 'initialRoute',
  },
);

export default createAppContainer(Navigator);

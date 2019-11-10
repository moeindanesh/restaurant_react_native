/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';
import MainScreen from './screens/MainScreen';

const Navigator = createStackNavigator(
  {
    HomeScreen,
    ResultsShowScreen,
    MainScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(Navigator);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {View, ScrollView, Text, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';


import User from './components/User';

const Drawer = props => {
  return (
    <View>
      <ImageBackground
        style={styles.header}
        source={require('./assets/images/drawer.jpg')}>
        <View style={styles.overlay} />
        <View style={styles.headerInfo}>
          <User />
          <View>
            <Text style={styles.greeting}>صبح بخیر</Text>
            <Text style={styles.greeting}>معین دانش آرا</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Icon name="coins" style={styles.itemIcon} />
          <Text style={styles.itemText}>اعتبار: 15000 تومان</Text>
        </View>
        <View style={styles.item}>
          <Icon name="wallet" style={styles.itemIcon} />
          <Text style={styles.itemText}>شارژ کیف پول</Text>
        </View>
        <View style={styles.item}>
          <Icon name="envelope" style={styles.itemIcon} />
          <Text style={styles.itemText}>پیام ها</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.item}>
          <Icon name="clipboard-list" style={styles.itemIcon} />
          <Text style={styles.itemText}>مشاهده سفارش ها</Text>
        </View>
        <View style={styles.item}>
          <Icon name="edit" style={styles.itemIcon} />
          <Text style={styles.itemText}>مدیریت آدرس ها</Text>
        </View>
        <View style={styles.item}>
          <Icon name="cog" style={styles.itemIcon} />
          <Text style={styles.itemText}>تنظیمات</Text>
        </View>
        <View style={styles.item}>
          <Icon name="hands-helping" style={styles.itemIcon} />
          <Text style={styles.itemText}>درباره ما</Text>
        </View>
        <View style={styles.item}>
          <Icon name="sign-out-alt" style={styles.itemIcon} />
          <Text style={styles.itemText}>خروج از حساب</Text>
        </View>
      </View>
    </View>
  );
};
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
    contentComponent: Drawer,
  },
);

export default createAppContainer(Navigator);

const styles = StyleSheet.create({
  header: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 220,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerInfo: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  greeting: {
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 18,
    color: '#FFF',
    margin: -5,
    padding: 0,
  },
  itemContainer: {
    top: 220,
  },
  item: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
    marginTop: 20,
  },
  itemIcon: {
    width: 25,
    fontSize: 20,
    textAlign: 'center',
    marginRight: 10,
    color: '#444',
  },
  itemText: {
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 18,
    marginRight: 10,
  },
  divider: {
    height: 5,
    width: '100%',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

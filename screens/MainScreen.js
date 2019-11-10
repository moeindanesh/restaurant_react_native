import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import HomeScreen from './HomeScreen';

const Drawer = () => {
  const [drawerState, setDrawerState] = useState(null);
  console.disableYellowBox = true;
  const renderDrawer = () => {
    return (
      <View style={styles.drawerContainer}>
        <Text style={styles.drawerText}>I am in the drawer!</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <DrawerLayout
        ref={drawer => {
          setDrawerState(drawer);
        }}
        drawerWidth={250}
        keyboardDismissMode="on-drag"
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="#ddd"
        renderNavigationView={renderDrawer}>
        <HomeScreen openDrawer={() => drawerState.openDrawer()} />
      </DrawerLayout>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 10,
  },
  pageInput: {
    height: 60,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#eee',
  },
  drawerText: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});

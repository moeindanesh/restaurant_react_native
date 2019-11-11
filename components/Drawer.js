import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View, ScrollView, Text, ImageBackground, StyleSheet} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
const Drawer = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <Text>Moein</Text>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

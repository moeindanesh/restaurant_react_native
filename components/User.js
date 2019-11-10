import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/dana_profile.jpg')}
        style={styles.profileImage}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
  },
});

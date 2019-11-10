import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CategoryItem = props => {
  return (
    <View style={styles.categoryItem}>
      <View
        style={props.active ? styles.categoryIconActive : styles.categoryIcon}>
        <Icon
          name={props.icon}
          size={30}
          color={props.active ? '#F5F5F5' : '#99da7a'}
        />
      </View>
      <Text
        style={props.active ? styles.categoryNameActive : styles.categoryName}>
        {props.name}
      </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    width: 60,
    height: 90,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIconActive: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#99da7a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 16,
    color: '#111',
  },
  categoryNameActive: {
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 16,
    color: '#7bcf53',
  },
});

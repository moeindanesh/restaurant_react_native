import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import CategoryItem from './CategoryItem';

const categories = [
  {name: 'تخمی', icon: 'egg', search: 'egg'},
  {name: 'مرغی', icon: 'drumstick-bite', search: 'chiken'},
  {name: 'دریایی', icon: 'fish', search: 'fish'},
  {name: 'پیتزا', icon: 'pizza-slice', search: 'pizza'},
  {name: 'برگر', icon: 'hamburger', search: 'burger'},
  {name: 'ساندویچ', icon: 'hotdog', search: 'sandwich'},
  {name: 'مکزیکی', icon: 'pepper-hot', search: 'mexican'},
  {name: 'گیاهی', icon: 'seedling', search: 'vegeterian'},
  {name: 'وافل', icon: 'stroopwafel', search: 'wafel'},
];

const CategoryList = props => {
  const [activeCategory, setActiveCategory] = useState('');
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        inverted
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={result => result.icon}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveCategory(item.name);
                props.search(item.search);
              }}
              activeOpacity={0.7}>
              <CategoryItem
                name={item.name}
                icon={item.icon}
                active={activeCategory === item.name ? true : false}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

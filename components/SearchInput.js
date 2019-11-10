import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="جستجوی غذا"
        value={props.term}
        onChangeText={props.termHandler}
        onEndEditing={props.searchHandler}
        style={styles.searchBar}
        inputStyle={styles.searchText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  searchBar: {
    elevation: 1,
    borderRadius: 2,
    flexDirection: 'row-reverse',
  },
  searchText: {
    height: '100%',
    padding: 0,
    fontFamily: 'Dana-FaNum-Light',
    fontSize: 18,
    textAlign: 'right',
  },
});

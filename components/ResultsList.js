import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultList = props => {
  if (props.results.length === 0) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
          horizontal
          inverted
          showsHorizontalScrollIndicator={false}
          data={props.results}
          keyExtractor={result => result.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('ResultsShowScreen', {id: item.id})
                }
                activeOpacity={0.7}>
                <ResultsDetail result={item} navigation={props.navigation} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  container: {
    height: 350,
    marginTop: 10,
    direction: 'rtl',
    display: 'flex',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 18,
    marginHorizontal: 10,
    color: '#999',
  },
});

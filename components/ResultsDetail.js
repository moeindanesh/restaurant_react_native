import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import StarRating from 'react-native-star-rating';

const ResultDetail = props => {
  return (
    <>
      <ImageBackground
        style={styles.card}
        imageStyle={styles.cardImage}
        source={{uri: props.result.image_url}}>
        <View style={styles.infoContainer}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={props.result.rating}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            fullStarColor="#ffb422"
            emptyStarColor="#ffb422"
            containerStyle={styles.starContainer}
            starStyle={styles.starStyle}
          />
          <Text style={styles.title}>{props.result.name}</Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 300,
    margin: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 20,
  },
  infoContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    height: 30,
    marginHorizontal: 10,
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 20,
    color: '#FFF',
  },
  info: {
    marginHorizontal: 10,
    fontFamily: 'Dana-FaNum-Regular',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'right',
  },
  starContainer: {
    width: 120,
    height: 25,
    marginHorizontal: 10,
  },
  starStyle: {
    fontSize: 24,
  },
});

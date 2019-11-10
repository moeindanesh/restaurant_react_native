import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Slideshow from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';
import posed from 'react-native-pose';

import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const [pageStatus, setPageStatus] = useState(false);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const responce = await yelp.get(`/${id}`);
    setResult(responce.data);
    setPageStatus(true);
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.slideShowContainer}>
        <Slideshow
          images={result.photos}
          customButtons={(position, move) => (
            <View style={styles.sliderButtons}>
              {result.photos.map((image, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.sliderButton}>
                    <Text style={position === index && styles.buttonSelected}>
                      <Icon
                        name="circle"
                        solid={position === index ? true : false}
                        color="#f5f5f5"
                        size={10}
                      />
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        />
      </View>
      <View style={styles.contentView}>
        <View style={styles.contentContainer}>
          <Text style={styles.moreInfo}>اطلاعات بیشتر</Text>
          <Text style={styles.moreInfoText}>تلفن تماس : {result.phone}</Text>
        </View>
      </View>
      <MiddleBox style={styles.infoContainer} pose={pageStatus ? 'open' : 'closed'}>
        <Text style={styles.title}>{result.name}</Text>
        <View style={styles.starView}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={result.rating}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            fullStarColor="#ffb422"
            emptyStarColor="#ffb422"
            containerStyle={styles.starContainer}
            starStyle={styles.starStyle}
          />
          <Text style={styles.ratingNum}>{result.rating}</Text>
          <Text style={styles.reviewNum}>(تعداد نظرات {result.review_count}) </Text>
        </View>
        <View style={styles.infoBotBox}>
          <View style={styles.openTime}>
            <Text style={styles.botBoxText}>ساعت شروع</Text>
            <Text style={styles.botBoxTextBold}>{result.hours[0].open[0].start.slice(0,2)} : {result.hours[0].open[0].start.slice(2)}</Text>
          </View>
          <View style={styles.openTime}>
            <Text style={styles.botBoxText}>وضعیت</Text>
            <Text style={styles.botBoxTextBold}>{result.is_closed ? 'بسته' : 'باز'}</Text>
          </View>
        </View>
      </MiddleBox>
      <BottomBox style={styles.buyContainer} pose={pageStatus ? 'open' : 'closed'}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>سفارش</Text>
        </TouchableOpacity>
      </BottomBox>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slideShowContainer: {
    height: 300,
  },
  sliderButtons: {
    width: '100%',
    position: 'absolute',
    top: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sliderButton: {
    margin: 3,
  },
  infoContainer: {
    position: 'absolute',
    top: 220,
    height: 200,
    width: 300,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  title: {
    height: 30,
    margin: 10,
    marginHorizontal: 15,
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 28,
    color: '#000',
  },
  starView: {
    height: 40,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  starContainer: {
    width: 100,
    height: 25,
    marginLeft: 15,
  },
  starStyle: {
    fontSize: 20,
  },
  ratingNum: {
    height: 25,
    marginLeft: 5,
    textAlignVertical: 'center',
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 16,
  },
  reviewNum: {
    height: 25,
    textAlignVertical: 'center',
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 16,
    color: '#555',
  },
  infoBotBox: {
    height: 100,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  openTime: {
    width: 120,
    display: 'flex',
    alignItems: 'center',
  },
  botBoxText: {
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 20,
  },
  botBoxTextBold: {
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 20,
  },
  contentView: {
    width: '100%',
    height: 400,
    backgroundColor: '#EEE',
  },
  contentContainer: {
    top: 120,
  },
  moreInfo: {
    marginTop: 20,
    marginHorizontal: 15,
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  moreInfoText: {
    margin: 15,
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 20,
  },
  buyContainer: {
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    width: '95%',
    height: '70%',
    borderRadius: 100,
    backgroundColor: '#7BCF53',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyText: {
    fontFamily: 'Dana-FaNum-Medium',
    fontSize: 20,
    color: '#F5F5F5',
  },
});

const MiddleBox = posed.View({
  open: {
    scale: 1,
  },
  closed: {
    scale: 0,
  },
});

const BottomBox = posed.View({
  open: {
    y: 0,
  },
  closed: {
    y: 200,
  },
});

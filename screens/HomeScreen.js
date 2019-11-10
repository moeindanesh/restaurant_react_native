import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Snackbar, ActivityIndicator} from 'react-native-paper';
import {Toolbar} from 'react-native-material-ui';
import posed from 'react-native-pose';

import useResults from '../hooks/useResults';

import SearchInput from '../components/SearchInput';
import ResultsList from '../components/ResultsList';
import CategoryList from '../components/CategoryList';

const HomeScreen = props => {
  console.disableYellowBox = true;
  const {searchApi, results, visible, setVisible, status} = useResults();
  const [term, setTerm] = useState('');
  const [pageStatus, setPageStatus] = useState(false);

  useEffect(() => {
    setPageStatus(true);
  }, []);
  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <Toolbar
        centerElement="با ما فود"
        leftElement="menu"
        onLeftElementPress={() => props.navigation.toggleDrawer()}
        searchable={{
          autoFocus: true,
          placeholder: 'چی میل داری؟',
        }}
        style={{
          container: styles.headerContainer,
          titleText: styles.headerTitle,
        }}
      />
      <Loading
        pose={status && results.length ? 'hidden' : 'visible'}
        style={styles.loading}>
        <ActivityIndicator animating={true} color="#8e44ad" size="large" />
      </Loading>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={Snackbar.DURATION_SHORT}
        style={styles.snackbar}>
        <Text style={styles.snackText}>
          oOps, there is a problem! check your connection.
        </Text>
      </Snackbar>
      {/* <SearchInput
        term={term}
        termHandler={setTerm}
        searchHandler={() => searchApi(term)}
      /> */}
      <ScrollView style={styles.view}>
        <GreetingContainer
          style={styles.greetingContainer}
          pose={pageStatus ? 'open' : 'closed'}>
          <GreetingText style={styles.greetingTitle}>صبح بخیر معین 😀</GreetingText>
          <GreetingText style={styles.greetingText}>امروز چی میل داری؟</GreetingText>
          <CategoryContainer pose={pageStatus ? 'open' : 'closed'}>
            <CategoryList search={searchApi} />
          </CategoryContainer>
        </GreetingContainer>
        <Overlay pose={status && results.length ? 'open' : 'closed'}>
          <Item>
            <ResultsList
              title="فروش ویژه"
              results={filterResultsByPrice('$')}
            />
          </Item>
          <Item>
            <ResultsList
              title="تخفیف ها"
              results={filterResultsByPrice('$$')}
            />
          </Item>
          <Item>
            <ResultsList
              title="منوی لاکچری!"
              results={filterResultsByPrice('$$$')}
            />
          </Item>
        </Overlay>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#7BCF53',
  },
  headerTitle: {
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 24,
  },
  loading: {
    width: '100%',
    position: 'absolute',
    zIndex: 3,
  },
  view: {
    marginBottom: 0,
    backgroundColor: '#eee',
    zIndex: 1,
  },
  snackbar: {
    bottom: 0,
    backgroundColor: '#8e44ad',
  },
  snackText: {
    color: '#ecf0f1',
  },
  greetingContainer: {
    marginVertical: 10,
  },
  greetingTitle: {
    marginHorizontal: 10,
    fontFamily: 'Dana-FaNum-Regular',
    fontSize: 20,
    color: '#111',
  },
  greetingText: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Dana-FaNum-Bold',
    fontSize: 28,
    color: '#111',
  },
});

const Loading = posed.View({
  visible: {
    opacity: 1,
    scale: 1,
    y: 350,
    transition: {
      ease: 'easeOut',
      duration: 500,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    y: -100,
    transition: {
      ease: 'easeIn',
      duration: 500,
    },
  },
});

const GreetingContainer = posed.View({
  open: {
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 200,
  },
  closed: {
    opacity: 0,
  },
});

const GreetingText = posed.Text({
  open: {
    y: 0,
  },
  closed: {
    y: -100,
  },
});

const CategoryContainer = posed.View({
  open: {
    y: 0,
  },
  closed: {
    y: -200,
  },
});

const Overlay = posed.View({
  open: {
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 200,
  },
  closed: {opacity: 1},
});

const Item = posed.View({
  open: {x: 0, opacity: 1},
  closed: {x: -100, opacity: 0},
});

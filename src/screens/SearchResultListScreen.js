import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/HeaderComponent';
import useSpeakOnFocus from '../utils/DescriptionUtil';

const SearchResultListScreen = ({route, navigation}) => {
  const { recognizedText } = route.params;

  useSpeakOnFocus('검색된 의약품 목록입니다.');

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.description}>검색된 의약품 목록입니다.</Text>
      <View style={styles.content}>
        <Text>함냠냠...</Text>
        <Text>검색어: {recognizedText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 20,
    margin: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
});

export default SearchResultListScreen;

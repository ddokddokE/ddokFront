import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import AppHeader from '../components/HeaderComponent';
import useSpeakOnFocus from '../utils/DescriptionUtil';

const MedicineDetailScreen = ({ navigation, route }) => {
  const { barcode } = route.params;

  useSpeakOnFocus('의약품 정보 화면입니다.');

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.description}>의약품 정보 화면입니다.</Text>
      <View style={styles.content}>
        <Text>Barcode: {barcode}</Text>
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

export default MedicineDetailScreen;
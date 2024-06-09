import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/HeaderComponent';
import useSpeakOnFocus from '../utils/DescriptionUtil';

const CameraSearchScreen = ({ navigation }) => {

  useSpeakOnFocus('카메라로 의약품을 검색하는 화면입니다.');


  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.description}>카메라로 의약품을 검색하는 화면입니다.</Text>
      <View style={styles.content}>
        <Text>CameraSearch Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    padding: 20,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  text: {
    flex: 3,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  search: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
  icon: {
    height: 40,
    width: 40,
  }
});

export default CameraSearchScreen;
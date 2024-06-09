import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { useDoubleTap } from '../utils/DoubleTapUtil';

import logo from '../assets/logo.png';

const screenHeight = Dimensions.get('window').height;
const headerHeight = screenHeight * 0.07; // 화면 높이의 7%

const HeaderComponent = () => {
  const handleMain = useDoubleTap('MainScreen', '똑똑이.')

  return (
      <TouchableOpacity 
        style={[styles.header, { height: headerHeight }]} 
        onPress={handleMain}
      >
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    //backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  logo: {
    // height: 20,
    width: 200,
    resizeMode: 'contain'
  },
});

export default HeaderComponent;

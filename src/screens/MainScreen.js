import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import AppHeader from '../components/HeaderComponent';
import { useDoubleTap } from '../utils/DoubleTapUtil';
import useSpeakOnFocus from '../utils/DescriptionUtil';

const MainScreen = ({ navigation }) => {

  const handleCameraSearch = useDoubleTap('CameraSearchScreen', '카메라 검색');
  const handleTextSearch = useDoubleTap('TextSearchScreen', '이름 검색');
  const handleVoiceSearch = useDoubleTap('VoiceSearchScreen', '음성 검색');

  useSpeakOnFocus('메인화면입니다');

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.description}>메인화면입니다.</Text>
        <View style={styles.camera}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCameraSearch}
          >
            <Text style={styles.buttonText}>카메라</Text><Text style={styles.buttonText}>검색</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tandv}>
          <View style={styles.text}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleTextSearch}
            >
              <Text style={styles.buttonText}>이름 검색</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.voice}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleVoiceSearch}
            >
              <Text style={styles.buttonText}>음성 검색</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
  },
  content: {
    flex: 1, // 나머지 화면을 채우도록 조정
    justifyContent: 'space-around', // 버튼 사이에 공간 동일하게 배분
    alignItems: 'center',
  },
  camera: {
    width: '100%', // 너비를 최대로 설정
    flex: 1,
    padding: 10, // 패딩으로 버튼 크기 조정
  },
  tandv: {
    flex: 1,
    flexDirection: 'row',
    width: '100%', // 너비를 최대로 설정
  },
  text: {
    flex: 1, // 공간을 균등하게 분배
    padding: 10, // 패딩으로 버튼 크기 조정
  },
  voice: {
    flex: 1, // 공간을 균등하게 분배
    padding: 10, // 패딩으로 버튼 크기 조정
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#3E4AB8',
    padding: 20, // 버튼 내부 패딩 증가
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    height: '100%',
    width: '100%',
    shadowOffset: { width: 2, height: 2 }, // 그림자 위치 설정
    shadowOpacity: 0.6, // 그림자 투명도 설정
    shadowRadius: 2, // 그림자 반경 설정
    elevation: 2, // 안드로이드에서 그림자 효과를 위해 설정
  },
  buttonText: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default MainScreen;

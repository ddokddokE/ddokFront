import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Voice from '@react-native-community/voice';
import AppHeader from '../components/HeaderComponent';
import useSpeakOnFocus from '../utils/DescriptionUtil';
import speak, { stopTTS } from '../utils/SpeechUtil';

import mike from '../assets/mike.png';

const VoiceSearchScreen = ({ navigation }) => {
  useSpeakOnFocus('음성으로 의약품을 검색하는 화면입니다. 화면을 한 번 누르면 음성 인식이 시작됩니다. 말씀 후 화면을 다시 한 번 누르면 검색됩니다.');

  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const buttonLabel = isRecord ? 'stop' : 'start';
  const voiceLabel = text ? text : isRecord ? '...' : ' ';

  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setText('');
  };

  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');
    if (text) {
      console.log(`Final recognized text: ${text}`);
      stopTTS();
      setTimeout(() => {
        navigation.navigate('SearchResultListScreen', { recognizedText: text });
      }, 1000);
    }
  };

  const _onSpeechResults = (event) => {
    console.log('onSpeechResults', event.value);
    setText(event.value[0]);
  };

  const _onSpeechError = (event) => {
    console.log('_onSpeechError', event.error);
  };

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop().then(() => {
        Voice.destroy().then(() => {
          _onSpeechEnd();
        });
      });
    } else {
      stopTTS();
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.description}>음성으로 의약품을 검색하는 화면입니다.</Text>
        <Text style={styles.description}>화면을 한 번 누르면 음성 인식이 시작됩니다.</Text>
        <Text style={styles.description}>말씀 후 화면을 다시 한 번 누르면 검색됩니다.</Text>
        <Text style={styles.voiceText}>인식 된 글자 : {voiceLabel}</Text>
        <TouchableOpacity style={styles.button} onPress={_onRecordVoice}>
          <Image source={mike} style={styles.mike} />
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
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
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  voiceText: {
    backgroundColor: '#ddd',
    marginTop: 32,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
  mike: {
    resizeMode: 'contain'
  }
});

export default VoiceSearchScreen;
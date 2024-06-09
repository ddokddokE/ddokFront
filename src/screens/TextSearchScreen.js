import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/HeaderComponent';
import { useDoubleTapWithData } from '../utils/DoubleTapUtil';
import useSpeakOnFocus from '../utils/DescriptionUtil';
import icon from '../assets/icon-blue.png';

const TextSearchScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  useSpeakOnFocus('이름으로 의약품을 검색하는 화면입니다.');

  const handleResultList = useDoubleTapWithData((data) => {
    navigation.navigate('SearchResultListScreen', { recognizedText: data });
  }, '검색');

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.description}>이름으로 의약품을 검색하는 화면입니다.</Text>
      <View style={styles.content}>
        <View style={styles.text}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            multiline={true}
            keyboardType="default"
            value={text}
            placeholder="검색어를 입력하세요"
            returnKeyType="search"
            onSubmitEditing={() => handleResultList(text)}
            accessibilityLabel="검색창"
            accessibilityHint="검색할 단어를 입력 후, 검색 버튼을 누르세요."
          />
        </View>
        <View style={styles.search}>
          <TouchableOpacity style={styles.button} onPress={() => handleResultList(text)}>
            <Image source={icon} style={styles.icon}></Image>
          </TouchableOpacity>
        </View>
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

export default TextSearchScreen;

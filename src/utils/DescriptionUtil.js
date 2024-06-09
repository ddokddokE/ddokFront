import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import speak from './SpeechUtil';

const useSpeakOnFocus = (description) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      speak(description);
    });
    return unsubscribeFocus; // 이벤트 리스너 해제
  }, [navigation, description]);
};

export default useSpeakOnFocus;

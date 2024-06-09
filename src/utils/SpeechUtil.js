import { NativeModules, NativeEventEmitter } from 'react-native';
import Tts from 'react-native-tts';

const ttsEventEmitter = new NativeEventEmitter(NativeModules.TextToSpeech);

Tts.setDefaultLanguage('ko-KR');
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.0);

Tts.addEventListener('tts-start', event => console.log('TTS start', event));
Tts.addEventListener('tts-finish', event => console.log('TTS finish', event));
Tts.addEventListener('tts-cancel', event => console.log('TTS cancel', event));

const speak = (text) => {
  Tts.stop();
  //console.log(`Speaking: ${text}`);
  Tts.speak(text);
};

const stopTTS = () => {
  Tts.stop();
};

export default speak;
export { stopTTS };


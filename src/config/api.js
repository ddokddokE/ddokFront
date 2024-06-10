import { Alert } from "react-native";
import axios from "axios";
import { Platform } from "react-native";

// 로컬 서버 주소 설정
const getBaseURL = () => {
  if (Platform.OS === 'android') {
    return "http://10.0.2.2:8080"; // Android 에뮬레이터
  } else {
    return "http://localhost:8080"; // iOS 시뮬레이터
  }
};

const apiClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
});

export async function getMedicineInfo(name) {
    try {
        console.log(`Request URL: ${apiClient.defaults.baseURL}/medicine/idx`);
        console.log(`Request Params: ${name}`);
        
        const response = await apiClient.get(`/medicine/idxidx`, {
            params: { name }
        });
        console.log('Response data:', response.data);
        return response.data;
    } catch (err) {
        console.error('Error:', err);
        const errorMessage = err.response ? err.response.data.error : err.message;
        Alert.alert('Error', errorMessage);
    }
}
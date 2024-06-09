import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/HeaderComponent';
import useSpeakOnFocus from '../utils/DescriptionUtil';
import { getMedicineInfo } from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchResultListScreen = ({ route, navigation }) => {
  const { recognizedText } = route.params;
  const [medicineData, setMedicineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useSpeakOnFocus('검색된 의약품 목록입니다.');

  useEffect(() => {
    const fetchMedicineInfo = async () => {
      const name = await AsyncStorage.getItem('name');
      if (name) {
        const result = await getMedicineInfo(name);
        setMedicineData(result);
      }
      setLoading(false);
    };

    fetchMedicineInfo();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <AppHeader navigation={navigation} />
        <Text style={styles.description}>검색된 의약품 목록을 불러오는 중입니다...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.description}>검색된 의약품 목록입니다.</Text>

      <View style={styles.content}>
        <Text>검색어: {recognizedText}</Text>
        {medicineData.map((medicine, index) => (
          <View key={index} style={styles.medicineContainer}>
            <Text>이름: {medicine.name}</Text>
            <Text>효능: {medicine.efficacy}</Text>
            <Text>복용법: {medicine.dosage}</Text>
            <Text>주의사항: {medicine.precaution}</Text>
          </View>
        ))}
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
  medicineContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
  },
});

export default SearchResultListScreen;

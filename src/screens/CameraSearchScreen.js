// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Platform, PermissionsAndroid, Alert } from 'react-native';
// import AppHeader from '../components/HeaderComponent';
// import useSpeakOnFocus from '../utils/DescriptionUtil';
// import { CameraScreen } from 'react-native-camera-kit';

// const CameraSearchScreen = ({ navigation }) => {
//   const [qrvalue, setQrvalue] = useState('');
//   const [openScanner, setOpenScanner] = useState(false);

//   useSpeakOnFocus('카메라로 의약품을 검색하는 화면입니다.');

//   useEffect(() => {
//     const requestCameraPermission = async () => {
//       if (Platform.OS === 'android') {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//               title: 'Camera Permission',
//               message: 'App needs permission for camera access',
//             }
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             setQrvalue('');
//             setOpenScanner(true);
//           } else {
//             Alert.alert('CAMERA permission denied');
//           }
//         } catch (err) {
//           Alert.alert('Camera permission error', err.toString());
//           console.warn(err);
//         }
//       } else {
//         setQrvalue('');
//         setOpenScanner(true);
//       }
//     };

//     requestCameraPermission();
//   }, []);

//   const onBarcodeScan = (qrvalue) => {
//     setQrvalue(qrvalue);
//     setOpenScanner(false);
//   };

//   return (
//     <View style={styles.container}>
//       <AppHeader navigation={navigation} />
//       <Text style={styles.description}>카메라로 의약품을 검색하는 화면입니다.</Text>
//       <View style={styles.cameraContainer}>
//         {openScanner ? (
//           <CameraScreen
//             style={styles.camera}
//             showFrame={true}
//             scanBarcode={true}
//             laserColor={'blue'}
//             frameColor={'yellow'}
//             colorForScannerFrame={'black'}
//             onReadCode={(event) => onBarcodeScan(event.nativeEvent.codeStringValue)}
//           />
//         ) : (
//           <Text style={styles.placeholder}>카메라를 준비하고 있습니다...</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   cameraContainer: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//     width: '100%',
//   },
//   description: {
//     fontSize: 20,
//     textAlign: 'center',
//     paddingTop: 10,
//   },
//   placeholder: {
//     fontSize: 18,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default CameraSearchScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, PermissionsAndroid, Alert } from 'react-native';
import AppHeader from '../components/HeaderComponent';
import useSpeakOnFocus from '../utils/DescriptionUtil';
import { CameraScreen } from 'react-native-camera-kit';

const CameraSearchScreen = ({ navigation }) => {
  const [qrvalue, setQrvalue] = useState('');
  const [openScanner, setOpenScanner] = useState(false);

  useSpeakOnFocus('카메라로 의약품을 검색하는 화면입니다.');

  useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setQrvalue('');
            setOpenScanner(true);
          } else {
            Alert.alert('CAMERA permission denied');
          }
        } catch (err) {
          Alert.alert('Camera permission error', err.toString());
          console.warn(err);
        }
      } else {
        setQrvalue('');
        setOpenScanner(true);
      }
    };

    requestCameraPermission();
  }, []);

  const onBarcodeScan = (qrvalue) => {
    console.log(`Scanned QR code: ${qrvalue}`);
    setQrvalue(qrvalue);
    setOpenScanner(false);
    navigation.navigate('MedicineDetailScreen', { barcode: qrvalue });
  };

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.description}>카메라로 의약품을 검색하는 화면입니다.</Text>
      <View style={styles.cameraContainer}>
        {openScanner ? (
          <CameraScreen
            style={styles.camera}
            showFrame={true}
            scanBarcode={true}
            laserColor={'blue'}
            frameColor={'yellow'}
            colorForScannerFrame={'black'}
            onReadCode={(event) => onBarcodeScan(event.nativeEvent.codeStringValue)}
          />
        ) : (
          <Text style={styles.placeholder}>카메라를 준비하고 있습니다...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  placeholder: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CameraSearchScreen;

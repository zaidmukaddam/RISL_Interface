/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { Camera } from 'expo-camera';
import {
  TouchableRipple,
  ActivityIndicator,
  Provider,
} from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import FormData from 'form-data';

import API from '../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const styles2 = StyleSheet.create({
  img: {
    margin: 20,
    height: 25,
    width: 26,
    padding: 0,
  },
  cam: {
    width: 70,
    height: 70,
    right: Dimensions.get('window').width * -0.001
  }
});
export default function CameraScreen({ predict }) {
  let camera;
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.back,
  );
  const isFocused = useIsFocused();
  const [flashMode, setFlashMode] = React.useState('off');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    try {
      setLoading(true);
      const photo = await camera.takePictureAsync({ quality: 1 });
      // console.log(photo);
      const localUri = photo.uri;
      const filename = localUri.split('/').pop();

      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      const formData = new FormData();
      formData.append('file', {
        uri: localUri,
        name: filename,
        type,
      });
      const res = await API.post('/predict', formData, {
        'content-type': 'multipart/form-data',
      });
      // console.log(res.data);
      setLoading(false);
      predict(res.data.prediction);
    } catch (error) {
      setLoading(false);
      predict(null);
      // console.log(error);
    }
  };

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  if (hasPermission === null || !isFocused) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Provider style={styles.container}>
      <Camera
        style={styles.camera}
        type={cameraType}
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={flipCamera}
            disabled={loading}
          >
            <Image
              style={styles2.img}
              source={require('../../assets/img/flip.png')}
            />
          </TouchableOpacity>
          <TouchableRipple
            style={{
              width: 70,
              height: 70,
              right: Dimensions.get('window').width * -0.281,
              top: Dimensions.get('window').height * 0.66,
              borderRadius: 50,
              backgroundColor: '#fff',
              overflow: 'hidden',
            }}
            centered
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={takePicture}
            disabled={loading}
          >
            <Image
              style={styles2.cam}
              source={require('../../assets/img/circle.png')}
            />
          </TouchableRipple>
        </View>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" animating />
          </View>
        )}
      </Camera>
    </Provider>
  );
}

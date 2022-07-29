import React, { useState, useEffect } from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Camera, CameraType } from 'expo-camera'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {

    const navigation = useNavigation()
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(CameraType.back);
    const [picture, setPicture] = useState('')

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    takePicture = () => {
      if (this.camera) {
          this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
      }
   };

  onPictureSaved = photo => {
    setPicture(photo.uri)
  }  

    return (
        <View style={styles.container}>
          {picture? (
            <Image source={{ uri: picture }} style={{width:'100%',height:'100%'}} />
          ) :
          
          <Camera style={styles.camera} type={type} ref={(ref) => { this.camera = ref }} >

          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
              <Icon 
                style={styles.text}
                name="camera-flip-outline"
                type="material-community"
                color="lightgray"
                size={50}
                padding={10}
                />  
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
              >
                <Icon
                  style={styles.icon}
                  name="circle-outline"
                  type="material-community"
                  onPress={this.takePicture}
                  color="lightgray"
                  size={100}
                />
              </TouchableOpacity>
            </View>
          </Camera>
          }
        </View>
      );
}

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
    margin: 30,
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',

  },
  icon: {
    width: "100%"
  },
  textContainer: {
    flexDirection: 'row'
  },
  text: {

    justifyContent: 'flex-start'
  },
});
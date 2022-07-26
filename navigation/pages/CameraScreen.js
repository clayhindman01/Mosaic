import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Camera, CameraType } from 'expo-camera'
import { Icon } from 'react-native-elements';

export default function CameraScreen() {

    const [hasPermission, setHasPermission] = useState(null)
    const {type, setType} = useState(CameraType.back);

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
      console.log(photo);
  }  

    return (
        <View style={styles.container}>
          <Camera style={styles.camera} type={type} ref={(ref) => { this.camera = ref }} >
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
                  size={125}
                />
              </TouchableOpacity>
            </View>
          </Camera>
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
});
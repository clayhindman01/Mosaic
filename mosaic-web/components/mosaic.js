
import React, {useState} from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight, Modal, TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements';

export default function Mosaic(props) {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false)

  const checkToday = () => {
    if (props.todaysMosaic) {
      return (
        <Text style={styles.currentMosaicText}>TODAY'S MOSAIC</Text>
      )
    }
  }

  const checkCompleted = () => {
    if (props.complete) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalOpen(true)}
        >
          <Text style={styles.buttonText}>View Original Image</Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles.currentMosaic}>
      { checkToday() }  
      <TouchableHighlight style={styles.image} onPress={() => navigation.navigate('Canvas', {uri: props.uri})}>
      <Image 
        style={{width: '100%', height: '100%'}}
        source={{uri: props.uri}}
        blurRadius={1}
      />
      </TouchableHighlight>
      { checkCompleted() }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalOpen);
        }}
      >
        <View style={styles.modalContainer}>
          <Image
            source={{uri: props.uri}}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          >
          </Image>
          <Pressable
            style={[styles.pressable, styles.buttonClose]}
            onPress={() => setModalOpen(!modalOpen)}
          >
            <Icon 
                style={styles.text}
                name="close"
                type="material-community"
                color="lightgray"
                size={35}
                // padding={10}
                /> 
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  currentMosaic: {
    width: '100%',
    height: 325,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eaf2ef',
    marginTop: 15,
  },
  image: {
    width: '95%',
    height: 220,
    borderRadius: 10,
  },
  
  currentMosaicText : {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2b3650',
    padding: 15,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: 80,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
  },
  pressable: {
    position: 'absolute',
    top: 15,
    left: 15,
  }
})
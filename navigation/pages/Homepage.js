// components/dashboard.js
import React, { Component, useCallback } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import firebase from '../../database/firebase';
import { doc, getDoc } from 'firebase/firestore'
import db from '../../database/firestore';
import Header from '../../components/header';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
      user: ''
    }
  }
  

  getDocuments = async () => {
    const docRef = doc(db, "users", "UEUPYSPmIIrb5EGpnRpP");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  componentDidMount() {
    const user = firebase.auth().currentUser
  }

  componentDidUpdate() {
    const user = firebase.auth().currentUser
  }

  render() {
    let user = firebase.auth().currentUser
    this.state = { 
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      document: this.getDocuments(),
      uri: 'https://cdn.pixabay.com/photo/2022/07/17/19/40/animal-7328225_960_720.jpg'
    }    
    return (
      <>
        <Header includeImage={true} />
        <View style={styles.container}>
          <Text style={styles.currentMosaic}>Current Mosaic:</Text>
          <TouchableHighlight style={{width: '100%', height: 200}} onPress={() => this.props.navigation.navigate('Canvas', {uri: this.state.uri})}>
          <Image 
            style={{width: '100%', height: 200}}
            source={{uri: this.state.uri}}
            blurRadius={1}
          />
          </TouchableHighlight>
          
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
  currentMosaic: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2b3650'
  }
});
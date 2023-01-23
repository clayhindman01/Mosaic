// components/dashboard.js
import React, { Component, useCallback } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, ScrollView } from 'react-native';
import firebase from '../../database/firebase';
import { doc, getDoc } from 'firebase/firestore'
import db from '../../database/firestore';
import Header from '../../components/header';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Mosaic from '../../components/mosaic';

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
          <LinearGradient
            colors={['lightgray', '#d6dbd2']}
            style={styles.gradient}
          >
            <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
            <Mosaic uri={this.state.uri} todaysMosaic={true} complete={false}></Mosaic>
            <Mosaic uri='https://cdn.pixabay.com/photo/2022/06/28/15/21/bach-7289941_960_720.jpg' todaysMosaic={false} complete={true}></Mosaic>
            <Mosaic uri='https://cdn.pixabay.com/photo/2022/07/26/19/09/spotted-owlet-7346555_960_720.jpg' todaysMosaic={false} complete={true}></Mosaic>
            <Mosaic uri='https://cdn.pixabay.com/photo/2022/04/04/13/54/city-7111380_960_720.jpg' todaysMosaic={false} complete={true}></Mosaic>
            </ScrollView>
            </LinearGradient>
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
    backgroundColor: 'lightgray',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingTop: 15,
  },
});
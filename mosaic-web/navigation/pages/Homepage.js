// components/dashboard.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, ScrollView } from 'react-native';
import firebase from '../../database/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import db from '../../database/firestore';
import Header from '../../components/header';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Mosaic from '../../components/mosaic';

export default function Dashboard() {

  const user = firebase.auth().currentUser;

  const [document, setDocument] = useState([])
  const [uri, setUri] = useState('https://cdn.pixabay.com/photo/2022/07/17/19/40/animal-7328225_960_720.jpg')

  const getDocuments = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocument(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  useEffect(() => {
    const callDocuments = async () => {
      await getDocuments();
    }
    callDocuments()
    console.log("Document  :" + document)
  }, [setDocument])

  return (
    <>
      <Header includeImage={true} />
        <View style={styles.container}>
        <LinearGradient
          colors={['lightgray', '#d6dbd2']}
          style={styles.gradient}
        >
          <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
          <Mosaic uri={uri} todaysMosaic={true} complete={false}></Mosaic>
          </ScrollView>
          </LinearGradient>
        </View>
    </>
  );
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
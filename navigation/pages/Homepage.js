// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import firebase from '../../database/firebase';
import { doc, getDoc } from 'firebase/firestore'
import db from '../../database/firestore';
import Header from '../../components/header';
import { ImagePixelated } from "react-pixelate"

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
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

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      photoURL: firebase.auth().currentUser.photoURL,
      uid: firebase.auth().currentUser.uid,
      document: this.getDocuments()
    }    
    return (
      <>
        <Header includeImage={true} />
        <View style={styles.container}>
          <Image 
            style={{width: '100%', height: 200}}
            source={{uri:'https://pixabay.com/get/g8855c1a93172b52fd551de4d51b0f0a9cdd2e5ee9853ee2eb8fbb4cadea52fa5dba92b07f09b77cc31f8af6e4d19863e_1280.jpg'}}
            blurRadius={1}
          />
          <Button
            color="#3740FE"
            title="Logout"
            onPress={() => this.signOut()}
          />
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
  }
});
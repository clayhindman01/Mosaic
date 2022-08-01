// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../../database/firebase';
import NavBar from '../NavBar';
import { doc, getDoc } from 'firebase/firestore';
import Header from '../../components/Header.js';

const db = firebase.firestore()

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
      console.log(docSnap.data().user_id);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      document: this.getDocuments()
    }    
    return (
      <>
        <View style={styles.container}>
          <Header />
          <Text style = {styles.textStyle}>
            Hello, {this.state.displayName}. This is the homepage
          </Text>
          <Button
            color="#3740FE"
            title="Logout"
            onPress={() => this.signOut()}
          />
        </View>
        <NavBar />
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});
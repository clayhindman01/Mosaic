// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../database/firebase';
import { LinearGradient } from 'expo-linear-gradient';
import config from '../../database/utils/config';

export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false,
      imageURL: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/asainKanye.jpg?alt=media`
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName,
          photoURL: this.state.imageURL
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => {
        this.setState({isLoading: false})
        alert(error.message)
        navigator.navigate('Signup')
      })      
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 
        <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center'}}>
          <Text style={styles.loginText}>Sign Up.</Text>
        </View>
        <View style={styles.slantTriange}></View>
        
        <View style={styles.slant}> 
        <LinearGradient
          colors={['#88bba8', '#718ac7']}
          style={styles.gradient}
        >
          <View style={{marginBottom: 25, padding: 35, paddingBottom: 0,}}>
          <TextInput
              style={styles.inputStyle}
              placeholderTextColor="lightgray"
              placeholder="Display Name"
              value={this.state.displayName}
              onChangeText={(val) => this.updateInputVal(val, 'displayName')}
              maxLength={15}
            />  
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              placeholderTextColor="lightgray"
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="lightgray"
              placeholder="Password"
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />  
          </View> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.registerUser()}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>   
        </LinearGradient>
        </View> 
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#fff",
    borderBottomWidth: 1,
    color: "#2b3650",
    fontSize: 18,
  },
  loginText: {
    color: '#2b3650',
    marginTop: 120,
    padding: 35,
    fontSize: 30,
    fontWeight: 'bold'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888bba8'
  },
  slant: {
    flex: 1.75,
    backgroundColor: '#88bba8',
  },
  slantTriange: {
    borderStyle: "solid",
    borderLeftWidth: 500,
    borderBottomWidth:100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#88bba8",
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    width: 100,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#2b3650",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  },
  gradient: {
    width: '100%',
    height: '100%'
  }
});
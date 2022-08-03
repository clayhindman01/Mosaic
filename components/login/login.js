// components/login.js
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../database/firebase';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Mosaic')
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
          <Text style={styles.loginText}>Log In.</Text>
        </View>
        <View style={styles.slantTriange}></View>
        
        <View style={styles.slant}> 
        <LinearGradient
          colors={['#2b3650', '#718ac7']}
          style={styles.gradient}
        >
          <View style={{marginBottom: 25, padding: 35, paddingBottom: 0,}}>
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
          onPress={() => this.userLogin()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Signup</Text>
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
    color: "#fff",
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
    backgroundColor: '',
    // padding: 35,
  },
  slantTriange: {
    borderStyle: "solid",
    borderLeftWidth: 500,
    borderBottomWidth:100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#2b3650",
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
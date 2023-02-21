// components/signup.js
import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createUser } from '../../api/apiController';

export default function Signup(props) {

  const [handle, setHandle] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  // TODO: Add screen to set profile picture and move user handle to that page 

  const signup = async () => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      setIsLoading(true)
      await createUser({handle: handle, password: password, email: email}, props.route.params.setUser, props.navigation.navigate)
    }
  }

  if(isLoading){
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
            placeholder="User Handle"
            value={handle}
            onChangeText={(val) => setHandle(val)}
            maxLength={15}
          />  
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor="lightgray"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <TextInput
            style={styles.inputStyle}
            placeholderTextColor="lightgray"
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            maxLength={15}
            secureTextEntry={true}
          />  
        </View> 
      <TouchableOpacity
        style={styles.button}
        onPress={() => signup()}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Login')}
      >   
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>   
      </LinearGradient>
      </View> 
      
    </View>
  );
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
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './components/login/login';
import Signup from './components/login/signup';
import Homepage from './navigation/pages/Homepage';
import NavBar from './navigation/NavBar';
import CameraScreen from './navigation/pages/CameraScreen';
import Account from './navigation/pages/Account';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          [{title: 'Login'},
          {headerLeft: null} ]
        }
      />
      <Stack.Screen 
       name="Mosaic" 
       component={Homepage} 
       options={[
         { title: 'Homepage' },
         {headerLeft: null} 
       ]}
      />
      <Stack.Screen
        name="NavBar"
        component={NavBar}
        options={[
          {title: "NavBar"},
          {headerLeft: null}
        ]}
        />
        <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={[
          {title: "Camera"},
          {headerLeft: null}
        ]}
        />
        <Stack.Screen
        name="Account"
        component={Account}
        options={[
          {title: "Account"},
          {headerLeft: null}
        ]}
        />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
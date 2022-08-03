// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './components/login/login';
import Signup from './components/login/signup';
import Homepage from './navigation/pages/Homepage';
import CameraScreen from './navigation/pages/CameraScreen';
import Account from './navigation/pages/Account';
import Canvas from './navigation/pages/Canvas';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
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
       options={{header: "Homepage", gestureEnabled: false}}
      />
      <Stack.Screen
        name="Canvas"
        component={Canvas}
        options={[
          {title: "Canvas"},
          {headerLeft: null}
        ]}
        />
        <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={[
          {title: "Camera"},
          {headerLeft: null},
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
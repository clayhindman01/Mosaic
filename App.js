// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './components/login/login';
import Signup from './components/login/signup';
import Dashboard from './navigation/pages/Homepage';
import MainContainer from './navigation/MainContainer';

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
       name="Dashboard" 
       component={Dashboard} 
       options={[
         { title: 'Dashboard' },
         {headerLeft: null} 
       ]}
      />
      <Stack.Screen
        name="NavBar"
        component={MainContainer}
        options={[
          {title: "NavBar"},
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
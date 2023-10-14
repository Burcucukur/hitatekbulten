import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import splash from '../containers/splash/splash';
import Login from '../containers/login/login';
import Profile from '../containers/profile/profile';
import Home from '../containers/home/home';

const MyStack = createStackNavigator();
/**
 * All Stack Screen
 * Home login signup etc..
 * @returns  dict of stack pages
 */
function RootStack() {
  return (
    <MyStack.Navigator screenOptions={{headerShown: false}}>
      <MyStack.Screen name="Splash" component={splash} /> 
      <MyStack.Screen name="Login" component={Login} /> 
      <MyStack.Screen name="Home" component={Home} /> 
      <MyStack.Screen name="Profile" component={Profile} /> 
    </MyStack.Navigator>
  );
}

export default RootStack;
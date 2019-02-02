import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';

export const SignedOutStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    SignUp: RegisterScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  },
  {
    initialRouteName: 'SignIn',
  }
);

export const SignedInStack = createBottomTabNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    }
  }
);

export const RootStack = (SignedInStack = false) => {
  return createStackNavigator(
    {
      SignedIn: {
        screen: SignedInStack,
      },
      SignedOut: {
        screen: SignedOutStack,
      }
    }, {
      headerMode: "none",
      initialRouteName: SignedIn ? "SignedIn" : "SignedOut"
    }
  );
};

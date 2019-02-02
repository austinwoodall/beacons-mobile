import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RegsiterComponent from '../Components/RegistrationForm';
import RegistrationComponent from '../Components/RegistrationForm';

class RegistrationScreen extends React.Component {
  render() {
    return (
      <View>
        <RegistrationComponent />
      </View>
    );
  }
}

export default RegistrationScreen;
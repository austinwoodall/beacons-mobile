import React,{ Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SplashComponent from '../Components/SplashComponent';

class SplashScreen extends Component {
  render() {
    return (
      <View>
        <SplashComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default SplashScreen;
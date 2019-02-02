import React,{ Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeComponent from '../Components/HomeComponent';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <HomeComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default HomeScreen;
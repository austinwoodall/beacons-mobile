import React,{ Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProfileComponent from '../Components/ProfileComponent';

class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <ProfileComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ProfileScreen;
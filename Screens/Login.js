import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginComponent from '../Components/LoginForm';

class LoginScreen extends React.Component {
  render() {
    return (
      	<View>
        	<LoginComponent
				navigation={this.props.navigation}
        	/>
      	</View>
    	);
  	}
}

export default LoginScreen;
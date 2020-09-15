import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LoginView from './LoginView';

export default class LoginScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Login Page1',
    headerStyle: {
      backgroundColor: '#722ed1',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <>
        <StatusBar hidden={false} backgroundColor="transparent" translucent />
        <LoginView navigate={this.props.navigation.navigate} />
      </>
    );
  }
}

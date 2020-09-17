import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Discover extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#cccfff' }}>
        <Text>My</Text>
        <Text>My</Text>
        <Button onPress={() => navigate('Login')} title="跳转登录">
          登录
        </Button>
      </View>
    );
  }
}

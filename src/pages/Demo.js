import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Demo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '测试',
      params: { name: 'demo' },
      headerRight: () => (
        <Button
          title="登录"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      ),
    };
  };

  render() {
    const { state, navigate, getParam } = this.props.navigation;
    const { params } = state;
    return (
      <View style={{ flex: 1, backgroundColor: '#e3e3e3' }}>
        <Text>Demo</Text>
      </View>
    );
  }
}

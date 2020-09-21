import React, { Component } from 'react';
import {View, ScrollView, Text, StyleSheet, Button} from 'react-native';

export default class My extends Component {
  static navigationOptions = {
    headerTransparent: true,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>My</Text>
          <Text>My</Text>
          <Button onPress={() => navigate('Login')} title="跳转登录" />
          <Button onPress={() => navigate('Demo')} title="跳转测试" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 28,
  },
});

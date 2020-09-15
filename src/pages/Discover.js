import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

export default class Discover extends Component {
  static navigationOptions = {
    headerTitle: 'Discover222',
    headerTransparent: true,
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../img/bg.jpg')}>
        <Text style={styles.text}>See You Again</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 26,
  },
});

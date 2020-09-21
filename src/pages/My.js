import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default class My extends Component {
  static navigationOptions = {
    headerTransparent: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>See you again</Text>
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

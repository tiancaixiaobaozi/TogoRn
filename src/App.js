import React, { Component } from 'react';
import { View, Platform, StatusBar, Navigator } from 'react-native';
import Wrapper from './components/Wrapper';

export default class rootApp extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Platform.OS === 'ios' ? '#000' : '#0398ff',
          flex: 1,
        }}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#0398ff" barStyle="light-content" />
          <Navigator
            initialRoute={{ component: Wrapper }}
            configureScene={() => Navigator.SceneConfigs.FloatFromRight}
            renderScene={(route, navigator) => {
              return <route.component navigator={navigator} {...route.args} />;
            }}
          />
        </View>
      </View>
    );
  }
}

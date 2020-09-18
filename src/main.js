import React, { Component } from 'react';
import App from './App';
import { StatusBar, BackHandler, ToastAndroid } from 'react-native';

export default class Main extends Component {
  // 构造
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      //最近2秒内按过back键，可以退出应用。
      BackHandler.exitApp();
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="transparent" translucent />
        <App />
      </>
    );
  }
}

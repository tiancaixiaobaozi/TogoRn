import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MapView } from 'react-native-amap3d';

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
        <MapView
          style={StyleSheet.absoluteFill}
          coordinate={{ latitude: 39.91095, longitude: 116.37296 }}
          locationEnabled={false} //是否启用定位 boolean
          rotateEnabled={true} //是否启用旋转手势，用于调整方向
          scrollEnabled={true} //是否启用滑动手势，用于平移
          showsCampass={false} //是否显示指南针
          showsLocationButton={true} //是否显示定位按钮 (该功能只支持android)
        />
      </View>
    );
  }
}

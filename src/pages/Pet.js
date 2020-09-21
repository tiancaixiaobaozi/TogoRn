import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { MapView, MapType } from 'react-native-amap3d';
const { Marker } = MapView;

export default class Pet extends Component {
  /**
   * 1.启动定位，并监听
   * @param locationEnabled
   * @param onLocation={(event) => console.log(event)}
   * */
  state = {
    time: new Date(),
  };
  _coordinates = [
    {
      latitude: 39.806901,
      longitude: 116.397972,
    },
    {
      latitude: 39.806901,
      longitude: 116.297972,
    },
    {
      latitude: 39.906901,
      longitude: 116.397972,
    },
    {
      latitude: 39.706901,
      longitude: 116.397972,
    },
  ];
  _onMarkerPress = () => Alert.alert('onPress');
  _onInfoWindowPress = () => Alert.alert('onInfoWindowPress');
  _onDragEvent = ({ latitude, longitude }) =>
    Alert.alert(`${latitude}, ${longitude}`);

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#cccfff' }}>
        <Text>My</Text>
        <Text>My</Text>
        <Button onPress={() => navigate('Login')} title="跳转登录">
          登录
        </Button>
        {/* ------------EXAMPLE 1----------- */}
        {/*<MapView*/}
        {/*  mapType={MapType.Night}*/}
        {/*  zoomEnabled={true}*/}
        {/*  scrollEnabled={true}*/}
        {/*  rotateEnabled={true}*/}
        {/*  showsZoomControls={true}*/}
        {/*  zoomLevel={12}*/}
        {/*  style={StyleSheet.absoluteFill}*/}
        {/*  center={{*/}
        {/*    latitude: 30.65608,*/}
        {/*    longitude: 104.0511,*/}
        {/*  }}>*/}
        {/*  <Marker*/}
        {/*    draggable*/}
        {/*    title="这是添加的一个标记"*/}
        {/*    onDragEnd={(e) => console.log(e)}*/}
        {/*    coordinate={{*/}
        {/*      latitude: 30.65608,*/}
        {/*      longitude: 104.0511,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</MapView>*/}
        {/* ------------EXAMPLE 2----------- */}
        {/*<MapView style={StyleSheet.absoluteFill}>*/}
        {/*  <MapView.Marker*/}
        {/*    active*/}
        {/*    draggable*/}
        {/*    title="一个可拖拽的标记"*/}
        {/*    description={this.state.time.toLocaleTimeString()}*/}
        {/*    onDragEnd={this._onDragEvent}*/}
        {/*    onInfoWindowPress={this._onInfoWindowPress}*/}
        {/*    coordinate={this._coordinates[0]}*/}
        {/*  />*/}
        {/*  <MapView.Marker color="green" coordinate={this._coordinates[1]}>*/}
        {/*    <TouchableOpacity*/}
        {/*      activeOpacity={0.9}*/}
        {/*      onPress={this._onInfoWindowPress}>*/}
        {/*      <View style={styles.customInfoWindow}>*/}
        {/*        <Text>自定义信息窗口</Text>*/}
        {/*        <Text>{this.state.time.toLocaleTimeString()}</Text>*/}
        {/*      </View>*/}
        {/*    </TouchableOpacity>*/}
        {/*  </MapView.Marker>*/}
        {/*  <MapView.Marker*/}
        {/*    image="flag"*/}
        {/*    title="自定义图片"*/}
        {/*    onPress={this._onMarkerPress}*/}
        {/*    coordinate={this._coordinates[2]}*/}
        {/*  />*/}
        {/*  <MapView.Marker*/}
        {/*    title="自定义 View"*/}
        {/*    icon={() => (*/}
        {/*      <View style={styles.customMarker}>*/}
        {/*        <Text style={styles.markerText}>*/}
        {/*          {this.state.time.toLocaleTimeString()}*/}
        {/*        </Text>*/}
        {/*      </View>*/}
        {/*    )}*/}
        {/*    coordinate={this._coordinates[3]}*/}
        {/*  />*/}
        {/*</MapView>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customIcon: {
    width: 40,
    height: 40,
  },
  customInfoWindow: {
    backgroundColor: '#8bc34a',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#689F38',
    marginBottom: 5,
  },
  customMarker: {
    backgroundColor: '#009688',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  markerText: {
    color: '#fff',
  },
});

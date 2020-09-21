import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

const walkImg = require('../images/bg_menu_walk.png');

export default class HomePage extends Component {
  // navigationOptions
  // <li>header：设置导航属性，如果设置为null则隐藏顶部导航栏。</li>
  // <li>headerTitle：设置导航栏标题。</li>
  // <li>headerBackImage：设置后退按钮的自定义图片。</li>
  // <li>headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。</li>
  // <li>headerTruncatedBackTitle：设置上个页面标题不符合返回箭头后面的文字时显示的文字。</li>
  // <li>headerRight：设置导航栏右侧展示的React组件。</li>
  // <li>headerLeft：设置标题栏左侧展示的React组件。</li>
  // <li>headerStyle：设置导航条的样式，如背景色、宽高等。</li>
  // <li>headerTitleStyle：设置导航栏的文字样式。</li>
  // <li>headerBackTitleStyle：设置导航栏上【返回】文字的样式。</li>
  // <li>headerLeftContainerStyle：自定义导航栏左侧组件容器的样式，例如增加padding值。</li>
  // <li>headerRightContainerStyle：自定义导航栏右侧组件容器的样式，例如增加 padding值。</li>
  // <li>headerTitleContainerStyle：自定义 导航栏标题组件容器的样式，例如增加 padding值。</li>
  // <li>headerTintColor：设置导航栏的颜色。</li>
  // <li>headerPressColorAndroid：设置导航栏被按下时的颜色纹理，Android需要版本大于5.0。</li>
  // <li>headerTransparent：设置标题背景是否透明。</li>
  // <li>gesturesEnabled：设置是否可以使用手势关闭当前页面，iOS默认开启，Android默认关闭。</li>
  constructor() {
    super();
    this.state = {
      menus: [
        {
          name: 'walk',
          label: '遛一遛',
          route: 'Walk',
          icon: walkImg,
        },
        {
          name: 'buried',
          label: '嗅一嗅',
          route: 'Buried',
          icon: walkImg,
        },
        {
          name: 'lookfor',
          label: '藏东西',
          route: 'Lookfor',
          icon: walkImg,
        },
        {
          name: 'medical',
          label: '紧急防护',
          route: 'Medical',
          icon: walkImg,
        },
      ],
    };
  }
  render() {
    const { menus } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image
            source={require('../images/bg_expression1.png')}
            style={styles.slogan}
            resizeMode={'contain'}
          />
          <View style={styles.menuWrapper}>
            {menus.map((m) => (
              <ImageBackground
                key={m.name}
                source={m.icon}
                style={styles.menuItem}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3FF',
  },
  slogan: {
    width: 313,
    height: 290,
    marginLeft: 62,
    marginTop: 134,
  },
  menuWrapper: {
    backgroundColor: 'yellowgreen',
    marginTop: 40,
    marginBottom: 57,
    height: 243,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  menuItem: {
    width: 171,
    height: 117,
    backgroundColor: '#cccfff',
  },
});

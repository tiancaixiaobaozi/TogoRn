import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Order from '../pages/Order';
import My from '../pages/My';

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
      },
    },
    Discover: {
      screen: Discover,
      navigationOptions: {
        headerTitle: 'ByeBye',
        tabBarLabel: '分类',
      },
    },
    Order: {
      screen: Order,
      navigationOptions: {
        tabBarLabel: '订单',
      },
    },
    My: {
      screen: My,
      navigationOptions: {
        tabBarLabel: '我的',
      },
    },
  },
  {
    initialRouteName: 'Home',
    //tab bar的位置, 可选值： 'top' or 'bottom'
    tabBarPosition: 'bottom',
    tabBarOptions: {
      //当前选中的tab bar的文本颜色和图标颜色
      activeTintColor: '#10dff1',
      //当前未选中的tab bar的文本颜色和图标颜色
      inactiveTintColor: '#999999',
      //是否显示tab bar的图标，默认是false
      showIcon: true,
      //showLabel: 是否显示tab bar的文本，默认是true
      showLabel: true,
      //是否将文本转换为大小，默认是true
      upperCaseLabel: false,
      //material design中的波纹颜色(仅支持Android >= 5.0)
      pressColor: '#788493',
      //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
      pressOpacity: 0.8,
      //tab bar的样式
      style: {
        backgroundColor: '#fff',
        paddingBottom: 1,
        borderTopWidth: 0.2,
        paddingTop: 1,
        borderTopColor: '#ccc',
      },
      //tab bar的文本样式
      labelStyle: {
        fontSize: 11,
        margin: 1,
      },
      tabStyle: {
        height: 45,
      },
      //tab 页指示符的样式 (tab页下面的一条线).
      indicatorStyle: { height: 0 },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Discover') {
          icon = focused
            ? require('../img/fri_sel.png')
            : require('../img/fri_nor.png');
        } else if (routeName === 'Order') {
          icon = focused
            ? require('../img/car_sel.png')
            : require('../img/car_nor.png');
        } else if (routeName === 'My') {
          icon = focused
            ? require('../img/deal_sel.png')
            : require('../img/deal_nor.png');
        } else if (routeName === 'Home') {
          icon = focused
            ? require('../img/home_sel.png')
            : require('../img/home_nor.png');
        }
        return <Image style={styles.icon} source={icon} />;
      },
    }),
    //是否允许滑动切换tab页
    swipeEnabled: false,
    //是否在切换tab页时使用动画
    animationEnabled: false,
    //是否懒加载
    lazy: true,
    //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'none',
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default createAppContainer(Tab);

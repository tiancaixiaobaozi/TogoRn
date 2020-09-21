import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Pet from '../pages/Pet';
import My from '../pages/My';

// navigationOptions {...}
// title: 可以用作headerTitle和tabBarLabel的备选的通用标题。
// tabBarVisible: 显示或隐藏TabBar，默认显示；
// tabBarIcon: 设置TabBar的图标；
// tabBarLabel: 设置TabBar的标签；
// tabBarOnPress: Tab被点击的回调函数，它的参数是一保函一下变量的对象：
// navigation: navigation prop ；
// defaultHandler: tab按下的默认处理程序；
// tabBarButtonComponent：React组件，它包装图标和标签并实现onPress。 默认情况下是TouchableWithoutFeedback的一个封装，使其其表现与其它可点击组件相同，tabBarButtonComponent: TouchableOpacity 将使用 TouchableOpacity 来替代；
// tabBarAccessibilityLabel：选项卡按钮的辅助功能标签。 当用户点击标签时，屏幕阅读器会读取这些信息。 如果您没有选项卡的标签，建议设置此项；
// tabBarTestID：用于在测试中找到该选项卡按钮的 ID；

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
      },
    },
    Pet: {
      screen: Pet,
      navigationOptions: {
        tabBarLabel: '养宠',
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
      activeTintColor: '#3667EE',
      //当前未选中的tab bar的文本颜色和图标颜色
      inactiveTintColor: '#333333',
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
        if (routeName === 'Home') {
          icon = focused
            ? require('../images/icon_tab_home_a.png')
            : require('../images/icon_tab_home.png');
        } else if (routeName === 'Pet') {
          icon = focused
            ? require('../images/icon_tab_pet_a.png')
            : require('../images/icon_tab_pet.png');
        } else if (routeName === 'My') {
          icon = focused
            ? require('../images/icon_tab_my_a.png')
            : require('../images/icon_tab_my.png');
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
    width: 24,
    height: 24,
  },
});

export default createAppContainer(Tab);

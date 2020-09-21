import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNav from './components/TabNav';
import LoginScreen from './pages/Login/LoginScreen';
import LoginByVerify from './pages/Login/LoginByVerify';
import ForgetPass from './pages/Login/ForgetPass';
import RegisterScreen from './pages/Login/RegisterScreen';
import Demo from './pages/Demo';

const App = createStackNavigator(
  {
    // 登录页
    Login: { screen: LoginScreen },
    // 短信登录
    LoginByVerify: { screen: LoginByVerify },
    // 忘记密码
    ForgetPass: { screen: ForgetPass },
    // 注册页
    RegisterScreen: { screen: RegisterScreen },
    // 测试页
    Demo: { screen: Demo },
    Main: {
      screen: TabNav,
      navigationOptions: (props) => {
        const { navigation } = props;
        const { state, setParams, _childrenNavigation } = navigation;
        // 子路由数组
        const childRoutes = state.routes;
        // 当前子路由索引
        const currentIndex = state.index;
        // 当前子路由的key
        const currentChildKey = childRoutes[currentIndex].key;
        // 当前子路由的routeName
        const title = childRoutes[currentIndex].routeName;
        // 当前子路由的params
        const currentChildParams = childRoutes[currentIndex].params;
        // 当前子路由对象 TODO _childrenNavigation的获取方式
        // const { setParams } = _childrenNavigation[currentChildKey];
        switch (currentIndex) {
          case 0:
            return {
              header: null,
            };
          case 1:
            return {
              header: null,
            };
          case 2:
            return {
              title: '个人中心',
            };
          default:
            break;
        }
      },
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(App);

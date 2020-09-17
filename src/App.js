import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNav from './components/TabNav';
import LoginScreen from './pages/Login/LoginScreen';
import LoginByVerify from './pages/Login/LoginByVerify';
import ForgetPass from './pages/Login/ForgetPass';
import RegisterScreen from './pages/Login/RegisterScreen';

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
    Main: {
      screen: TabNav,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(App);

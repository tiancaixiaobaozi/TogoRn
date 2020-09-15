// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabNav from './components/TabNav';
import LoginScreen from './pages/Login/LoginScreen';
import LoginByVerify from './pages/Login/LoginByVerify';
// import ForgetPsw from './pages/Login/ForgetPsw';
// import RegisterMerchant from './pages/Login/RegisterMerchant';
// import RegisterMerchantNext from './pages/Login/RegisterMerchantNext';
// import RegisterSuccess from './pages/Login/RegisterSuccess';

// ForgetPsw: { screen: ForgetPsw }, // 忘记密码
// RegisterMerchant: { screen: RegisterMerchant }, // 注册页
// RegisterMerchantNext: { screen: RegisterMerchantNext }, // 注册下一页
// RegisterSuccess: { screen: RegisterSuccess }, // 注册成功

const App = StackNavigator(
  {
    Login: { screen: LoginScreen }, // 登录页
    LoginByVerify: { screen: LoginByVerify }, // 短信登录
    Main: {
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen',
  },
);

export default App;

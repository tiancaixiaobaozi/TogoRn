import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  Platform,
  Keyboard,
  Dimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { checkMobile } from '../../util';
import {
  isIphoneX,
  zAppBarHeight,
  zdp,
  zsp,
  zStatusBarHeight,
  zWidth,
} from '../../util/ScreenUtil';
import { cusColors } from '../../util/cusColors';
import MyTextInputWithIcon from '../../components/MyTextInputWithIcon';
import ZText from '../../components/ZText';
import MyButtonView from '../../components/MyButtonView';

const { width, height } = Dimensions.get('window');

export default class LoginView extends Component {
  constructor() {
    super();

    this.state = {
      phone: '',
      password: '',
    };
    this._onPress = this._onPress.bind(this);
  }

  static defaultProps = {
    onPress: null,
  };

  _onPress() {
    Keyboard.dismiss();
    if (!checkMobile(this.state.phone)) {
      return;
    }
    this.props.navigate('Home');
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, width: zWidth, backgroundColor: 'white' }}
        behavior="padding"
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View
          style={{
            flex: 1,
            marginTop: Platform.OS === 'ios' ? -zStatusBarHeight : 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            source={{ uri: isIphoneX() ? 'login_bg_x' : 'login_bg' }}
            resizeMode={'cover'}
            style={{
              width: width,
              height: height,
              position: 'absolute',
            }}
          />
          <View style={{ justifyContent: 'center', alignItems: 'center' }} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              source={require('../../img/logo2.png')}
              style={{
                width: zdp(140),
                height: zdp(80),
                marginTop: zAppBarHeight + zdp(20),
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <MyTextInputWithIcon
          style={{ marginTop: zdp(160) }}
          maxLength={11}
          placeholder={'请输入手机号'}
          keyboardType={'numeric'}
          iconName={'login_phone'}
          defaultValue={this.state.phone}
          onChangeText={(text) => {
            this.setState({
              phone: text,
            });
          }}
        />
        <MyTextInputWithIcon
          secureTextEntry={true}
          placeholder={'密码登录'}
          defaultValue={this.state.password}
          // keyboardType={'email-address'}
          iconName={'login_psw'}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />
        <MyButtonView
          style={{ width: width / 1.3, marginTop: zdp(75.5) }}
          modal={1}
          title={'登 录'}
          onPress={this._onPress}
        />
        <View style={styles.wtf}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: zdp(5),
            }}
            onPress={this.pressLoginByVerify}>
            <ZText
              parentStyle={{ marginLeft: zdp(40) }}
              content={'验证码登录'}
              fontSize={zsp(16)}
              color={cusColors.text_secondary}
              textAlign={'center'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: zdp(5),
            }}
            onPress={this.pressForgetPsw}>
            <ZText
              parentStyle={{ marginRight: zdp(40) }}
              content={'忘记密码?'}
              fontSize={zsp(16)}
              color={cusColors.text_secondary}
              textAlign={'center'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: zdp(5),
            marginTop: zdp(40),
          }}>
          <ZText
            content={'没有账号?'}
            fontSize={zsp(16)}
            color={cusColors.text_secondary}
          />
          <MyButtonView
            style={{ width: zdp(80), height: zdp(30), marginTop: zdp(0) }}
            modal={1}
            title={'注册账号'}
            fontSize={zsp(16)}
            onPress={this.pressRegister.bind(this)}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }

  pressLoginByVerify = () => {
    this.props.navigate('LoginByVerify');
  };
  pressForgetPsw = () => {
    this.props.navigate('ForgetPass');
  };
  pressRegister = () => {
    this.props.navigate('RegisterScreen');
  };
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  wtf: {
    marginTop: zdp(15),
    top: zdp(5),
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

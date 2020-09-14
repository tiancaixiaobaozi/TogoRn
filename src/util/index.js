import { Dimensions } from 'react-native';
import ToastUtil from './ToastUtil';
import CountdownUtil from './CountdownUtil';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

/**
 * 像素适配
 * @param px
 * @return {number}
 */
export function px2dp(px) {
  return (px * deviceW) / basePx;
}

/**
 * 检验手机号
 * @param mobile
 * @return {boolean}
 */
export function checkMobile(mobile) {
  if (mobile !== '') {
    const pattern = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|)+\d{8})$/;
    if (pattern.test(mobile) === false) {
      ToastUtil.showShort('手机号格式不正确');
      return false;
    } else {
      return true;
    }
  } else {
    ToastUtil.showShort('手机号码不得为空');
    return false;
  }
}

/**
 * 发送短信验证码
 * @param phone
 * @param isSentVerify
 * @param callBack1
 * @param callBack2
 * @param callBack3
 */
export function pressVerify(
  phone,
  isSentVerify,
  callBack1,
  callBack2,
  callBack3,
) {
  if (phone.length === 11) {
    if (isSentVerify === true) {
      // 倒计时时间
      let countdownDate = new Date(new Date().getTime() + 10 * 1000);
      // 点击之后验证码不能发送网络请求
      callBack1();
      let formData = new FormData();
      formData.append('phone', phone);
      // TODO request
      if (true) {
        CountdownUtil.setTimer(countdownDate, (time) => {
          callBack2(time);
        });
      } else {
        callBack3();
        ToastUtil.showShort('request error');
      }
    }
  } else {
    ToastUtil.showShort('请输入正确的手机号');
  }
}

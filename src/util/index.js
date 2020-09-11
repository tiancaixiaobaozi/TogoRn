import { Dimensions } from 'react-native';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

/**
 * 像素适配
 * @param px
 * @return {number}
 */
export default function px2dp(px) {
  return (px * deviceW) / basePx;
}

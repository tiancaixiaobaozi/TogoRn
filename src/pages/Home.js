import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

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
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Text style={styles.font}>Hello World-1</Text>
          <Text style={styles.font}>Hello World-2</Text>
          <Text style={styles.font}>Hello World-3</Text>
          <Text style={styles.font}>Hello World-4</Text>
          <Text style={styles.font}>Hello World-5</Text>
          <Text style={styles.font}>Hello World-6</Text>
          <Text style={styles.font}>Hello World-7</Text>
          <Text style={styles.font}>Hello World-8</Text>
          <Text style={styles.font}>Hello World-9</Text>
          <Text style={styles.font}>Hello World-10</Text>
          <Text style={styles.font}>Hello World-11</Text>
          <Text style={styles.font}>Hello World-12</Text>
          <Text style={styles.font}>Hello World-13</Text>
          <Text style={styles.font}>Hello World-14</Text>
          <Text style={styles.font}>Hello World-15</Text>
          <Text style={styles.font}>Hello World-16</Text>
          <Text style={styles.font}>Hello World-17</Text>
          <Text style={styles.font}>Hello World-18</Text>
          <Text style={styles.font}>Hello World-19</Text>
          <Text style={styles.font}>Hello World-20</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>Hello World-21</Text>
          <Text style={styles.font}>-----End------</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#64958f',
    padding: 20,
  },
  font: {
    fontSize: 24,
    color: '#fff',
  },
});

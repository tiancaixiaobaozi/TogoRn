import ToastUtil from './ToastUtil';

export const common_url = 'http://******/';

export const fetchRequest = (url, method, params) => {
  console.log('request url:', url, method, params); //打印请求参数
  if (!params) {
    //如果网络请求中没有参数
    return new Promise(function (resolve, reject) {
      fetch(common_url + url, {
        method: method,
        // headers: header
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData); //网络请求成功返回的数据
          // if (responseData.respCode !== 200) {
          //     ToastUtil.showShort(responseData.respMsg);
          // }
          resolve(responseData);
        })
        .catch((err) => {
          ToastUtil.showShort(err);
          console.log(err);
          reject(err);
        });
    });
  } else {
    //如果网络请求中带有参数
    return new Promise(function (resolve, reject) {
      fetch(common_url + url, {
        method: method,
        body: params,
        // body: JSON.stringify(params)//body参数，通常需要转换成字符串后服务器才能解析
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData); //网络请求成功返回的数据
          // if (responseData.respCode !== 200) {
          // ToastUtil.showShort(responseData.respMsg);
          // }
          resolve(responseData);
        })
        .catch((err) => {
          /* if ('Network request failed' == err) {

               ToastUtil.showShort('网络连接失败,请检查网路');
           } else {
               ToastUtil.showShort('网络请求错误');
           }*/
          ToastUtil.showShort(err);
          console.log(err); //网络请求失败返回的数据
          reject(err);
        });
    });
  }
};

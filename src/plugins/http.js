import axios from 'axios';
import qs from 'qs'
var instance = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: 90000, // 请求的超时时间
  withCredentials: true, // 允许携带cookie
  transformRequest: [function (data) {
    for (var it in data) {
      if (data[it] == null || data[it] == undefined || data[it] === '') {
        delete data[it];
      }
    }
    // return qs.stringify(data);
    return JSON.stringify(data);
  }],
  showDefaultErrorMsg: true
});

instance.defaults.headers.common['Access-Control-Allow-origin'] = '*';
instance.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
// request interceptor
instance.interceptors.request.use(function (config) {
  debugger
  config.params = config.params || {};
  config.params.cookie_pawj_medical_user_name='aimin'
  return config;
}, function (error) {
  Promise.reject(error);
});

// respone interceptor
instance.interceptors.response.use(function (response) {
  if (response.config.loading) {
  }
  if (typeof response.data === 'string') {
    if (response.data.indexOf('404') !== -1) {
      
    } else if (response.data.indexOf('500') !== -1) {
      
    }
    return;
  }

  // E0000000,表示当前接口调用正常
  else if (response.data.errorCode == 'E0000000') {
      return response.data;
    } else if (response.data.errorCode === 'EU1SP0112') {
      return response.data;
    } else {
      //其他处理
      if (response.config.showDefaultErrorMsg) {
        return Promise.reject(response);
      } else {
        return Promise.reject(response);
      }
    }
}, function (error) {
  console.error(error);
  
  return Promise.reject(error.response.data);
});

function installHttp(Vue) {
  Vue.http = instance;
  Vue.prototype.$http = instance;
}


export default installHttp
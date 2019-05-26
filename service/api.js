import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://127.0.0.1:80/';
// axios.defaults.baseURL = 'http://www.xinfangquan.cn/';

// POST传参序列化
// axios.interceptors.request.use((config) => {
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//   }
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })
// // 返回状态判断
// axios.interceptors.response.use((res) => {
//   if (res.status === 200) {
//     return res
//   } else {
//     return Promise.reject(res)
//   }
// }, (error) => {
//   return Promise.reject(error)
// })

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  //登录
  userLogin (params) {
    return fetch('/wapApi/index.php/user/login/login', params)
  },
  uploadAvatar (params) {
    return fetch('/wapApi/index.php/user/login/upload', params)
  },


  //房产
  getHotHouse (params) {
    //获取热门房产
    return fetch('/wapApi/index.php/house/house/getHotHouse', params)
  },
  getNewHouse (params) {
    //获取楼盘列表
    return fetch('/wapApi/index.php/house/house/query', params)
  },
}
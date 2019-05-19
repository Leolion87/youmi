// import axios from 'axios'
// import qs from 'qs'
// import config from './config'

// if (process.server) {
//     config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
// };

// const service = axios.create(config)

// service.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );
// // 返回结果处理
// service.interceptors.response.use(
//     res => {
//         return res.data
//     },
//     error => {
//         return Promise.reject(error)
//     }
// );

// export default service
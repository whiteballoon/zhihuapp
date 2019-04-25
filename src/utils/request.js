import axios from 'axios'
// import qs from 'qs'
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8080', // api的base_url
  timeout: 10000// 请求超时时间
})

// request拦截器
// service.interceptors.request.use(config => {
//   if (config.method == 'post') {
//     config.data = qs.stringify(config.data)
//   }
//   if (store.getters.token) {
//     config.headers['Auth'] = getToken()
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// respone拦截器
// service.interceptors.response.use(
//   response => {
//     /**
//      * code为非20000是抛错 可结合自己业务进行修改
//      */
//     const res = response.data
//     if (res.success !== true && (res.code != 20728 && res.code != 20729 && res.code != 40108)) {
//       Message({
//         message: res.msg,
//         type: 'error',
//         duration: 2 * 1000
//       })

//       // 1001登录退出
//       if (res.code === 1001) {

//       }

//       return Promise.reject(res.msg)
//     } else {
//       return response.data
//     }
//   },
//   error => {
//     console.log('err' + error)// for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 10 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service

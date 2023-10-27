import axios from 'axios'

import { getKey, KEY, delKey } from '@/utils/stoage'
import { Toast } from 'vant'
import router from '@/router'

const request = axios.create({
  baseURL: 'https://consult-api.itheima.net/',
  timout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = getKey(KEY)
    token && (config.headers.Authorization = 'Bearer ' + token)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    if (error.request.message === 401) {
      router.push('/login')
      // 请求错误清除token
      delKey(KEY)
    } else {
      // 对响应错误做点什么
      Toast.fail(error.response?.data?.message || '系统出现错误，请稍后')
    }
    return Promise.reject(error)
  }
)
export default request

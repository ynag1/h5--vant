import request from '@/utils/request'
export const loginAPI = (data) => {
  return request({
    url: 'login/password',
    method: 'post',
    data
  })
}

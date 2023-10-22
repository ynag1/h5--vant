import request from '@/utils/request'
export const loginAPI = (data) => {
  return request({
    url: 'login/password',
    method: 'post',
    data
  })
}
export const UserAPI = () => {
  return request({
    url: 'patient/myUser',
    method: 'get'
  })
}

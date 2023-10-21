import request from '@/utils/request'
export const loginAPI = (data) => {
  console.log(data)
  return request({
    url: 'login/password',
    method: 'post',
    params: { data }
  })
}

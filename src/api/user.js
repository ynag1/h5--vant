import request from '@/utils/request'

// 登录接口
export const loginAPI = (data) => {
  return request({
    url: 'login/password',
    method: 'post',
    data
  })
}
// 点击跳转qq三方登录
export const thirdpartyAPI = (data) => {
  return request({
    url: 'login/thirdparty',
    method: 'post',
    data
  })
}

// 获取手机验证码接口 https://consult-api.itheima.net/code
export const CodeAPI = (data) => {
  return request({
    url: 'code',
    method: 'get',
    data
  })
}
// 验证码登录
export const VerificationAPI = (data) => {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}
// 个人资料详情
export const UserAPI = () => {
  return request({
    url: 'patient/myUser',
    method: 'get'
  })
}
// --------------
// 首页-查询推荐/减脂/饮食健康/关注页面--百科文章列表
export const knowledgeAPI = (data) => {
  return request({
    url: 'patient/home/knowledge',
    method: 'get',
    data
  })
}

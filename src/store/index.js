import Vue from 'vue'
import vuex from 'vuex'
//  localStorage 调用把token取出或存储 获取 getKey ，setKey 存储
import { getKey, setKey, KEY, delKey } from '../utils/stoage'

Vue.use(vuex)
export default new vuex.Store({
  // 子组件相对于把文件加锁
  // namespaced: true
  // 开启严格模式
  strict: true,
  state: {
    // 保存公共数据 在设置vuex中的初值时，先从本地存储中取，如果取不到，则初始为空
    token: getKey() || ''
  },
  mutations: {
    // 存储 token
    SetTokenInfo(state, token) {
      state.token = token
      setKey(KEY, token)
      // console.log(state.token)
      // 因为刷新会丢失所以进行持久化 调用storage文件里方法
    },
    // 点击删除
    delKeyToken(state) {
      state.token = ''
      console.log(state.token)
      delKey()
    }
  },
  actions: {},
  getters: {
    // 派生数据
  },
  modules: {
    // 模块化
  }
})

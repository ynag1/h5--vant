// 全局前置守卫：
// 1. 所有的路由一旦被匹配到，在真正渲染解析之前，都会先经过全局前置守卫
// 2. 只有全局前置守卫放行，才能看到真正的页面

// 任何路由，被解析访问前，都会先执行这个回调
// 1. from 你从哪里来， 从哪来的路由信息对象
// 2. to   你往哪里去， 到哪去的路由信息对象
// 3. next() 是否放行，如果next()调用，就是放行 => 放你去想去的页面
//    next(路径) 拦截到某个路径页面
import router from '@/router'

// getKey取值
import { KEY, getKey } from '@/utils/stoage'

const whiteList = ['/login'] // 白名单列表，记录无需权限访问的所有页面

router.beforeEach((to, from, next) => {
  const token = getKey(KEY)
  // 如果有token，直接放行
  if (token) {
    next()
  } else {
    // 没有token的人, 看看你要去哪
    // (1) 访问的是无需授权的页面（白名单），也是放行
    //     就是判断，访问的地址，是否在白名单数组中存在 includes
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // (2) 否则拦截到登录
      next('/login')
    }
  }
})

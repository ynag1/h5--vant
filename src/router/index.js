import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/activate',
    name: '启动',
    component: () => import('@/views/activate/activate')
  },
  {
    path: '/',
    name: '布局容器',
    component: () => import('@/views/components/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '布局容器',
        component: () => import('@/views/home/home')
      },
      {
        path: '/article',
        name: '健康百科',
        component: () => import('@/views/article/article')
      },
      {
        path: '/notify',
        name: '消息通知',
        component: () => import('@/views/notify/notify')
      },
      {
        path: '/user',
        name: '个人中心',
        component: () => import('@/views/user/user')
      }
    ]
  },
  {
    path: '/callback',
    name: 'QQ登录回跳',
    component: () => import('@/views/components/callback')
  },
  {
    path: '/consult',
    name: '我的问诊',
    component: () => import('@/views/components/consult')
  },
  {
    path: '/consultid',
    name: '问诊详情',
    component: () => import('@/views/components/consultid')
  },
  {
    path: '/dep',
    name: '选择科室',
    component: () => import('@/views/components/dep')
  },
  {
    path: '/fast',
    name: '快速问诊',
    component: () => import('@/views/components/fast')
  },
  {
    path: '/illness',
    name: '病情描述',
    component: () => import('@/views/components/illness')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/components/login')
  },
  {
    path: '/logisticsid',
    name: '药品订单物流',
    component: () => import('@/views/components/logisticsid')
  },
  {
    path: '/opay',
    name: '药品订单支付',
    component: () => import('@/views/components/opay')
  },
  {
    path: '/orderid',
    name: '药品订单详情',
    component: () => import('@/views/components/orderid')
  },
  {
    path: '/patient',
    name: '家庭档案',
    component: () => import('@/views/components/patient')
  },
  {
    path: '/pay',
    name: '问诊支付',
    component: () => import('@/views/components/pay')
  },
  {
    path: '/payresult',
    name: '药品订单支付结果',
    component: () => import('@/views/components/payresult')
  },
  {
    path: '/room',
    name: '问诊室',
    component: () => import('@/views/components/room')
  }
]

const router = new VueRouter({
  routes
})

export default router

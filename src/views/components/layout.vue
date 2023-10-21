<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout-page">
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item to="/home" icon="wap-home-o">我的</van-tabbar-item>
      <van-tabbar-item to="/article" icon="orders-o">健康百科</van-tabbar-item>
      <van-tabbar-item to="/notify" icon="comment-circle-o"
        >消息通知</van-tabbar-item
      >
      <van-tabbar-item to="/user" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: { // 引入组件
  },
  data () {
    return {
    }
  },
  watch: {},
  created () { },
  methods: {},
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang=''>
</style>

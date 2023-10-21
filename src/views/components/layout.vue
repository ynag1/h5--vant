<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout-page">
    布局容器
    <router-view></router-view>
    <router-link to="/home">我的</router-link>
    <router-link to="/article">健康百科</router-link>
    <router-link to="/notify">消息通知</router-link>
    <router-link to="/user">个人中心</router-link>
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

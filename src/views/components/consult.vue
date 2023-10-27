<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar title="问诊记录" left-arrow @click-left="$router.back()" />
    <van-tabs v-model="active" class="tabs-vant">
      <van-tab title="极数问诊">内容 1</van-tab>
      <van-tab title="找医生">内容 2</van-tab>
      <van-tab title="开药问诊">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: { // 引入组件
  },
  data () {
    return {
      active: 0
    }
  },
  watch: {},
  created () {
  },
  methods: {
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang='less'>
.tabs-vant {
  height: 100vh;
  background-color: #f5f5f5;
  .van-tab__pane {
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
  }
}
</style>

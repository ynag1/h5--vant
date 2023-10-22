<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="user-page">
    <div class="user">
      <img
        src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png"
        alt=""
      />
      <h3>用户名</h3>
    </div>
    <van-grid clickable :column-num="3" :border="false">
      <van-grid-item icon="clock-o" text="历史记录" to="/" />
      <van-grid-item icon="bookmark-o" text="我的收藏" to="/collect" />
      <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/like" />
    </van-grid>

    <van-cell-group class="mt20">
      <van-cell title="推荐分享" is-link />
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于我们" is-link />
      <van-cell title="退出登录" is-link />
    </van-cell-group>
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
<style scoped lang='less'>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
}
</style>

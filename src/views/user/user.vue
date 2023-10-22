<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="user-page">
    <!-- 用户名 -->
    <div>
      <div class="user">
        <img :src="data.avatar" alt="" />
        <h3>{{ data.account }}</h3>
      </div>
      <van-grid :border="false" :center="false">
        <van-grid-item text="收藏" />
        <van-grid-item text="关注" />
        <van-grid-item text="积分" />
        <van-grid-item text="优惠券" />
      </van-grid>
    </div>
    <div>
      <!-- 药品订单 -->
      <van-cell-group class="mt20">
        <van-cell value="内全部订单容" title=" 药品订单" is-link />
      </van-cell-group>
      <van-grid :border="false" :center="false">
        <van-grid-item icon="photo-o" text="待付款" />
        <van-grid-item dot icon="photo-o" text="待发货" />
        <van-grid-item icon="photo-o" text="待收获" />
        <van-grid-item icon="photo-o" text="已完成" />
      </van-grid>
    </div>

    <!-- 快捷工具 -->
    <div>
      <van-cell-group class="mt20">
        <van-cell title=" 快捷工具" style="font-weight: 600; font-size: 18px" />
        <van-cell title=" 我的问诊" to="/consult" is-link icon="orders-o" />
        <van-cell title=" 我的处方" to="/home" is-link icon="completed-o" />
        <van-cell title=" 家庭档案" to="/patient" is-link icon="manager-o" />
        <van-cell title=" 地址管理" to="/home" is-link icon="list-switch" />
        <van-cell title=" 我的评价" to="/home" is-link icon="records-o" />
        <van-cell title=" 官方客服" to="/home" is-link icon="friends-o" />
        <van-cell title=" 设置" to="/home" is-link icon="setting-o" />
      </van-cell-group>
    </div>
    <!-- 退出 -->
    <van-button
      size="large"
      :round="true"
      style="background-color: #16c2a3; color: #fff; margin-top: 20px"
      @click="removeBtn"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import { UserAPI } from '@/api/user'
import { delKey, KEY } from '@/utils/stoage'
export default {
  components: { // 引入组件
  },
  data () {
    return {
      data: {}
    }
  },
  watch: {},
  created () {
    this.UserAPI()
  },
  methods: {
    // 点击退出。删除token
    removeBtn () {
      delKey(KEY)
      this.$toast.success('退出登录')
      this.$router.push('/login')
    },
    // 获取用户详情信息
    async UserAPI () {
      const { data } = await UserAPI()
      this.data = data
      console.log(data)
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang='less'>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 110vh;
  padding-bottom: 100px;
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

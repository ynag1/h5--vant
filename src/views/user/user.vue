<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="user-page">
    <!-- 用户名 -->
    <div>
      <div class="user">
        <img :src="data.avatar" alt="" />
        <h3>{{ data.account }}</h3>
        <br />
      </div>
      <div class="user-P">
        <div>
          <p class="user-pp">{{ list.finishedNumber }}</p>
          <p style="font-size: 10px; color: #8e8e8e">收藏</p>
        </div>
        <div>
          <p class="user-pp">{{ list.paidNumber }}</p>
          <p style="font-size: 10px; color: #8e8e8e">关注</p>
        </div>
        <div>
          <p class="user-pp">{{ list.receivedNumber }}</p>
          <p style="font-size: 10px; color: #8e8e8e">积分</p>
        </div>
        <div>
          <p class="user-pp">{{ list.shippedNumber }}</p>
          <p style="font-size: 10px; color: #8e8e8e">优惠券</p>
        </div>
      </div>
    </div>
    <!--  问诊中-->
    <div>
      <van-cell-group class="mt20" style="padding-left: 10px">
        <van-cell title=" 问诊中" :border="false" style="border-radius: 20px" />
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <template>
              <div class="user-hand">
                <img src="../../assets/qq.svg" alt="" />
                <div class="user-hand-p" van-multi-ellipsis--l2>
                  <span class="hand-p">王医生</span>
                  <span class="hand-sp">内分泌科 </span>
                  <span class="hand-sp">| 主任</span>
                  <div class="hand-div">
                    <van-button
                      size="mini"
                      color="#677FFF"
                      style="height: 16px; margin-right: 5px"
                      >三甲</van-button
                    >
                    <span class="hand-span">积水潭医院</span>
                  </div>
                </div>
                <div class="hant-button">
                  <van-button round plain type="primary" size="small"
                    >进入咨询</van-button
                  >
                </div>
              </div>
            </template>
          </van-swipe-item>
          <van-swipe-item>
            <template>
              <div class="user-hand">
                <img src="../../assets/qq.svg" alt="" />
                <div class="user-hand-p">
                  <span class="hand-p">王医生</span>
                  <span class="hand-sp">内分泌科 </span>
                  <span class="hand-sp">| 内分</span>
                  <div class="hand-div">
                    <van-button
                      size="mini"
                      color="#677FFF"
                      style="height: 16px; margin-right: 5px"
                      >迷你</van-button
                    >
                    <span class="hand-span">王医生</span>
                    <span class="hand-span">内分泌科</span>
                  </div>
                </div>
                <div class="hant-button">
                  <van-button round plain type="primary" size="small"
                    >进入咨询</van-button
                  >
                </div>
              </div>
            </template>
          </van-swipe-item>
        </van-swipe>
      </van-cell-group>
    </div>
    <!-- 药品订单 -->
    <div>
      <van-cell-group
        class="mt20"
        style="padding-left: 10px; border-radius: 20px"
      >
        <van-cell
          value="全部订单"
          title=" 药品订单"
          is-link
          style="border-radius: 20px"
        />
        <van-grid :border="false" style="border-radius: 20px">
          <van-grid-item
            :gutter="5"
            v-for="(item, index) in gridtextlist"
            :key="index"
            :text="item.text"
            :icon="item.photo"
          />
        </van-grid>
      </van-cell-group>
    </div>
    <!-- 快捷工具 -->
    <div>
      <van-cell-group
        class="mt20"
        :border="false"
        style="padding-left: 10px; border-radius: 20px"
      >
        <van-cell
          title=" 快捷工具"
          style="font-weight: 600; font-size: 18px; border-radius: 20px"
        />
        <van-cell title=" 我的问诊" to="/consult" is-link icon="orders-o" />
        <van-cell title=" 我的处方" to="/home" is-link icon="completed-o" />
        <van-cell title=" 家庭档案" to="/patient" is-link icon="manager-o" />
        <van-cell title=" 地址管理" to="/home" is-link icon="list-switch" />
        <van-cell title=" 我的评价" to="/home" is-link icon="records-o" />
        <van-cell title=" 官方客服" to="/home" is-link icon="friends-o" />
        <van-cell
          title=" 设置"
          to="/home"
          is-link
          icon="setting-o"
          style="border-radius: 20px"
        />
      </van-cell-group>
    </div>
    <!-- 退出 -->
    <van-button
      size="large"
      :round="true"
      style="
        border: 1px solid #f5f5f5;
        background-color: #f5f5f5;
        color: #16c2a3;
        margin-bottom: 100px;
        margin-top: 20px;
      "
      @click="removeBtn"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import { UserAPI } from '@/api/user'
export default {
  components: { // 引入组件
  },
  data () {
    return {
      data: {},
      gridtextlist: [
        {
          text: '待付款',
          icon: 'n',
          photo: require('../../assets/待付款.svg')
        },
        {
          text: '待发货',
          icon: 'w',
          photo: require('../../assets/待发货.svg')
        },
        {
          text: '待收货',
          icon: 'j',
          photo: require('../../assets/待收货.svg')
        },
        {
          text: '已完成',
          icon: 'j',
          photo: require('../../assets/已完成.svg')
        }
      ],
      list: {}
    }
  },
  watch: {},
  created () {
    this.UserAPI()
  },
  methods: {
    // 点击退出。删除token
    removeBtn () {
      this.$store.commit('delKeyToken')
      this.$toast.success('退出登录')
      this.$router.push('/login')
    },
    // 获取用户详情信息
    async UserAPI () {
      const { data } = await UserAPI()
      this.data = data
      this.list = data.orderInfo
      console.log(this.list)
    }
  },
  mounted () { },
  computed: { // 计算属性
  }
}
</script>
<style scoped lang='less'>
.user-page {
  background: #f5f5f5;
  padding-bottom: 10px;
  .mt20 {
    border-radius: 20px;
    margin: 10px;
  }
  /deep/ .van-grid-item__icon {
    width: 30px;
    height: 30px;
    border-radius: 30%;
  }
  /deep/ .van-icon__image {
    width: 100%;
    height: 100%;
    background-size: cover; /* 图片按比例缩放，填充整个容器 */
    background-position: center; /* 图片居中显示 */
    background-repeat: no-repeat; /* 不重复平铺图片 */
  }
  /deep/ .van-grid-item__content van-grid-item__content--center {
    background-color: red;
  }
  /deep/ .van-grid-item__content--center {
    border-radius: 20px;
  }
  .user {
    background-image: linear-gradient(#ceeae9, #f5f5f5);
    display: flex;
    padding: 20px 10px;
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
  .user-P {
    display: flex;
    line-height: 20px;
    justify-content: space-evenly;
    text-align: center;
    .user-pp {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}
/deep/ .van-cell__title {
  font-weight: 600;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: #fff;
}
.user-hand {
  margin: 15px 15px;
  display: flex;
  img {
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
  }
  .user-hand-p {
    padding-left: 10px;
    color: #000;
    font-size: 13px;
    .hand-p {
      margin-right: 10px;
      font-size: 16px;
      font-weight: 600;
    }
    .hand-sp {
      color: #8e8e8e;
    }
    .hand-div {
      margin-top: 10px;
      display: flex;
      height: 20px;
      span {
        display: block;
        overflow: hidden;
      }
      .hand-span {
        font-size: 14px;
      }
    }
  }
  .hant-button {
    padding-bottom: 50px;
    padding-left: 15px;
    display: flex;
    /deep/ .van-button--primary {
      overflow: hidden;
      border: 1px solid #eaf8f6;
      background-color: #eaf8f6;
    }
  }
}
</style>

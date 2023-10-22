<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar title="优医问诊" right-text="注册 >" />
    <!-- 头部 -->
    <div class="login-head">
      <span class="login-sapn">密码登录</span>
      <a href="javascript:;">
        <span>短信验证码登录</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- form表单 -->
    <van-form @submit="onSubmit">
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="username"
        name="mobile"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请填手机号' },
          { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '请重新输入手机号' },
        ]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[A-Za-z0-9]/, message: '请重新输入密码' },
        ]"
      />
      <div class="cp-cell">
        <van-checkbox>
          <span>我已同意</span>
          <a>用户协议</a>
          <span>{{ '\xa0' }}及{{ '\xa0' }}</span>
          <a>隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          style="background-color: #42c2a3"
          >登 录</van-button
        >
      </div>
      <div class="cp-cell">忘记密码？</div>
    </van-form>
    <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="@/assets/qq.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
import { KEY, setKey } from '@/utils/stoage'

export default {
  components: { // 引入组件
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  watch: {},
  created () { },
  methods: {
    async onSubmit (values) {
      try {
        const { data: { token } } = await loginAPI(values)
        setKey(KEY, token)
        this.$toast.success('登录成功')
        this.$router.push('/user')
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>

<style scoped lang='less'>
.van-nav-bar /deep/.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
}
.login {
  &-page {
    padding-top: 25px;
  }
  &-head {
    display: flex;
    padding: 30px 30px 50px;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;
    .login-sapn {
      font-weight: 600;
      font-size: 22px;
    }
    a {
      color: #000;
      font-size: 15px;
    }
  }
  &-other {
    margin-top: 60px;
    padding: 0 30px;
    .icon {
      display: flex;
      justify-content: center;
      img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  }
}
.van-form {
  padding: 0 14px;
  .cp-cell {
    height: 52px;
    line-height: 24px;
    margin-top: 10px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .van-checkbox {
      /deep/ a {
        color: #42c2a3;
        padding: 0 5px;
      }
    }
  }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar title="优医问诊" right-text="注册" />
    <!-- 密码登录 -->
    <div v-if="isShow">
      <!-- 头部 -->
      <div class="login-head">
        <span class="login-sapn">密码登录</span>
        <van-button
          @click="isShow = false"
          style="
            border: 1px solid #fff;
            background-color: #fff;
            padding-top: 25px;
          "
          >验证码登录 ></van-button
        >
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
            {
              pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
              message: '请重新输入手机号',
            },
          ]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="password"
          name="password"
          :type="seen ? 'password' : 'text'"
          clearable
          placeholder="请输入密码"
          :rules="[
            { required: true, message: '请填写密码' },
            { pattern: /^[A-Za-z0-9]{8}$/, message: '请重新输入密码' },
          ]"
        >
          <template #button>
            <span @click="isbtnicon">
              <van-icon name="closed-eye" v-if="showeye" />
              <van-icon name="eye-o" v-else />
            </span>
          </template>
        </van-field>
        <div class="cp-cell">
          <van-checkbox v-model="checkbox">
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
        <van-divider @click="thirdpart" ref="checkboxGroup"
          >第三方登录</van-divider
        >
        <div class="icon">
          <van-image
            @click="thirdpart"
            round
            src="https://img1.baidu.com/it/u=1934536400,2803083259&fm=253&fmt=auto&app=138&f=JPEG?w=401&h=391"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- 验证码登录 -->
    <div v-else>
      <!-- 头部 -->
      <div class="login-head">
        <span class="login-sapn">验证码登录</span>
        <van-button
          @click="isShow = true"
          style="
            border: 1px solid #fff;
            background-color: #fff;
            padding-top: 25px;
          "
          >密码登录 ></van-button
        >
      </div>
      <!-- form表单 -->
      <van-form @submit="onVerification">
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="VerificationUsername"
          name="mobile"
          placeholder="请输入手机号"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="VerificationPassword"
          name="code"
          type="tel"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填验证码6位验证码' }]"
        >
          <template #button>
            <van-button
              class="sendButton"
              v-if="!sendMsgDisabled"
              size="small"
              type="primary"
              @click="Sendnote"
              >获取验证码</van-button
            >
            <van-button
              v-if="sendMsgDisabled"
              size="small"
              disabled
              type="primary"
              >{{ time + '后再次发送' }}</van-button
            >
          </template>
        </van-field>
        <div class="cp-cell">
          <van-checkbox v-model="checkbox2">
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
        <van-divider @click="thirdpart">第三方登录</van-divider>
        <div class="icon">
          <van-image
            @click="thirdpart"
            round
            src="https://img0.baidu.com/it/u=463789940,1740204642&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// VerificationAPI 验证码登录
// loginAPI密码登录
// CodeAPI 获取手机号验证码
import { loginAPI, VerificationAPI } from '@/api/user'
import { Toast } from 'vant'
// thirdpartyAPI
export default {
  components: { // 引入组件
  },
  data () {
    return {
      isShow: true,
      // 密码登录
      username: '',
      password: '',
      // '验证码登录手机号
      VerificationUsername: '13230000001',
      VerificationPassword: '',
      showeye: true,
      type: 'password',
      seen: 'password',
      // 获取验证码60秒按钮
      time: 60, // 发送验证码倒计时
      sendMsgDisabled: false,
      // 副选框点击同意
      checkbox: false,
      checkbox2: false

    }
  },
  watch: {},
  created () { },
  methods: {
    // 密码登录
    async onSubmit (values) {
      try {
        if (this.checkbox === true) {
          const res = await loginAPI(values)
          Toast(res.message)
          // 把token存储到vuex
          this.$store.commit('SetTokenInfo', res.data.token)
          // setKey(KEY, res.data.token)
          this.$router.push('/home')
        } else {
          this.$toast('请钩选同意')
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 验证码点击登录
    async onVerification (val) {
      console.log(val)
      try {
        if (this.checkbox2 === true) {
          const { data } = await VerificationAPI(val)
          console.log(data)
          // 判断验证码是否有值无值提醒，有值提示登录成功，并且跳转到我的页面
          if (this.VerificationPassword === '') {
            this.$toast.success('请输入验证码')
          } else {
            this.$toast('验证码不正确')
          }
        } else {
          this.$toast('请钩选同意')
        }
      } catch (e) { console.log(e) }
      console.log(val)
    },
    // 点击显示密码、
    isbtnicon () {
      this.showeye = !this.showeye
      this.type = this.seen ? 'password' : 'text'
      this.seen = !this.seen
    },
    // 点击获取验证码
    Sendnote () {
      const that = this
      that.sendMsgDisabled = true
      const interval = window.setInterval(function () {
        if ((that.time--) <= 0) {
          that.time = 60
          that.sendMsgDisabled = false
          window.clearInterval(interval)
        }
      }, 1000)
    },
    thirdpart () {
      Toast('没有QQ，请密码登录')
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
      /deep/ .van-image {
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
// 修改获取验证码css样式
/deep/ .van-field__button .sendButton {
  background-color: #fff;
  border: 1px solid #fff;
  .van-button__text {
    color: #16c2a3;
  }
}
</style>

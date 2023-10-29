<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar
      title="快速问诊"
      right-text="问诊记录"
      left-arrow
      @click-left="$router.back()"
    />
    <div style="ber-img">
      <div style="text-align: center; margin: 20px 0">
        <img
          style="width: 80%; height: 70%"
          src="../../assets/consult-fast.png"
          alt=""
        />
      </div>

      <div style="text-align: center">
        <span style="color: '#16C2A3'" class="ber-span">20S</span>
        <span>快速匹配专业医生</span>
      </div>
    </div>

    <van-cell is-link @click="Ondep">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="title-div">
          <img
            style="background-color: #3dc8d2"
            src="../../assets/医生.svg"
            alt=""
          />
          <div>
            <p class="custom-title">三甲图文问诊</p>
            <p class="custom-title1">三甲主治及上级别医生</p>
          </div>
        </div>
      </template>
    </van-cell>
    <van-cell is-link @click="Ondep">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="title-div">
          <img src="../../assets/图文问诊.svg" alt="" />
          <div>
            <p class="custom-title">普通图文问诊</p>
            <p class="custom-title1">二甲主治及上级别医生</p>
          </div>
        </div>
      </template>
    </van-cell>
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
  methods: {
    // 跳转到选择科室
    Ondep () {
      this.$router.push('/dep')
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang='less'>
/deep/ .van-nav-bar__title {
  font-weight: 600;
}
/deep/ .van-icon {
  font-size: 18px;
  color: #000;
}
/deep/ .van-cell--clickable {
  width: 92%;
  margin: 15px;
  border-radius: 10px;
  border: 1px solid #ededed;
}
/deep/ .van-cell__right-icon {
  height: 60px;
  line-height: 60px;
}
.title-div {
  display: flex;
  overflow: hidden;
  .custom-title {
    font-size: 16px;
    font-weight: 600;
  }
  .custom-title1 {
    font-size: 16px;
    color: #b9b8b8;
    margin-top: 5px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
}
p {
  margin: 0;
}
.ber-img {
  display: flex;
  flex-direction: column;
  /* co1umn 从上到下*/
  align-items: center;
  /* center代表水平方向 */
  justify-content: center;
  /* center代表垂直方向 */
}
</style>

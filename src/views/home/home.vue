<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-add">
    <!-- 搜索 -->
    <div class="home-search">
      <van-search
        v-model="value"
        shape="round"
        placeholder=" 搜一搜: 疾病/症状/医生/健康知识"
      />
      <!-- 导航组件 -->
      <div>
        <van-grid :border="false" :center="false">
          <van-grid-item icon="photo-o" text="问医生" to="/room">
            <span>按科室查问医生</span>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="快速问诊" to="/fast">
            <span>20s医生极速回复</span>
          </van-grid-item>
          <van-grid-item icon="photo-o" text="开药门诊">
            <span>线上买药更方便</span>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :center="false">
          <van-grid-item icon="photo-o" text="药品订单" />
          <van-grid-item icon="photo-o" text="健康档案" />
          <van-grid-item icon="photo-o" text="我的处方" />
          <van-grid-item icon="photo-o" text="疾病查询" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { // 引入组件
  },
  data () {
    return {
      value: ''
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
.home-add {
  margin: 9px;
}
.home-search {
  /deep/ .van-search__content {
    font-size: 19px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 10px 6px 0px rgba(220, 216, 216, 0.75);
  }
}
</style>

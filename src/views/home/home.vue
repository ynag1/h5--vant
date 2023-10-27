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
      <!-- 轮播图 -->
      <div class="home-swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="@/assets/ad.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/ad.png" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--  -->
      <div>
        <van-tabs v-model="active" class="article-page">
          <!-- 首页关注的医生列表 -->
          <div>
            <span>推荐关注</span>
            <span>查看更多</span>
          </div>
          <van-tab title="关注">
            <HomeItem
              :knowledge="item"
              v-for="(item, index) in knowledge"
              :key="index"
            />
          </van-tab>
          <van-tab title="推荐">内容 2</van-tab>
          <van-tab title="减脂">内容 3</van-tab>
          <van-tab title="饮食">内容 3</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HomeItem from '@/components/home-item'
// recommend推荐，fatReduction减脂，food健康饮食 like关注医生页面文章
import { knowledgeAPI } from '@/api/user'
export default {
  components: { // 引入组件
    HomeItem
  },
  data () {
    return {
      value: '',
      active: 0,
      ledge: {
        current: 1,
        pageSize: 10,
        type: 'like'
      },
      knowledge: []
    }
  },
  watch: {},
  created () {
    this.knowledgeAPI()
  },
  methods: {
    async knowledgeAPI () {
      const { data: { rows } } = await knowledgeAPI(this.ledge)
      this.knowledge = [...rows]
      console.log(this.knowledge)
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang='less'>
.home-add {
  margin: 9px;
  .home-search {
    .home-swipe img {
      display: inline-block;
      width: 100%;
      height: 100px;
    }
    .my-swipe .van-swipe-item {
      width: 100%;
      height: 100px;
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
  }
  .article-page {
    margin-bottom: 50px;
    margin-top: 44px;
    .my-nav {
      height: 44px;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 999;
      background: #fff;
      display: flex;
      align-items: center;
      > a {
        color: #999;
        font-size: 14px;
        line-height: 44px;
        margin-left: 20px;
        position: relative;
        transition: all 0.3s;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          width: 0;
          height: 2px;
          background: #222;
          transition: all 0.3s;
        }
        &.active {
          color: #222;
          &::after {
            width: 14px;
          }
        }
      }
      .logo {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        > img {
          width: 64px;
          height: 28px;
          display: block;
          margin-right: 10px;
        }
      }
    }
  }
}
// 添加轮播图
</style>

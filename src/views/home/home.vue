<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-add">
    <p style="padding-left: 15px; font-size: 20px">面经</p>
    <van-search
      style="
        position: absolute;
        top: 100px;
        left: 10px;
        z-index: 10;
        width: 96%;
        line-height: 30px;
      "
      v-model="value"
      shape="round"
      placeholder=" 搜一搜: 疾病/症状/医生/健康知识"
    />
    <!-- 搜索 -->
    <div class="home-search">
      <!-- 导航组件 -->
      <div class="home-zhen">
        <div>
          <img
            style="width: 50px; height: 50px"
            src="../../assets/问医生.svg"
            alt=""
          />
          <p class="home-pp">问医生</p>
          <p style="font-size: 15px; color: #b4b4b4">按科室查问医生</p>
        </div>
        <div
          onclick="window.location.href= 'http://localhost:8080/#/fast';return false"
        >
          <img
            style="width: 50px; height: 50px"
            src="../../assets/问诊.svg"
            alt=""
          />
          <p class="home-pp">极速问诊</p>
          <p style="font-size: 15px; color: #b4b4b4">20S医生极速回复</p>
        </div>
        <div>
          <img
            style="width: 50px; height: 50px"
            src="../../assets/药箱.svg"
            alt=""
          />
          <p class="home-pp">开药门诊</p>
          <p style="font-size: 15px; color: #b4b4b4">线上买药更方便</p>
        </div>
      </div>
      <!-- ----------- -->
      <div class="home-zhen">
        <div>
          <img
            style="width: 30px; height: 30px"
            src="../../assets/药品订单.svg"
            alt=""
          />
          <p class="user-pp">药品订单</p>
        </div>
        <div>
          <img
            style="width: 30px; height: 30px"
            src="../../assets/健康档案_48.svg"
            alt=""
          />
          <p class="user-pp">健康档案</p>
        </div>
        <div>
          <img
            style="width: 30px; height: 30px"
            src="../../assets/qq.svg"
            alt=""
          />
          <p class="user-pp">我的处方</p>
        </div>
        <div>
          <img
            style="width: 30px; height: 30px"
            src="../../assets/查询.svg"
            alt=""
          />
          <p class="user-pp">疾病查询</p>
        </div>
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
      <!-- 推荐 -->
      <div>
        <van-tabs
          v-model="active"
          class="article-page"
          title-active-color="#000"
          title-inactive-color="#C4C4C4"
        >
          <!-- 首页关注的医生列表 -->
          <van-tab title="关注">
            <div class="article-span">
              <!-- 添加模块 -->
              <span>推荐关注</span>
              <span style="color: #cbcbcd">查看更多 > </span>
            </div>
            <!-- 横向滑动 -->
            <div class="father1">
              <div
                class="d2"
                @scroll="handleScroll($event)"
                v-for="(item, index) in knowledge"
                :key="index"
              >
                <div>
                  <img :src="item.creatorAvatar" alt="" />
                  <p>{{ item.creatorName }}</p>
                  <span
                    style="
                      color: #a5a5a5;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 100px;
                    "
                    >{{ item.creatorHospatalName }}
                  </span>
                  <span style="color: #a5a5a5">{{ item.creatorDep }}</span>
                  <span style="color: #a5a5a5">{{ item.creatorTitles }}</span>
                  <div>
                    <van-button
                      round
                      type="info"
                      icon="plus"
                      size="small"
                      style="color: #fff"
                      >关注</van-button
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 渲染数据 -->
            <HomeItem
              :knowledge="item"
              v-for="(item, index) in knowledge"
              :key="index"
            />
          </van-tab>
          <van-tab title="推荐"
            ><HomeItem
              :knowledge="item"
              v-for="(item, index) in knowledge"
              :key="index"
          /></van-tab>
          <van-tab title="护肤"
            ><HomeItem
              :knowledge="item"
              v-for="(item, index) in knowledge"
              :key="index"
          /></van-tab>
          <van-tab title="减脂"
            ><HomeItem
              :knowledge="item"
              v-for="(item, index) in knowledge"
              :key="index"
          /></van-tab>
          <van-tab title="饮食"
            ><HomeItem
              :knowledge="item"
              v-for="(item, index) in knowledge"
              :key="index"
          /></van-tab>
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
    },
    // 获取页面滚动距离
    handleScroll (e) {
      console.log(e.target)
      // const el = e.target
      // 判断是否到达div容器底部
      // if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
      //   // 控制页数
      //   this.ledge.current = this.ledge.current + 1
      //   this.knowledgeAPI()
      // }
    },
    ds () {
      alert('我出现了啊')
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang='less'>
.home-add {
  position: relative;
  background-color: #67d7d2;
  height: 80px;
  border-radius: 0 0 160px 160px / 0 0 20px 20px;
  padding-top: 40px;
  /deep/ .van-search {
    background-color: transparent;
  }
  /deep/ .van-cell {
    box-shadow: 0 2px 0 0 #ebf5f4;
  }
  .home-search {
    margin: 70px 9px;
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
    .home-zhen {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      margin-bottom: 20px;
      p {
        margin: 5px 0;
      }
      .home-pp {
        font-weight: 600;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  .article-page {
    margin-top: 20px;

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
    .article-span {
      margin: 20px 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .father1 {
      margin-bottom: 20px;
      width: 102%;
      background-color: rgb(255, 255, 255);
      // white-space: nowrap;
      white-space: nowrap; /* 禁止超出自动换行 */
      overflow-y: auto; /* 横向滑动 */
    }
    .father1::-webkit-scrollbar {
      display: none;
    }
    .father1 .d2 {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      padding: 10px;
      margin-left: 10px;
      width: 100px;
      border: 1px solid #ededed;
      height: 170px;
      border-radius: 15px;
      display: inline-block;
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
      p {
        margin: 5px 0;
        font-weight: 600;
        font-size: 20px;
      }
      span {
        word-break: normal;
        display: block;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow: hidden;
        width: 100%;
        font-size: 10px;
      }
    }
    /deep/ .van-button--small {
      margin-top: 6px;
    }
    // /deep/ .van-button__text {
    //   color: #fff;
    // }

    /deep/ .van-tab--active {
      font-weight: 600;
      font-size: 18px;
    }
    /deep/ .van-tab__text--ellipsis {
      font-size: 18px;
    }
    /deep/ .van-tabs__line {
      background-color: #16c2a3;
    }
  }
}
// 添加轮播图
</style>

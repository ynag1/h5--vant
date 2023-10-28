<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="article-page">
    <van-cell class="article-item">
      <template #title>
        <div class="head">
          <img :src="knowledge.creatorAvatar" alt="" />
          <div class="con">
            <p class="title van-ellipsis">
              {{ knowledge.creatorName }}
            </p>
            <p class="other van-multi-ellipsis--l2">
              {{ knowledge.creatorHospatalName }} | {{ knowledge.creatorDep }} |
              {{ knowledge.creatorTitles }}
            </p>
          </div>
          <!-- <van-button plain type="primary" round size="small" icon="plus"
            >关注</van-button
          > -->
        </div>
      </template>
      <template #label>
        <h2 style="color: #000; font-weight: normal">
          {{ knowledge.title }}
        </h2>
        <div class="body van-multi-ellipsis--l2">
          <!-- clearHtml去除包含html字段 -->
          {{ knowledge.content | clearHtml }}
        </div>
        <div class="my-img">
          <van-grid :column-num="3" class="my-swipe">
            <van-grid-item :square="false">
              <van-image :src="knowledge.coverUrl[0]" />
            </van-grid-item>
            <van-grid-item>
              <van-image :src="knowledge.coverUrl[1]" />
            </van-grid-item>
            <van-grid-item>
              <van-image :src="knowledge.coverUrl[2]" />
            </van-grid-item>
          </van-grid>
        </div>
        <div class="foot">
          收藏 {{ knowledge.collectionNumber }} | 评论
          {{ knowledge.commentNumber }}
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>

export default {
  props: {
    knowledge: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style scoped lang='less'>
.article-page {
  .article-item {
    width: 100%;
    .head {
      display: flex;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
      }
      .con {
        flex: 1;
        overflow: hidden;
        padding-left: 10px;
        p {
          margin: 0;
          line-height: 1.5;
          &.other {
            font-size: 10px;
            color: #999;
          }
        }
      }
    }
    .body {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-top: 10px;
    }
    .my-swipe {
      width: 330px;
      height: 124px;
      /deep/ van-image {
        display: inline-block;
        width: 100%;
        height: 100px;
        // 圆角
        border-radius: 10px;
      }
    }
    .my-swipe .van-swipe-item {
      width: 20px;
      height: 1px;
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
    .foot {
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    }
  }
}
</style>

<template>
  <div id="indexBox">
    <div class="indexHeader">
      <mt-header fixed title="今日热闻">
        <mt-button @click.native="handleClick" slot="left">
          <img src="../assets/menu_icon.png" height="20" width="20" slot="icon">
        </mt-button>
      </mt-header>
    </div>
    <div class="indexSwipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeList">
          <!-- 使用attachImageUrl方法转换url，解决防盗链问题 -->
          <img :src="attachImageUrl(item.image)" alt="" @click="toDetail(item.id)">
          <span class="top-swipe_title">{{item.title}}</span>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="indexList">
      <mt-cell class="pd15" :title="item.title" v-for="item in topList"  @click="toDetail(item.id)">
        <img :src="attachImageUrl(item.images[0])" alt="">
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { getSwipeListApi } from '@/api/index.js'

export default {
  data() {
    return {
      // 轮播图数组
      swipeList:[],
      // 首页主体列表信息
      topList: [],
    }
  },
  mounted() {
    this.getIndexList();
  },
  methods: {
    // 图片防盗链问题解决
    attachImageUrl(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
    },
    // 获取首页信息
    getIndexList: function(){
      getSwipeListApi().then(response => {
        // 获取轮播图信息
        this.swipeList = response.data.top_stories;
        // 获取轮播图下方列表信息
        this.topList = response.data.stories;
      }).catch(
      )
    },
    // 跳转详情页
    toDetail: function(id){
      this.$router.push({path:'/detail/'+id})
    },
  },
  
};
</script>

<style lang="scss" scoped>
#indexBox {
    .indexHeader {
      margin-bottom: 40px;
    }
    .indexSwipe {
        height:200px;
        img {
          width: 100%;
          height: 100%;
        }
        .top-swipe_title {
            position: absolute;
            top: 140px;
            left: 20px;
            font-size: 20px;
            color: #fff;
          }
    }
    .indexList {
      img {
        width: 75px;
        height: 60px;
      }
    }
}
.pd15 {
  padding: 15px;
}

</style>

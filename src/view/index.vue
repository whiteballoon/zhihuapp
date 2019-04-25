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
       <!-- <img :src="attachImageUrl('https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg')" alt="" > -->
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import {getSwipeListApi} from '@/api/index.js'

export default {
  data() {
    return {
      // 轮播图数组
      swipeList:[],
    }
  },
  mounted() {
    this.getSwipeList();
  },
  methods: {
    // 图片防盗链问题解决
    attachImageUrl(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
    },
    // 获取轮播图信息
    getSwipeList: function(){
      getSwipeListApi().then(response => {
          this.swipeList = response.data.top_stories;
        }).catch(
          )
    },
  },
  
};
</script>

<style lang="scss" scoped>
#indexBox  {
    .indexSwipe {
        height:200px;
        img{
          width: 100%;
          height: 100%;
        }
    }
}
</style>

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
          <img :src="attachImageUrl(item.image)" alt="">
          <span></span>
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
    .indexHeader{
      margin-bottom: 40px;
    }
    .indexSwipe {
        height:200px;
        img{
          width: 100%;
          height: 100%;
        }
    }
}

</style>

<template>
  <div id="indexBox">
    <welcome v-show="welcomeShow"></welcome>
    <sidebar v-show="sidebarShow"></sidebar>
    <div class="mask" v-show="sidebarShow" @click="showSidebar"></div>
    <mt-loadmore  :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
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
      <div class="indexList" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <mt-cell class="pd15" :title="item.title" v-for="item in topList" @click.native="toDetail(item.id)">
          <img :src="attachImageUrl(item.images[0])" alt="">
        </mt-cell>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import { getSwipeListApi,getBeforeMsgApi } from '@/api/index.js'
import Sidebar  from '../components/sidebar'
import welcome  from '../components/welcome'

export default {
  data() {
    return {
      // 轮播图数组
      swipeList: [],
      // 首页主体列表信息
      topList: [],
      // 记录消息日期
      newsDate: '',
      time: null,
      allLoaded: false,
      sidebarShow: false,
      welcomeShow: true,
    }
  },
  components:{
    'sidebar': Sidebar,
    'welcome': welcome
  },
  mounted() {
    this.getIndexList();
    this.hideWelcome();
  },
  methods: {
    // 欢迎页隐藏
    hideWelcome: function(){
        setTimeout(() => {
          this.welcomeShow = false;
        }, 3500);
    },
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
        this.getBeforeDate()
        this.getBeforeMsg(this.newsDate);
      }).catch(
      )
    },
    // 获取日期信息
    getBeforeDate:function(){
      // var str  = new Date()
      // var year  =  str.getFullYear()
      // var month =  str.getMonth()+1<10?0+String(str.getMonth()+1):String(str.getMonth()+1)
      // var day = str.getDate()
      // this.newsDate = year+month+day
      if(this.time){
        var str  = new Date(this.time-1000*60*60*24)
      }else{
        var str  = new Date()
      }
      this.time =  str;
      var year  =  str.getFullYear()
      var month =  str.getMonth()+1<10?0+String(str.getMonth()+1):String(str.getMonth()+1)
      var day = str.getDate()
      this.newsDate = year+month+day
      console.log(this.newsDate)
    },
    // 根据日期获取过往消息
    getBeforeMsg:function(date){
      getBeforeMsgApi(date).then(response => {
        this.topList.push(...response.data.stories);
      }).catch(
      )
    },
    // 下拉刷新
    loadTop: function(){
      this.topList = [];
      this.time = null;
      this.getIndexList();
      this.$refs.loadmore.onTopLoaded();
    },
    loadMore:function() {
      // 加载更多数据
      this.getBeforeDate();
      this.getBeforeMsg(this.newsDate);
    },
    // 跳转详情页
    toDetail: function(id){
      this.$router.push({path:'/detail/'+id})
    },
    // 
    showSidebar: function(e){
      this.sidebarShow = false;
      let bodyEl = document.body
      bodyEl.style.position = ''
    },
    // 
    handleClick: function(){
      this.sidebarShow = true;
      let bodyEl = document.body
      bodyEl.style.position = 'fixed'
    }
  },
  
};
</script>

<style lang="scss" scoped>
#indexBox {
  .mask {
    position: fixed;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0,0, .3);
    z-index: 15;
  }
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

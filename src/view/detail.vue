<template>
  <div class="detailBox">
    <div class="detailBoxHead">
      <img :src="attachImageUrl(detailMsg.image)" alt="">
      <span class="title">{{detailMsg.title}}</span>
      <span class="imgSource">图片：{{detailMsg.image_source}}</span>
    </div>
    <div class="articleBody" v-html="detailMsg.body"></div>
    <div class="articleBottom">
      <ul>
        <li><i class="iconfont icon-fanhui" @click="$router.go(-1)"></i></li>
        <li><i class="iconfont icon-xia" ></i></li>
        <li><i class="iconfont icon-dianzan" ><span>{{popularity}}</span></i></li>
        <li><i class="iconfont icon-fenxiang" ></i></li>
        <li><i class="iconfont icon-pinglun"  @click="toComments(id)"><span>{{comments}}</span></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDetailApi, getPopularityApi } from '@/api/index.js'

export default {
  data() {
    return {
        // id号
        id:'',
        // 详情内容
        detailMsg:{},
        // 点赞数
        popularity:'',
        // 评论数
        comments:''
    }
  },
  mounted() {
    this.getDetailId()
  },
  methods: {
    // 图片防盗链问题解决
    attachImageUrl(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
    },
    // 修改返回数据中的body中的图片链接
    attachBodyContent: function(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    },
    getDetailId:function(){
      // 获取传过来的id
      this.id = this.$route.params.id
      // 根据id获取详情
      getDetailApi(this.id).then(response => {
        response.data.body = this.attachBodyContent(response.data.body)
        // 获取详情信息
        this.detailMsg = response.data;
      }).catch(
      )
      // 根据id获取点赞数，评论数
      getPopularityApi(this.id).then(response => {  
        this.popularity = response.data.popularity;
        this.comments = response.data.comments;
      }).catch(
      )
    },
    // 跳转评论页
    toComments:function(id){
      this.$router.push({path:'/comments/'+id})
    }
  },
  
};
</script>

<style lang="scss" scoped>
@import "../assets/css/news_qa.auto.css";
.detailBoxHead {
  width: 100%;
  height: 200px;
  position: relative;
  color: #fff;
  z-index: 10;
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .title{
    position: absolute;
    font-size: 20px;
    left: 20px;
    bottom: 50px;
  }
  .imgSource{
    position: absolute;
    font-size: 14px;
    right: 15px;
    bottom: 10px;
  }
}
.articleBody {
  position: relative;
  top: -200px;
}
.articleBottom {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 45px;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  background-color: #fff;
  ul {
    display: flex;
    padding: 0;
    li {
      flex: 1;
      i {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 44px;
        font-size: 24px;
        color: #999;
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

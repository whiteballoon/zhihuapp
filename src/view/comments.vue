<template>
  <div class="commentsBox">
      <div class="commentHead">{{total}}条点评</div>
      <div class="long-comments">
          <div class="total">{{longComments.length}}条长评</div>
          <ul>
              <li v-for="item in longComments">
                  <span class="left"><img :src="attachImageUrl(item.avatar)" alt=""></span>
                  <span class="right">
                      <p>
                          <span>{{item.author}}</span>
                          <i class="iconfont icon-dianzan" >{{item.likes}}</i>
                      </p>
                      <p>{{item.content}}</p>
                      <p class="replay" v-if="item.reply_to">
                          <span>//{{item.reply_to.author}}:</span>
                          {{item.reply_to.content}}
                      </p>
                      <p class="time">01-19 08:36</p>
                  </span>
              </li>
          </ul>
      </div>
      <div class="short-comments">
          <div class="total">
              <span>{{shortComments.length}}条短评</span>
              <i class="iconfont icon-xia" @click="shortCommentsShow = !shortCommentsShow"></i>
           </div>
            <ul v-show="shortCommentsShow">
              <li v-for="item in shortComments">
                  <span class="left"><img :src="attachImageUrl(item.avatar)" alt=""></span>
                  <span class="right">
                      <p>
                          <span>{{item.author}}</span>
                          <i class="iconfont icon-dianzan" >{{item.likes}}</i>
                      </p>
                      <p>{{item.content}}</p>
                      <p class="replay" v-if="item.reply_to">
                          <span>//{{item.reply_to.author}}:</span>
                          {{item.reply_to.content}}
                      </p>
                      <p class="time">01-19 08:36</p>
                  </span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { getLongCommentsApi, getShortCommentsApi } from '@/api/index.js'

export default {
  data() {
    return {
        // id号
        id:'',
        // 长评
        longComments:'',
        // 短评
        shortComments:'',
        // 评论总数
        total:'',
        // 短评是否展示
        shortCommentsShow: false,
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
    getDetailId:function(){
        // 获取传过来的id
        this.id = this.$route.params.id;
        //获取长评
        getLongCommentsApi(this.id).then(response => {  
            this.longComments = response.data.comments;
            // 获取短评
            getShortCommentsApi(this.id).then(response => {  
                this.shortComments = response.data.comments;
                this.total = this.longComments.length + this.shortComments.length;
                console.log(this.longComments.length)
                console.log(this.total)
                console.log(this.shortComments)
            }).catch(
            )
        }).catch(
        )
    },
    // 时间戳转换工具
    // 明天将时间戳转换和img 都 转换成过滤器
  },
  
};
</script>

<style lang="scss" scoped>
$mainColor:#26a2ff;
.commentHead {
    width: 100%;
    height: 40px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    background-color: $mainColor;
}
.long-comments {
    .total {
        width: 100%;
        height: 40px;
        font-weight: 600;
        font-size: 16px;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
    }
    ul {
        padding: 0;
       li {
           padding: 15px;
           border-bottom: 1px solid #eee;
           display: flex;
           &>span.left{
               flex: 1;
               img {
                   width: 90%;
                   object-fit: cover;
                   border-radius: 50%;
               }
           }
           &>span.right{
               flex: 7;
               &>p {
                   margin: 0 !important;
               }
               p:first-child {
                   i {
                       padding-right: 10px;
                       float: right;
                        color: #b4b4b4;
                   }
               }
               p:nth-child(2) {
                   font-size: 15px;
                   color: rgb(102, 102, 102);
                   margin: 10px 0 !important;
               }
               p.replay {
                   font-size: 15px;
                   color: #929292;
                   margin: 0  0 10px 0 !important;
                    span {
                        color: #000;
                    }
               }
               p.time {
                color: #ccc;
               }
           }
       } 
    }
}
.short-comments {
    .total {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
        span {
            font-weight: 600;
            font-size: 16px;
        }
        i {
            float: right;
            margin-right: 35px;
        }
    }
    ul {
        padding: 0;
       li {
           padding: 15px;
           border-bottom: 1px solid #eee;
           display: flex;
           &>span.left{
               flex: 1;
               img {
                   width: 90%;
                   object-fit: cover;
                   border-radius: 50%;
               }
           }
           &>span.right{
               flex: 7;
               &>p {
                   margin: 0 !important;
               }
               p:first-child {
                   i {
                       padding-right: 10px;
                       float: right;
                        color: #b4b4b4;
                   }
               }
               p:nth-child(2) {
                   font-size: 15px;
                   color: rgb(102, 102, 102);
                   margin: 10px 0 !important;
               }
               p.replay {
                   font-size: 15px;
                   color: #929292;
                   margin: 0  0 10px 0 !important;
                    span {
                        color: #000;
                    }
               }
               p.time {
                color: #ccc;
               }
           }
       } 
    }
}

</style>

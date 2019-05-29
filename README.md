# zhihuapp
这是一个基于Vue全家桶开发的知乎日报WebApp，页面样式主要参考iOS版知乎日报APP。
## 声明
『知乎』是 知乎. Inc 的注册商标。本软件与其代码非由知乎创作或维护。软件中所包含的信息与内容皆违反版权与知乎用户协议。本项目所有文字图片等稿件内容均由知乎提供，获取与共享之行为或有侵犯知乎权益的嫌疑。若被告知需停止共享与使用，本人会及时删除整个项目。请您了解相关情况，并遵守知乎协议。
## 前言 
初学vue做练习
为什么是知乎日报呢？
* 首先呢，知乎日报是一个完整的已经上线的APP，并且它的功能比较完善，但是页面还不是很复杂，比较适合新手练手。
* 其次，由于开发的是前端项目，数据获取是一个比较恼火的问题，然而github上已经有大神给出了知乎日报 API 分析，这极大的方便的解决了数据的获取问题，我们只需关注前端，而不需关注后台数据。
## 技术栈
vue2 + vue-router + axios + vuex + vue-cli + mint-ui + sass
##  功能
* [x] 首页
* [x] 欢迎页
* [x] 首页滚动到底加载更多
* [x] 首页下拉刷新
* [x] 查看新闻详情
* [ ] 新闻详情载入下一篇
* [ ] 收藏新闻
* [ ] 路由懒加载
* [x] 查看评论
* [x] 短评展开和收缩
* [x] 首页侧边栏
## 项目截图
### 首页
<img src="https://github.com/whiteballoon/zhihuapp/blob/master/images/shouye.png" width="300">

### 折叠页
<img src="https://github.com/whiteballoon/zhihuapp/blob/master/images/zhedieye.png" width="300">

### 详情页
<img src="https://github.com/whiteballoon/zhihuapp/blob/master/images/xiangqing.png" width="300">

### 评论页
<img src="https://github.com/whiteballoon/zhihuapp/blob/master/images/pinglun.png" width="300">

## 项目运行

```
# Project setup
npm install
# Compiles and hot-reloads for development
npm run serve
# Compiles and minifies for production
npm run build
```
## 总结
### 1.知乎接口跨域问题（开发环境）
调用知乎API时遇到了跨域问题，可以使用vue-cli3自带proxy配置进行解决，配置非常简单：
#### 第一步在vue项目的根目录下找到vue.config.js文件，如果没有就 新建一个，再写入 以下内容
```
module.exports = {
    devServer: {
      proxy: {
        '/api': { 
          target: 'https://news-at.zhihu.com/', //需要请求的目标接口
        }
      }
    }
  }
```
#### 第二步将目标接口请求地址中的host和端口改成运行vue项目相同的host和端口
此时请求api/xxx将会代理成http://news-at.zhihu.com/api/4/xxx 这样就不会有跨域问题了，当然这只适用于开发环境。
### 2.图片防盗链问题
知乎API返回的数据中的图片都是存储在知乎服务器上的url地址，直接请求会返回403，所以需要进行一些处理，这里我采用了yatessss同学在使用vue完成知乎日报web版的解决方案，使用Images.weserv.nl进行缓存图片，并在需要使用图片url的地方进行相应的替换。
```
 <template>
        ...
          <!-- 使用attachImageUrl方法转换url，解决防盗链问题 -->
          <img :src="attachImageUrl(item.image)" alt="">
        ...
</template>

<script>
export default {
  methods: {
    // 图片防盗链问题解决
    attachImageUrl(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
    },
  },
  
};
</script>
```
## 参考
感谢izzyleung 整理的 知乎日报API分析
https://github.com/cccyb/vue-zhihu-daily#vue-zhihu-daily

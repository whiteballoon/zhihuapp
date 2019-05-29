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









## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

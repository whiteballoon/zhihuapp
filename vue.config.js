module.exports = {
    devServer: {
      proxy: {
        '/api': {  // 请求的连接中包含api ，上图中框出了api，与这里相同 即可
          target: 'https://news-at.zhihu.com/', //需要请求的目标接口
        }
      }
    }
  }
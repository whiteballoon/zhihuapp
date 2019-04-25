module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://news-at.zhihu.com/', //对应自己的接口
          changeOrigin: true,
          ws: true,
        //   pathRewrite: {
        //     '^/api': '/api/4'
        //   }
        }
      }
    }
  }
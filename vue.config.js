module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        pathRewrite: { // pathRewrite 重写路径
          '^/api': ''
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/',
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}

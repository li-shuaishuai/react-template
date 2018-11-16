var path = require('path')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  build: {
    mode: NODE_ENV,
    sourceMap: false,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    bundleAnalyzerReport: process.env.analyz
  },
  dev: {
    mode: NODE_ENV,
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    sourceMap: 'eval-source-map',
    overlay: true // 在浏览器上全屏显示编译的errors或warnings
  }
}
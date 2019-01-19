/**
 * Copyright (c) IcePoint
 * https://www.lishuaishuai.com
 * https://github.com/li-shuaishuai/react-cli
 */

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
    sourceMap: 'source-map',
    host: '0.0.0.0',
    port: 3001,
    autoOpenBrowser: true,
    overlay: true,
    historyApiFallback: true,
    noInfo: true
  },
  common: {
    {{#if mobile}}
    remUnit: 75 // 设计稿的宽度 在css及预编译语言中px自动转换为rem (https://www.npmjs.com/package/postcss-adaptive)
    {{/if}}
  }
}
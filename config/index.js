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
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    bundleAnalyzerReport: process.env.analyz,
  },
  dev: {
    mode: NODE_ENV,
    sourceMap: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    devServer: {
      host: {{#if mobile}}'0.0.0.0'{{else}}'localhost'{{/if}},
      port: 3001,
      open: true,
      overlay: true,
      historyApiFallback: true,
      noInfo: false,
      proxy: {},
    }
  }{{#if mobile}},
  common: {
    remUnit: 75, // 设计稿宽度
    autoRem: true,
  }{{/if}}{{#with pwa}},
  workboxOption: {
    // 这些选项帮助快速启用 ServiceWorkers
    // 不允许遗留任何“旧的” ServiceWorkers
    clientsClaim: true,
    skipWaiting: true,
  },{{/with}}
}

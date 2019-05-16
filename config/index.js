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
    bundleAnalyzerReport: process.env.analyz
  },
  dev: {
    mode: NODE_ENV,
    sourceMap: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    {{#if mobile}}
    host: '0.0.0.0',
    {{/if}}
    port: 3001,
    autoOpenBrowser: true,
    overlay: true,
    historyApiFallback: true,
    noInfo: true
  }{{#if mobile}},
  common: {
    remUnit: 75, // 设计稿宽度
    autoRem: true
  }
  {{/if}}
}

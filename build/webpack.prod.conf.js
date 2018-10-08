const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      minify: {
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 去除空格
        removeAttributeQuotes: true // 去除空属性
      },
    }),
  ]
})
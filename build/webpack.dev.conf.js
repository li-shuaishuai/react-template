const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './../', 'dist'),
    port: 8086,
    open: true,
    inline: true,
    hot: true,
    overlay: true // 在浏览器上全屏显示编译的errors或warnings
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    }),
    new webpack.DefinePlugin({
      __DEV__: 'true'
    })
  ]
})
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf.js')
const DashboardPlugin = require('webpack-dashboard/plugin')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  mode: config.dev.mode,
  devtool: config.dev.sourceMap,
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    inline: true,
    hot: true,
    overlay: config.dev.overlay
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    })
  ]
})
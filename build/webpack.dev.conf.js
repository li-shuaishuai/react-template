const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf.js')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  mode: config.dev.mode,
  devtool: config.dev.sourceMap,
  devServer: {
    contentBase: config.build.assetsRoot,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    inline: true,
    hot: true,
    overlay: config.dev.overlay
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    })
  ]
})
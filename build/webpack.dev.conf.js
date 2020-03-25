/**
 * Copyright (c) IcePoint
 * https://www.lishuaishuai.com
 * https://github.com/li-shuaishuai/react-cli
 */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
{{#if mobile}}
const WebpackServerQRcode = require('@ice-point/webpack-server-qrcode')
{{/if}}
const baseWebpackConfig = require('./webpack.base.conf.js')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  mode: config.dev.mode,
  devtool: config.dev.sourceMap,
  output: {
    path: config.dev.assetsRoot,
    filename: path.join(config.dev.assetsSubDirectory, 'js/[name].js'),
    chunkFilename: path.join(config.dev.assetsSubDirectory, 'js/[name].chunk.js'),
    publicPath: config.dev.assetsPublicPath,
  },
  devServer: {
    contentBase: config.dev.assetsRoot,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    inline: true,
    hot: true,
    overlay: config.dev.overlay,
    historyApiFallback: config.dev.historyApiFallback,
    noInfo: config.dev.noInfo,
  },
  plugins: [
    {{#if mobile}}
    new WebpackServerQRcode(),
    {{/if}}
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here ${config.dev.devServer.https ? 'https' : 'http'}://${config.dev.devServer.host}:${config.dev.devServer.port}`],
      }
    }),
  ],
})

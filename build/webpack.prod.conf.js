const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')
// const glob = require('glob')
// const PurifyCSSPlugin = require("purifycss-webpack")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const NODE_ENV = process.env.NODE_ENV

module.exports = merge(baseConfig, {
  mode: NODE_ENV,
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, './../')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:5].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      minify: {
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 去除空格
        removeEmptyAttributes: true // 去除空属性
      },
    }),
    new BundleAnalyzerPlugin({
      
    })
    // new PurifyCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, './../','src/*.html')),
    // })
  ]
})
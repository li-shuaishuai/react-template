const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './../', 'dist'),
    port: 8086,
    open: true,
    inline: true,
    // hot: true
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    })
  ]
})
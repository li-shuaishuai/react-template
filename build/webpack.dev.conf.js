const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './../', 'dist'),
    port: 8086,
    open: true,
    inline: true,
    // hot: true
  },
  plugins: [
    new DashboardPlugin()
  ]
})
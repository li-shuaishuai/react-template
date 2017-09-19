const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'), //入口文件
  output: {
    path: path.resolve(__dirname, './dist'), //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  devtool: 'eval-source-map', //生成Source Maps  
  devServer: {
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true // 使用热加载插件 HotModuleReplacementPlugin
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      common: path.resolve(__dirname, 'src/common/')
    }
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Created by Li Shuaishuai. GitHub:https://github.com/li-shuaishuai'),
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
    }),
    //热加载插件
    new webpack.HotModuleReplacementPlugin()
  ],
};
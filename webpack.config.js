const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'app/index.jsx'), //入口文件
  output: {
    path: path.resolve(__dirname, './build'), //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  devtool: 'eval-source-map', //生成Source Maps  
  devServer: {
    contentBase: './build', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true // 使用热加载插件 HotModuleReplacementPlugin
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'app/components/'),
      common: path.resolve(__dirname, 'app/common/')
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
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        'postcss-loader',
        'less-loader']
    },
    {
      test: /\.(png|jpg|gif|woff|woff2|svg|ttf|eot)$/,
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)    //定义编译环境
      }
    }),
    new webpack.BannerPlugin('Created by Li Shuaishuai. GitHub:https://github.com/li-shuaishuai'),
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html',
      filename: './index.html'
    }),
    //热加载插件
    new webpack.HotModuleReplacementPlugin()
  ],
};
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'), //入口文件
    output: {
        path: path.resolve(__dirname, './build'), //打包后的文件存放的地方
        filename: "bundle-[hash].js" //打包后输出文件的文件名
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
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }]
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Created by Li Shuaishuai. GitHub:https://github.com/li-shuaishuai'),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html'
        }),
        //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        //压缩JS代码
        new webpack.optimize.UglifyJsPlugin(),
        //分离CSS和JS文件
        // new ExtractTextPlugin("style/[name]-[hash].css")
    ],
};
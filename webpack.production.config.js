const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'), //入口文件
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'es6-promise',
            'whatwg-fetch'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'), //打包后的文件存放的地方
        filename: './js/[name].[chunkhash:5].js' //打包后输出文件的文件名
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
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'less-loader'
                }
                ]
            }),
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
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new CleanWebpackPlugin(['build/*.*','build/css','build/js']),
        new webpack.BannerPlugin('Created by Li Shuaishuai. GitHub:https://github.com/li-shuaishuai'),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html',
            filename: './index.html'
        }),
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 压缩JS代码
        new webpack.optimize.UglifyJsPlugin(),
        // 分离CSS和JS文件
        new ExtractTextPlugin('/css/[name].[chunkhash:5].css'),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: './js/[name].[chunkhash:5].js'
        }),
        // supresses warnings, usually from module minification
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // 移除所有注释
            },
            compress: {
                warnings: false
            }
        }),
    ],
};
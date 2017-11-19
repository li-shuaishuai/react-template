const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'), //入口文件
    },
    output: {
        path: path.resolve(__dirname, './build'), //打包后的文件存放的地方
        filename: '[name].[chunkhash:5].js' //打包后输出文件的文件名
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
                            modules: true
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
                                modules: true
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.BannerPlugin('Created by Li Shuaishuai. GitHub:https://github.com/li-shuaishuai'),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 压缩JS代码
        new webpack.optimize.UglifyJsPlugin(),
        // 分离CSS和JS文件
        new ExtractTextPlugin('/css/[name].[hash].css'),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin('common'),
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
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = require('../config')
const NODE_ENV = process.env.NODE_ENV

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: resolve('src/index.jsx'),
  output: {
    path: config.build.assetsRoot,
    filename: path.join(config.build.assetsSubDirectory, 'js/[name].js'),
    chunkFilename: path.join(config.build.assetsSubDirectory, 'js/[name].chunk.js'),
    publicPath: config.build.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]-[hash:base64:8]",
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                })
              ]
            }
          },
          { loader: "sass-loader" }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  }
}

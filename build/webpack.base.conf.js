const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:4].js',
    path: path.join(__dirname, './../', 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          // true ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]-[local]-[hash:base64:5]",
              sourceMap: true,
            }
          },
          { loader: 'postcss-loader' },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/]
      },
      {
        test: /\.(woff|svg|eot|woff2|tff)$/,
        use: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/assets/',
      to: 'assets'
    }]),
  ]
}

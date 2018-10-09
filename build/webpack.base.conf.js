const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].[hash:5].js',
    path: path.join(__dirname, './../', 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
            }
          },
          { loader: 'postcss-loader' },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/, /\.css$/]
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

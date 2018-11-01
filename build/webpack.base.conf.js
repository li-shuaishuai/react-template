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
          // MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]-[hash:base64:5]",
            }
          },
          { loader: 'postcss-loader' },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|woff|woff2|svg|ttf|eot)$/,
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
    // new MiniCssExtractPlugin({
    //   filename: "css/[name].[hash:5].css",
    //   chunkFilename: "[id].css"
    // })
  ]
}

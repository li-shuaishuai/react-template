const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: path.join(__dirname, './../', 'src/index.jsx'),
  output: {
    filename: './js/[name].[hash:5].js',
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
              localIdentName: "[name]_[local]-[hash:base64:5]",
            }
          },
          { loader: 'postcss-loader' },
          { loader: "sass-loader" }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|svg|ttf|eot)$/,
        use: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, './../', 'src/assets'),
      to: 'assets'
    }])]
}

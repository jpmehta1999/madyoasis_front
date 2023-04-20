var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    template: "./src/index.html",
    minify: false,
  })],
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      './locale': 'moment/locale'
    }
  },
  module: {
    rules: [
      {
        test: /\.?css$/i,
        use: [
          "style-loader", // Inject styles into DOM
          "css-loader", // Turns css into commonJS
          "sass-loader" // Turns sass into css
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
     },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: {
            caseSensitive: true,
            conservativeCollapse: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false,
            collapseWhitespace: false,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
          },
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[contenthash].[ext]",
            outputhPath: "imgs"
          }
        }
      }
    ]
  }
};
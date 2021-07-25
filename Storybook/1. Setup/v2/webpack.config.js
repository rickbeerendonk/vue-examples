/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global __dirname */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 9100,
    hot: true,
    open: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // You also can put this loader above, but I recommend to use
        // a separeted rule with enforce: 'post' for maintainability
        // and simplicity. For example, you can enable the loader only
        // for development build.
        test: /\.vue$/,
        use: 'vue-docgen-loader',
        enforce: 'post'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Storybook - Setup - Dynamic Loading'
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.mjs', '.vue']
  }
};

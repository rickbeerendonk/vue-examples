/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global __dirname */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[fullhash:8].js'
  },
  devtool: 'source-map',
  devServer: {
    client: {
      logging: 'error',
      overlay: true
    },
    port: 9100,
    static: {
      directory: path.join(__dirname, '/dist')
    }
  },
  mode: 'development',
  module: {
    rules: [
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
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './src/template.ejs'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.mjs', '.vue']
  }
};

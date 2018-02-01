const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new UglifyWebpackPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

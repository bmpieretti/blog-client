const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    hotloader: 'react-hot-loader/patch'
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});

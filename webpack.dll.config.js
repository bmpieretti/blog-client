const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  entry: {
    vendor: [
      'react',
      'react-dom',
      'prop-types'
    ]
  },
  output: {
    filename: '[name].dll.js'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: './dist/[name].json'
    })
  ]
};

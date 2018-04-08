const webpack = require('webpack');
const path = require('path');

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
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist/[name].json')
    })
  ]
};

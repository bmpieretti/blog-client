const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NameAllModulesPlugin = require('name-all-modules-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: './src/index.jsx'
  },
  output: {
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false,
              camelCase: true,
              localIdentName: '[local]',
              modules: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
        return chunk.name;
      }
      return chunk.mapModules(m => path.relative(m.context, m.request)).join('_');
    }),
    new webpack.optimize.SplitChunksPlugin({
      name: 'common'
    }),
    new NameAllModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

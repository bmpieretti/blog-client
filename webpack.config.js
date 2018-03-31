const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  let config = {};
  let plugins = [];

  if (isDev) {
    config = {
      entry: {
        hotloader: 'react-hot-loader/patch',
        main: './src/index.jsx'
      },
      devServer: {
        hot: true,
        contentBase: './dist',
        port: 3000
      }
    };

    plugins = [
      new webpack.HotModuleReplacementPlugin()
    ];
  } else {
    config = {
      entry: './src/index.jsx'
    };

    plugins = [
      new UglifyWebpackPlugin()
    ];
  }

  return ({
    ...config,
    output: {
      filename: (isDev) ? '[name].[hash].js' : '[name].[chunkhash].js',
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
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
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
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      ...plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': argv.mode
      }),
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
};

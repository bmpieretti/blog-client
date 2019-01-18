const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');

const env = process.env.NODE_ENV;

const options = isDev => ({
  disable: isDev,
  mozjpeg: {
    progressive: true,
    quality: 65
  },
  optipng: {
    enabled: false
  },
  pngquant: {
    quality: '65-90',
    speed: 4
  },
  gifsicle: {
    interlaced: false
  },
  webp: {
    quality: 75
  }
});

const isDev = env === 'development';
let entryOptions = {};
let plugins = [];

if (isDev) {
  entryOptions = {
    hotloader: 'react-hot-loader/patch'
  };

  plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = {
  entry: {
    app: './src/index.jsx',
    ...entryOptions
  },
  output: {
    filename: (isDev) ? '[name].js' : '[name].[chunkhash].min.js'
  },
  devServer: (isDev) ? {
    hot: true,
    contentBase: './dist',
    port: 3000
  } : undefined,
  devtool: (isDev) ? 'source-map' : false,
  mode: (env !== 'production') ? 'development' : 'production',
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              publicPath: 'assets/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: options(isDev)
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024,
              noquotes: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: options(isDev)
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      inlineSource: 'runtime~.+\\.js'
    }),
    new InlineSourcePlugin(),
    new webpack.HashedModuleIdsPlugin(),
    ...plugins
  ]
};

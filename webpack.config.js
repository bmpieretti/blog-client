const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const manifest = require('./dist/vendor.json');

const options = isDev => ({
  disable: isDev,
  mozjpeg: {
    progressive: true,
    quality: 65,
  },
  optipng: {
    enabled: false,
  },
  pngquant: {
    quality: '65-90',
    speed: 4,
  },
  gifsicle: {
    interlaced: false,
  },
  webp: {
    quality: 75,
  }
});

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  const moduleName = (isDev) ? '[name].[hash]' : '[name].[chunkhash].min';
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

  return ({
    entry: {
      app: './src/index.jsx',
      ...entryOptions
    },
    output: {
      filename: `${moduleName}.js`
    },
    devServer: (isDev) ? {
      hot: true,
      contentBase: './dist',
      port: 3000
    } : undefined,
    devtool: (isDev) ? 'inline-source-map' : false,
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: isDev
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
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
                noquotes: true,
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
      ...plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `"${argv.mode}"`
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
      new webpack.DllReferencePlugin({
        manifest
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
    ]
  });
};

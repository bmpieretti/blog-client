const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const manifest = require('./dist/vendor.json');

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
        }),
        new OptimizeCssAssetsPlugin({})
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
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: MiniCssExtractPlugin.loader
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
        'process.env.NODE_ENV': `"${argv.mode}"`
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
      new MiniCssExtractPlugin({
        filename: `${moduleName}.css`
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

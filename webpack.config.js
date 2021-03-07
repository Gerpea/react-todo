const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode !== 'production'

  return {
    mode: isDevelopment ? 'development' : 'production',
    bail: !isDevelopment,
    entry: ['react-hot-loader/patch', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : '[name].[contenthash:8].js',
      chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[contenthash:8].chunk.js',
      publicPath: '/',
      clean: true,
    },
    devtool: isDevelopment ? 'cheap-module-source-map' : false,
    devServer: {
      publicPath: '/',
      contentBase: path.resolve(__dirname, './dist'),
      hotOnly: true,
    },
    target: isDevelopment ? 'web' : 'browserslist',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(s*)css$/,
          exclude: /node_modules/,
          use: [
            ...(!isDevelopment
              ? [{ loader: MiniCssExtractPlugin.loader }]
              : [{ loader: 'style-loader' }]),
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer']],
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    optimization: Object.assign(
      {},
      {
        minimize: !isDevelopment,
        minimizer: [new CssMinimizerPlugin(), '...'],
      },
      !isDevelopment
        ? {
            splitChunks: {
              chunks: 'all',
            },
            runtimeChunk: {
              name: (entrypoint) => `runtime~${entrypoint.name}`,
            },
          }
        : undefined
    ),
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(isDevelopment),
      }),
      ...(isDevelopment ? [new ReactRefreshPlugin()] : []),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, '/public/index.html'),
            filename: 'index.html',
          },
          !isDevelopment
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      ...(!isDevelopment
        ? [
            new MiniCssExtractPlugin({
              filename: '[name].[contenthash:8].css',
              chunkFilename: '[name].[contenthash:8].chunk.css',
            }),
          ]
        : []),
    ],
  }
}

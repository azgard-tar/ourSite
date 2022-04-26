const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const devMode = 'development';

module.exports = env => ({
  mode: env.mode,
  devtool: (env.mode === devMode) ? 'inline-source-map' : false,
  entry: './app/app.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          env.mode === devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', 
          'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          env.mode === devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset',
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {},
      }),
    ],
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.mode}`
    }),
    new HtmlWebpackPlugin({
      title: 'Our site',
      template: 'app/index.html'
    })
  ].concat(env.mode === devMode ? [] : [new MiniCssExtractPlugin()]),
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
});
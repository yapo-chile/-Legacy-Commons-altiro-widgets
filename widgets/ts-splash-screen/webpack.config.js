const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'listing-item': ['./src/index.ts']
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [
      { test: /\.ts(x?)$/,
        loader: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  output: {
    filename: '[name].bundled.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new TerserPlugin({terserOptions: {
        ecma: 8,
        mangle: {
          safari10: true,
        }, // Note `mangle.properties` is `false` by default.
        safari10: true
      }})]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

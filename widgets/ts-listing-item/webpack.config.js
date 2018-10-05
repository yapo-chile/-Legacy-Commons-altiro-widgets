const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

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
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = baseConfig => {
  baseConfig.module.rules = [{
    test: /\.js$/,
    exclude: /(node_modules)?(packages)?/,
    loader: 'babel-loader' // this will use your `babel-loader@8`
  },
  {
    test: /\.MD$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
      },
    ],
  }
  ];
  return baseConfig;
};

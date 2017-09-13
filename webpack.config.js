const createLodashAliases = require('lodash-loader').createLodashAliases;

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets: ['react']
        }
      }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: createLodashAliases()
  }
};

const path = require("path");
const createLodashAliases = require("lodash-loader").createLodashAliases;

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "index.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets: ["react"]
        }
      }]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: createLodashAliases()
  }
};
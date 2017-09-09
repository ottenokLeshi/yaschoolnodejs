const path = require("path");
const createLodashAliases = require("lodash-loader").createLodashAliases;

module.exports = {
  entry: ["./test/index.js"],
  output: {
    filename: "test/dist/bundle-test.js"
  },
  module: {
    rules: [
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
  externals: {
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react-addons-test-utils": true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: createLodashAliases()
  }
};
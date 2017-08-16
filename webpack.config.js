const path = require("path");

module.exports = {
  entry: ["./index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
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
    extensions: [".js", ".jsx"]
  }
};
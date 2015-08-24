var path = require('path');

module.exports = {
  entry: "./javascript/init.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx', '.js.jsx'],
    alias: {
      javascript: path.resolve(__dirname, 'javascript'),
    }
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};

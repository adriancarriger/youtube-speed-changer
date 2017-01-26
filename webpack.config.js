var path = require('path');
var webpack = require('webpack');  
module.exports = {  
  entry: {
    'contentscript': './src/contentscript.ts',
    'script': './src/script.ts'
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // Add minification
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
}

var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.resolve('../', 'public'),
        filename: 'app.bundle.js'
    },
    
  module: {
        loaders: [
      {
        test: /\.(json|jsx)$/,
        exclude: /node_modules/,
        loader: 'json',
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        query: {
                    presets: ['es2015', 'react']
                }
      },
      {
        test: /\.(?:png|jpg|gif|svg)$/,
        loader: 'url',
      },
      {
        test: /\.css/,
        loader: 'style!css?localIdentName=[local]-[hash:base64:5]',
      },
      {
        test: /\.less/,
        loader: 'style!css?modules&localIdentName=[local]-[hash:base64:5]!less',
      },
    ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
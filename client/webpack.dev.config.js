var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
 
    // each value on this object is now an array and MUST have the extra modules
    entry: ['./client/src/index.js', 'webpack-hot-middleware/client', 'webpack/hot/dev-server'],
 
    // we use ES2015; we will want source maps for development
    devtool: 'source-map',
 
    // this is a default value; just be aware of it
    target: 'web',
 
    // "path" is now "/" because we're building our app into memory now rather than a build folder
    // "publicPath" is where the hosted app expects the resources
    output: {
        filename: 'app.bundle.js',
        path: '/',
        publicPath: 'http://localhost:8000'
    },
 
    plugins: [
      
        new webpack.HotModuleReplacementPlugin()
    ],
 
    resolve: {
        extensions: ['', '.js', 'map']
    },
 
    module: {
        loaders: [
              {
                  test: /\.css/,
                   loader: 'style!css?localIdentName=[local]-[hash:base64:5]',
             },
              {
                test: /\.(?:png|jpg|gif|svg)$/,
                 loader: 'url',
                },
             {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
 
            // "loader" property changed to "loaders" and is now an array!
            loaders: [
                // ORDER MATTERS; "react-hot" needs to be on the left, because webpack processes the loaders from right-to-left
                'react-hot', 
 
                // webpack forbids the "loader.query" property when you have multiple loaders; use a queryString to pass those details
                'babel?presets[]=react,presets[]=es2015'
            ]
        }]
    }
}
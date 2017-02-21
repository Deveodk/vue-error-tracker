var webpack = require('webpack');
var path = require('path')

var baseConfig = {
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ],
    },
    output: {
        path: './',
        filename: "main.js",
        library: ["VueErrorTracker"],
        libraryTarget: "umd"
    }
};

/**
 *  npm config allows vue-seo be distributed
 *  as an npm package without double-requiring vue
 * */

module.exports = [
    baseConfig,
];

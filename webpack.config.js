const path = require('path');
const webpack = require('webpack');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/' /** this is html src location */
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};

module.exports = config;

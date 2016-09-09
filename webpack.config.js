
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    debug: true,
    context: path.join(__dirname, 'src'),
    entry: {
        'math.format': './math.format'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                loader: 'babel'
            }
        ]
    },
};

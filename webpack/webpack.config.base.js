var webpack = require('webpack')
var path = require('path')
var config = require('../config')
var util = require('./util')
var loaders = require('./loaders')
var baceConfig = {
    cache: true,
    entry: util.getEntrys(config.entrys),
    output: {
        path: config.outputPath,
        chunkFilename: '[name].chunk.js?v=[hash:5]',
        filename: '[name].min.js'
    },
    module: {
        noParse: util.noParse,
        loaders: loaders
    },
    postcss: [
        require('precss')(),
        require('cssnano')()
    ],
    resolve: {
        extensions: ['', '.js', '.less', '.scss', '.css', '.jsx', '.ts', '.tsx', '.es6'],
        alias: {
            api:path.join(__dirname, '../app/api')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js',
            minChunks: Infinity
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ]
}
module.exports = baceConfig
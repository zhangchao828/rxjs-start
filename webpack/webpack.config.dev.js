var webpack=require('webpack')
var webpackConfig=require('./webpack.config.base'),
    plugins=webpackConfig.plugins;
var util=require('./util')
webpackConfig.output.publicPath='/dist/'
util.pushPlugins(plugins,[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    })
])
//cheap-source-map,#eval-source-map
webpackConfig.devtool='cheap-module-eval-source-map'
module.exports=webpackConfig
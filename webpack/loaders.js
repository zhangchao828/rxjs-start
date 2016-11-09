var path = require('path'),
    projectRootPath=path.resolve(__dirname, '..'),
    appPath=path.join(projectRootPath,'app');
module.exports=[{
    test: /\.jsx?$/,
    include:appPath,
    loader: 'babel?cacheDirectory=true'
},{
    test: /\.tsx?$/,
    include:appPath,
    loader: 'ts'
},{
    test: /\.css$/,
    loader: 'style!css!postcss'
},{
    test: /\.(png|jpe?g|gif)$/,
    loader: 'url',
    query: {
        limit: 5000,
        name: '[hash:5].[name].[ext]'
    }
},{
    test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url?limit=10240'
}]
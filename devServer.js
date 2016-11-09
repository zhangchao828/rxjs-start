const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxy = require('http-proxy-middleware')
const webpackDevConfig = require('./webpack/webpack.config.dev')
const compiler = webpack(webpackDevConfig);
let {port=3000,proxyTable={}}=require('./config')
const app=require('express')()
Object.keys(proxyTable).forEach((context)=> {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options ,
            changeOrigin: true,
        }
    }
    app.use(proxy(context, options))
})
app.use(webpackDevMiddleware(compiler , {
    noInfo: true,
    hot: true,
    publicPath: webpackDevConfig.output.publicPath,
    stats: {colors: true}
}))
app.use(webpackHotMiddleware(compiler))
// 处理HTML5 history API
// app.use(require('connect-history-api-fallback')())
app.use(express.static(path.join(__dirname, '/')))
app.get("*", (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (error) =>
    error?console.log(error):console.log(`Listening on port:${port}`))
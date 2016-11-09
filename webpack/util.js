var path=require('path')
var vendors=require('./vendors')
var nodeModulesPath=path.resolve(__dirname, '..','node_modules')
var config = require('../config')
module.exports = {
    getENV:function () {
        return process.env.NODE_ENV||'development'
    },
    pushPlugins: function (plugins, newPlugins) {
        var len = newPlugins.length
        for (var i = 0; i < len; i++) {
            plugins.push(newPlugins[i])
        }
    },
    getEntrys:function (entrys) {
        var ENV=this.getENV()
        Object.keys(entrys).forEach(function (entryName) {
            var entryPath=entrys[entryName]
            var entryConfig=[]
            if(ENV!=='production'){
                entryConfig.push('webpack-hot-middleware/client?reload=true')
            }
            entryConfig.push(entryPath)
            entrys[entryName]=entryConfig
        })
        entrys.vendor=vendors
        return entrys
    },
    noParse:[
        
    ]
}
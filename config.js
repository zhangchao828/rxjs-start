var path = require('path')
module.exports={
    entrys:{
        app:path.join(__dirname,'/app/')
    },
    outputPath:path.join(__dirname,'/dist/'),
    publicPath:'/dist/',
    //是否开启代码校验
    eslint:false,
    port:3000,
    //代理
    proxyTable:{
        '/p':'http://admintest.hunliji.com'
    }
}
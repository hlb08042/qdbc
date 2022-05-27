let path = require('path')
module.exports = {
    // 入口文件
    entry:"./src/index.js",
    // 输出到
    output:{
        // 输出的名称
        filename:"bundle.js",
        // 输出的路径
        // 绝对路径，用path获取
        path:path.resolve(__dirname,'dist'), //当前目录下的dist
    },
    // 模式
    mode:'development' //开发模式
}
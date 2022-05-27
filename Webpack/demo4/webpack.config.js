let path = require('path')
// 安装依赖
let HtmlWebPackPlugin = require('html-webpack-plugin')
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
    mode:'development', //开发模式
    // loader的配置
    module:{
        // 匹配css文件，进行转换处理，多个规则放在数组里
        rules:[
            {
                test:/\.css$/,//正则
                use:[
                    // use数组中loader的顺序，从下到上，逆序
                    // 将js的样式内容插入到style标签
                    "style-loader", 
                    // 将css文件转换为js
                    "css-loader"
                ]
            }
        ]
    },
    // 插件配置
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        })
    ]
}
let path = require('path');
let webpack = require('webpack');
//引入HtmlWebpackPlugin
let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    //webpack入口文件
    entry: './index.js',
    //webpack出口文件
    output: {
        //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        path: path.join(__dirname, 'dist'), 
        filename: "bundle.js"
    },
    //webpack-loaders配置
    module: {
        rules: [
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                }
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    //配置webpack-dev-server
    devServer:{
        contentBase:"./src/index.html"
    },
    //插件配置
    plugins:[
        //全局使用jquery
        new webpack.ProvidePlugin({
            $: "jquery",
                jQuery: "jquery",
                'window.$':'jquery',
                'window.jQuery':'jquery',
                Popper: ['popper.js', 'default'],
                
        }),
        //html生成插件
        new HtmlWebpackPlugin({
            // title: 'Hello World app',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            // filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
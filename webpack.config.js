const path = require('path')
const htmlPlugins = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
                use: [
                    {
                        loader: 'url-loader',  //指定使用的loader和loader的配置参数
                        options: {
                            limit: 500, //把小于500b的文件打成base64格式，写入JS
                            name: 'images/[hash:8].[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/i,  //根据html模板自动打包生成html文件
                use:[ 'html-withimg-loader'] 
            },
            {
                test: /\.js$/,  //处理高级语法
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,  //处理.vue文件
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: {
                    loader: "url-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            }
        ]
    },
    plugins: [
        new htmlPlugins({
            minify: {
                removeAttributeQuotes: true   //去掉属性双引号
            },
            hash: true,   //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存js
            template: './src/index.html'  //以src文件夹下面的index.html为模板
        }),
        new MiniCssExtractPlugin({  //分离css文件
            filename: "[name].css",
            chunkFilename: '[id].css'
        }),
        new VueLoaderPlugin()
    ]
}
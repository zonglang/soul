const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin")
const Webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'), // 项目总入口js文件
    // 输出文件
    output: {
        path: path.join(__dirname, 'dist'), // 所有的文件都输出到dist/目录下
        filename: 'bundle-[hash].js' // 输出文件的名称加上hash值
    },
    module: {
        rules: [{
                // 使用vue-loader解析.vue文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                // 要加上style-loader才能正确解析.vue文件里的<style>标签内容
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 不处理这两个文件夹里的内容
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    // 处理顺序是从sass-loader到style-loader
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'sass-loader' 
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当文件大小小于limit byte时会把图片转换为base64编码的dataurl，否则返回普通的图片
                        limit: 8192,
                        name: 'dist/assest/images/[name]-[hash:5].[ext]' // 图片文件名称加上内容哈希
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // 最新版的vue-loader需要配置插件
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的文件名称
            template: 'index.html', // 指定用index.html做模版
            inject: 'body' // 指定插入的<script>标签在body底部
        }),
        new CleanWebpackPlugin(['dist']),
        new Webpack.HotModuleReplacementPlugin() // 模块热替换插件
    ],
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        host: '0.0.0.0', // 配置成0.0.0.0的话通过ip，localhost都能访问
        overlay: {
            errors: true // 如果有编译错误的话直接显示到页面上
        },
        hot: true // 开启模块热替换【https://webpack.docschina.org/guides/hot-module-replacement】
    }
};
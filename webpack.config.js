const path = require('path');
const ExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //设置模式，可以是development或者production
    mode: "development",

    // 入口和输出部分
    entry: './script/index.js',
    output: {
        path: path.resolve(__dirname, "dist/script"),
        filename: "app.js"
    },

    //loader部分
    module: {
        rules: [
            {
                //匹配文件类型
                test: /\.css$/,
                //调用了新的插件的方法，这里使用了css-loader
                use: [
                    {
                        loader: ExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    // 插件部分
    plugins: [
        new ExtractPlugin({
            filename: "[name].css"
        })
    ]
};
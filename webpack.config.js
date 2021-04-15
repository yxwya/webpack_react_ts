// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
   // mode:'developpment',
   devtool: 'source-map', //追踪代码报错地方
   entry: {
      app: './src/index.tsx'
   },
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
          title: 'yxw',
         template: path.resolve(__dirname, './public/index.html'),
         filename: 'index.html',
         favicon: './public/yuan.ico' //yuan.ico文件路径
      }),
      new CleanWebpackPlugin(), // 打包清除dist
      new friendlyErrorsWebpackPlugin(), //命令友好插件
   ],
   resolve: {
      extensions: ['.js','.ts', '.tsx', '.json'],
    },
   module: {
      rules: [
         // JavaScript
         {
            test: /\.m?js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
         //ts
         {
            test: /\.tsx?$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
               loader: 'babel-loader',
               options: {
                  plugins:[
                     [
                        "@babel/plugin-transform-runtime",
                        {
                        "absoluteRuntime": false,
                        "corejs": false,
                        "helpers": true,
                        "regenerator": true,
                        "useESModules": true
                        }
                     ],
                     ["@babel/plugin-syntax-dynamic-import"],
                     ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                  ],
                  presets: ['@babel/preset-env',"@babel/preset-react","@babel/preset-typescript"],
               },
            }
         },
         //解析图片
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
         },
         // Fonts and SVGs
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
         },
         // CSS, PostCSS, and Sass
         {
            test: /\.(scss|css|sass)$/,
            use: ['style-loader', 'css-loader','postcss-loader','sass-loader'],
         },
      ],
   },
   devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, './dist'),
      open: false,
      hot: true,
      quiet: true,
      port: 8080,
   },
}
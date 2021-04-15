// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
   // mode:'developpment',
   devtool: 'inline-source-map', //追踪代码报错地方
   entry: {
      app: './src/index.tsx'
   },
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
          title: 'yuanxiaowei',
         template: path.resolve(__dirname, './public/index.html'),
         filename: 'index.html',
      }),
      new CleanWebpackPlugin(), // 打包清除dist
      new friendlyErrorsWebpackPlugin(), //命令友好插件
   ],
   module: {
      rules: [
         // JavaScript
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
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
            use: 'ts-loader',
            exclude: /node_modules/,
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
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
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
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[chunkhash].js', 
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    }, 
    plugins: [
        new HTMLPlugin({template: './src/index.html', filename: 'index.html'}), 
        new HTMLPlugin({template: './src/anketa.html', filename: 'anketa.html'}), 
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/,
            use: 'html-loader'
          },
          {
            test: /\.(jpg|png|svg|jpeg|gif)$/,
            type: 'asset/resource'
          }
            
        ]
    },
}
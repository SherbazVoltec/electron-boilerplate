const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],
    module: {
        rules: [
            {
            test: /\.(jpg|png|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
            },
            {
            test: /\.css$/,
            use: "css-loader"
            }
         ]
    }
}
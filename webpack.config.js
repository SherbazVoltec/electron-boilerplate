const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        new MiniCssExtractPlugin()
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
            // We use 2 loaders for CSS
            // First process the css code and then connect it to
            // the style loader
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /electron_entry\.js/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'electron_entry.js',
                            outputPath: './',
                        }
                    }]
            },
         ],
    }
}
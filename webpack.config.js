const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry: "./index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css', 
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            "React": "react",
         }),
    ],
    module: {
        rules: 
        [
            {
            test: /\.(jpg|png|gif|svg)$/,
            use: 
            [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/',
                    }
                }
            ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader', 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /electron_entry\.js/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'electron_entry.js',
                            outputPath: '',
                        }
                    }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: []
                    }
                }
            },
         ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    // This is disabled as we want to use React and ReactDOM internally.
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM"
    // }
}


const path = require('path')

//for merge
/* const merge = require('webpack-merge');
const common = require('./webpack.common.js'); */

const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = //merge(common, 
    {
        entry: './src/client/index.js',
        output: {
            libraryTarget: 'var',
            library: 'Client'
        },
        devServer: { // server was auto opening on 8080, Fixed with this from forum
            port: 8000,
            contentBase: './dist', // newly added for merge
        },
        mode: 'development',
        devtool: 'inline-source-map', //'source-map', changed
        stats: 'verbose',
        module: {
            rules: [{
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html",
            }),
            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
            })
        ]
    }
    //); // for merge
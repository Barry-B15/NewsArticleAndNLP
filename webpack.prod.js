const path = require('path')
const webpack = require('webpack')

//for merge
/* const merge = require('webpack-merge');
const common = require('./webpack.common.js'); */

const HtmlWebPackPlugin = require("html-webpack-plugin")

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = //merge(common, 
    {
        entry: './src/client/index.js',
        output: { // added from forum
            libraryTarget: 'var',
            library: 'Client'
        },
        mode: 'production',
        devtool: 'source-map', // for merge
        module: {
            rules: [{
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                },
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html",
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
        ]
    };
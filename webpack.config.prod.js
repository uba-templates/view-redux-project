const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        utils: ["./src/utils/index.js"],
        app: ["babel-polyfill","./src/entry.js"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: ""
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                include: path.resolve("src"),
                use: [{
                  loader: "babel-loader"
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  use: ["css-loader", "postcss-loader"],
                  fallback: "style-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'postcss-loader', 'less-loader'],
                  fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                  loader: "url-loader",
                  options: {
                    limit: 10000,
                    name: "[name].[hash:8].[ext]"
                  }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                  loader: "file-loader",
                  options: {
                    name: "[name].[hash:8].[ext]"
                  }
                }]
            }
        ]
    },

    resolve: {
        extensions: [".jsx", ".js"],
        alias: {
            components: path.resolve(__dirname, "src/components/"),
            assets: path.resolve(__dirname, "src/assets/"),
            containers: path.resolve(__dirname, "src/containers/"),
            routers: path.resolve(__dirname, "src/routers/"),
            store: path.resolve(__dirname, "src/store"),
        }
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "prop-types": "PropTypes",
        "redux": "Redux",
        "react-redux": "ReactRedux",
        "axios": "axios",
        "fetch-jsonp": "fetchJsonp",
        "lodash": "_",
        "tinper-bee": "TinperBee"
    },

    plugins: [
        new CommonsChunkPlugin({
            name: "utils"
        }),
        new ExtractTextPlugin({
            filename: "[name].[hash].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "body",
            hash: true,
            favicon: "./src/assets/images/favicon.png",
            chunks: ["utils", "app"]
        }),
        new webpack.ProgressPlugin(),
        // new webpack.optimize.ModuleConcatenationPlugin(),
     
    ]
}
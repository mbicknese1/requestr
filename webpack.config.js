const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: {
        background: "./src/background.js",
        popup: "./src/popup.jsx"
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        rules: [
            {
                include: __dirname + "/src",
                loader: "babel-loader",
                test: /\.jsx?$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/popup.html",
            filename: "popup.html",
            inject: true,
            chinks: ["popup"]
        }),
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "." }
            ]
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
    devServer: {
        hot: true,
        port: 8080
    }
}
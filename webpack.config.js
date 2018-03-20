const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.resolve('playground'),
    output: {
        path: path.resolve('dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Playground - React NPM Minimal Boilerplate',
            template: 'playground/index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;
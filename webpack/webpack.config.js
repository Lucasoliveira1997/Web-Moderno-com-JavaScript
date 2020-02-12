const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss/,
            use: [          
                MiniCssExtractPlugin.loader,
                // 'style-loader', //Adiciona o css na DOM onjetando a tag style, nao o arquivo externo
                'css-loader', // interpreta o @import, url...
                'sass-loader'
            ]
        }]
    }
}
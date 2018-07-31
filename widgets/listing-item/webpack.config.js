module.exports = {
    module: {
        loaders: [
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            }
        ],
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    }
};
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                exclude: path.resolve(__dirname, 'node_modules'),
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                exclude: path.resolve(__dirname, 'node_modules'),
                test: /\.graphql?$/,
                use: [
                    {
                        loader: 'webpack-graphql-loader',
                        options: {
                            output: "document"
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node'
};

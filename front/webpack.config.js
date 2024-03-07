module.exports = {
    entry: [
        './src/index.tsx'
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "dist",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    }
};
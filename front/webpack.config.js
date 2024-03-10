const path = require("path");

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
                test: /\.(tsx|ts|js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                cacheCompression: false,
                cacheDirectory: true,
                presets: [
                    '@babel/preset-env',
                    ['@babel/preset-react', { runtime: 'automatic' }],
                    '@babel/preset-typescript',
                ],
                    plugins: [['babel-plugin-styled-components']]
                }
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|jpg|gif)$/,
                use : 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "src/")
        }
    }
};
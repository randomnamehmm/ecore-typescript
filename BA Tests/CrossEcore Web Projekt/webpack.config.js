const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    mode: 'development',
    output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'output'),
    },
    devtool: 'inline-source-map',
    module: {
    rules: [
    {
    loader: 'ts-loader',
    //exclude: /node_modules/,
    options: { allowTsInNodeModules: true }
    },
    ],
    },
    resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
    },
    target: 'node' //notwendig für filesystem fs
};
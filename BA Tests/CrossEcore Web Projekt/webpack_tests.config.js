const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './tests/tests.ts',
    mode: 'development',
    output: {
    filename: 'tests.js',
    path: path.resolve(__dirname, 'output_tests'),
    },
    devtool: 'inline-source-map',
    module: {
    rules: [
    {
    loader: 'ts-loader',
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